import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { StudentService } from '../student/student.service';
import { AssignTudenstToLesson } from './assign-lesson-to-student.input';
import { CreateLessonInput } from './create-lesson.input';
import { Lesson } from './lesson.entity';
import { LessonService } from './lesson.service';
import { LessonType } from './lesson.type';

@Resolver((of) => LessonType)
export class LessonResolver {
  constructor(
    private lessonService: LessonService,
    private studentService: StudentService,
  ) {}

  @Query((returns) => LessonType)
  gatAlessons(@Args('id') id: string) {
    return this.lessonService.getAlesson(id);
  }
  @Query((returns) => [LessonType])
  getAllLessons() {
    return this.lessonService.getAllLessons();
  }

  @Mutation((returns) => LessonType)
  createLesson(@Args('createLesson') createLesson: CreateLessonInput) {
    return this.lessonService.createLesson(
      createLesson.name,
      createLesson.startDate,
      createLesson.endDate,
      createLesson.students,
    );
  }

  @Mutation((returns) => LessonType)
  assignStudentsToLessonMuta(
    @Args('assignStudentsToLesson')
    assignStudentsToLesson: AssignTudenstToLesson,
  ) {
    const { lessonID, studentIDs } = assignStudentsToLesson;
    return this.lessonService.assignStudentsToLesson(lessonID, studentIDs);
  }

  @ResolveField((returns) => LessonType)
  async students(@Parent() lesson: Lesson) {
    console.log(lesson);
    return this.studentService.getManyStudents(lesson.students);
  }
}
