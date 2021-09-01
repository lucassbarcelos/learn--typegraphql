import { Resolver, Query, Mutation, Arg, Ctx } from "type-graphql";
import { CreateCompanyInput } from "../inputs/CreateCompanyInput";
import { Employee } from "../entities/Employee";
import { Company } from "../entities/Company";
import { ObjectId } from "mongodb";

@Resolver()
export class CompanyResolver {
    @Query(() => [Company])
    async Companies() {
        const companiesData = await Company.find();
        const companies = [];
        for (let company of companiesData) {
            company.employees = await this.getCompanyEmployees(company._id.toString());
            companies.push(company);
        }
        return companies;
    }

    @Query(() => [Employee])
    async getCompanyEmployees(@Arg("id") id: string): Promise<Employee[]> {
        return await Employee.find({ where: { companyId: id } });
    }

    @Mutation(() => Company)
    async createCompany(@Arg("data") data: CreateCompanyInput): Promise<Company> {
        const lib = Company.create({ ...data });
        await lib.save();
        return lib;
    }
}

