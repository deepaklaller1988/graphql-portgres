import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, IsNull, Any } from 'typeorm';
import { ObjectType, Field, ID, Int, Float } from 'type-graphql';
import { EncryptionTransformer } from 'typeorm-encrypted';
import {Contains, IsInt, Length, IsEmail, IsFQDN, IsDate, Min, Max} from "class-validator";


@ObjectType()
@Entity()
export class User extends BaseEntity {
  @Field(() => ID,{nullable:true})
  @PrimaryGeneratedColumn()
  id: string;

  @Field(() => String, {nullable:true})
  @Column({ nullable: true})
  color: string;

  @Field(() => String,{nullable:true})
  @Column({ nullable: true})
  name: string;

  @Field(() => Number,{nullable:true})
  @Column({ nullable: true })
  rating: number;


}
