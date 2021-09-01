import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, ObjectIdColumn, ManyToMany, OneToMany, ObjectID } from "typeorm";
import { ObjectType, Field, ID } from "type-graphql";
import { Employee } from "./Employee";

export type Lazy<T extends object> = Promise<T> | T;

@Entity()
@ObjectType()
export abstract class Company extends BaseEntity {

    @Field(() => ID)
    @ObjectIdColumn()
    _id: ObjectID;

    @Field(() => String)
    @Column()
    name: string;

    @Field(() => String)
    @Column()
    holder: string;

    @Field(type => [Employee])
    employees: Employee[];
}
