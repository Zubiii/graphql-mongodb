import { Field, ID, InputType } from '@nestjs/graphql';
import { IsUUID } from 'class-validator';

@InputType()
export class AssignTudenstToLesson {
  @IsUUID()
  @Field((type) => ID)
  lessonID: string;

  @IsUUID('all', { each: true })
  @Field((type) => [ID])
  studentIDs: string[];
}
