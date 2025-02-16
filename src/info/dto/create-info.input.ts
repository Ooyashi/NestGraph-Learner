import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateInfoInput {
  @Field(() => String)
  firstName: string;

  @Field(() => String)
  lastName: string;

  @Field(() => String)
  email: string;
}
