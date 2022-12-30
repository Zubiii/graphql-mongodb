import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
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

  @Query((returns) => StudentType)
  getStudentByID(@Args('id') id: string) {
    return this.studentService.getStudentByID(id);
  }

  @Query((returns) => [StudentType])
  getAllStudents() {
    return this.studentService.getAllStudents();
  }
}
