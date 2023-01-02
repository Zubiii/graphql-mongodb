import { Field, ID, InputType } from '@nestjs/graphql';
import { IsUUID } from 'class-validator';

@InputType()
export class CreateLessonInput {
  @Field()
  name: string;

  @Field()
  startDate: string;

  @Field()
  endDate: string;

  @IsUUID('all', { each: true })
  @Field((type) => [ID])
  students: string;
}
