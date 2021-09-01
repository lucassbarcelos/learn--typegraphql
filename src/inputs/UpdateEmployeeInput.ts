import { InputType, Field } from "type-graphql";
import { ObjectID } from "typeorm";

@InputType()
export class UpdateEmployeeInput {
  @Field(type => String, { nullable: true })
  _id?: ObjectID;

  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  role?: string;

  @Field({ nullable: true })
  companyId?: string;
}