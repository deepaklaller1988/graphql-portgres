import { Resolver, Query, Mutation, Arg } from "type-graphql";
import { User } from '../models/user';
import { CreateUserInput } from '../inputs/create_user_input';


@Resolver()
export class UserResolver {

  @Query(() => [User])
  users() {
    return User.find();
  }

  @Query(() => User)
  user(@Arg("id") id: string) {
    return User.findOne({ where: { id }});
  }

  @Mutation(() => User)
  async createUserVegetable(@Arg("data") data: CreateUserInput) {
    if(data.rating >="1" && data.rating <="5")
    {
      const user = User.create(data);
      await user.save();
      return user;
    }
    else 
      return false;
  }
}
