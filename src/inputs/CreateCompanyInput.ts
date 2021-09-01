import { InputType, Field } from "type-graphql";
import { Employee } from "../entities/Employee";

@InputType()
export class CreateCompanyInput {
    @Field()
    name: string;

    @Field(() => String)
    holder: string;
}
