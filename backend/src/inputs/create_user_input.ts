import { InputType, Field, Int } from 'type-graphql';
import { Column } from 'typeorm';


@InputType()
export class CreateUserInput {
  @Field()
  color: string;

  @Field()
  name: string;

  @Field(() => Number)
  @Column({ nullable: true, type :Int })
 rating: number;

}
