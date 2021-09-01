import { InputType, Field } from "type-graphql";

@InputType()
export class CreateAvaliableEmployeeInput {
  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  companyId?: string;

  @Field({ nullable: true })
  role?: string;

  @Field({ nullable: true })
  avaibilitStart: string;

  @Field(() => String, { nullable: false })
  personId?: string;

  @Field(() => Boolean, { nullable: false })
  availableInFuture: boolean;
}
