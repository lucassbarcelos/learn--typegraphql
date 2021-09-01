import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, ObjectID, ObjectIdColumn, ManyToMany, OneToMany, JoinColumn, ManyToOne, ChildEntity } from "typeorm";
import { ObjectType, Field, ArgsType } from "type-graphql";
import { Lazy, Company } from "./Company";
import { Employee } from "./Employee";

@ArgsType()
@ChildEntity()
export class ActivatedAvailableEmployee extends Employee {
    @Field(() => String, { nullable: false })
    @Column()
    personId?: string;

    @Field(() => Boolean, { nullable: false })
    @Column()
    availableInFuture?: boolean = true;

}
