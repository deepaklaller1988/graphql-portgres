import { Field, ID, ObjectType } from 'type-graphql';
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';


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
