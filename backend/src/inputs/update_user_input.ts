import { InputType, Field } from "type-graphql";


@InputType()
export class UpdateUserInput {
  @Field({ nullable: true })
  firstnam?: string;

  @Field({ nullable: true })
  lastnam?: string;

  @Field({ nullable: true })
  nickname?: string;

  @Field({ nullable: true })
  email?: string;

  @Field({ nullable: true })
  password?: string;
}
