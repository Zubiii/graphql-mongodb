import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { StudentService } from './student.service';
import { StudentType } from './student.type';

@Resolver((of) => StudentType)
export class StudentResolver {
  constructor(private studentService: StudentService) {}

  @Mutation((returns) => StudentType)
  createStudent(
    @Args('firstname') firstName: string,
    @Args('lastname') lastName: string,
  ) {
    return this.studentService.createStudent(firstName, lastName);
  }
}
