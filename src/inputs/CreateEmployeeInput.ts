import { InputType, Field } from "type-graphql";

@InputType()
export class CreateEmployeeInput {
  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  role?: string;
}
