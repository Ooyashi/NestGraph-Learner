import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateInfoInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
