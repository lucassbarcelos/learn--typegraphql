import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, ObjectID, ObjectIdColumn, ManyToMany, OneToMany, JoinColumn, ManyToOne, TableInheritance, BeforeUpdate } from "typeorm";
import { ObjectType, Field } from "type-graphql";
import { Lazy, Company } from "./Company";

@ObjectType()
@Entity()
@TableInheritance({ column: { type: String, name: "type" } })
export abstract class Employee extends BaseEntity {
  @Field(() => String)
  @ObjectIdColumn()
  _id: ObjectID;

  @Field(() => String)
  @Column()
  name: { value: string; };

  @Field(() => String, { nullable: true })
  @Column()
  companyId: string;

  @Field(() => Company, { nullable: true })
  company?: Company;

  @Field(() => String)
  @Column()
  role: string;

  @Field(() => String)
  @Column({ name: "assistenceStart" })
  avaibilitStart: string;



  @BeforeUpdate()
  sendEmailEmployee = () => {
    'call.jaiminho';
  };
}
