import { Resolver, Query, Mutation, Arg, } from "type-graphql";
import { Employee } from "../entities/Employee";
import { CreateEmployeeInput } from "../inputs/CreateEmployeeInput";
import { UpdateEmployeeInput } from "../inputs/UpdateEmployeeInput";
import { Company } from "../entities/Company";
import { ObjectId } from "mongodb";
import { CreateAvaliableEmployeeInput } from "../inputs/CreateAvaliableEmployeeInput";

@Resolver()
export class EmployeeResolver {
  @Query(() => [Employee])
  async employees() {
    const employeesData = await Employee.find();
    const employees = [];
    for (let employee of employeesData) {
      employee.company = await Company.findOne({ where: { _id: new ObjectId(employee.companyId) } });
      employees.push(employee);
    };
    return employees;
  }

  @Query(() => Employee)
  async Employee(@Arg("id") id: string) {
    const employee = await Employee.findOne({ where: { id } });
    return employee;
  }

  @Mutation(() => Employee)
  async createEmployee(@Arg("data") data: CreateEmployeeInput) {
    const employee = Employee.create(data);
    await employee.save();
    return employee;
  }

  @Mutation(() => Employee)
  async CreateAvaliableEmployee(@Arg("data") data: CreateAvaliableEmployeeInput) {
    const employee = Employee.create(data);
    await employee.save();
    return employee;
  }

  @Mutation(() => Employee)
  async updateEmployee(@Arg("_id") _id: string, @Arg("data") data: UpdateEmployeeInput) {
    const id = new ObjectId(_id);
    const employee = await Employee.findOne({ where: { _id: id } });
    if (!employee) throw new Error("Employee not found!");
    Object.assign(employee, data);
    await employee.save();
    return employee;
  }

  @Mutation(() => Boolean)
  async deleteEmployee(@Arg("id") id: string) {
    const employee = await Employee.findOne({ where: { id } });
    if (!employee) throw new Error("Employee not found!");
    await employee.remove();
    return true;
  }
}
