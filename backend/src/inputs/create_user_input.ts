import { InputType, Field } from 'type-graphql';


@InputType()
export class CreateUserInput {
  @Field()
  color: string;

  @Field()
  name: string;

  @Field(() => Number)
 rating: number;

}
