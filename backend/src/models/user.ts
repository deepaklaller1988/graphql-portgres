import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, IsNull } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';
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

  @Field(() => String,{nullable:true})
  @Column({ nullable: true })
  rating: string;


}
