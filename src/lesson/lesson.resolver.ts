import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { AssignTudenstToLesson } from './assign-lesson-to-student.input';
import { LessonService } from './lesson.service';
import { LessonType } from './lesson.type';

@Resolver((of) => LessonType)
export class LessonResolver {
  constructor(private lessonService: LessonService) {}

  @Query((returns) => LessonType)
  gatAlessons(@Args('id') id: string) {
    return this.lessonService.getAlesson(id);
  }
  @Query((returns) => [LessonType])
  getAllLessons() {
    return this.lessonService.getAllLessons();
  }

  @Mutation((returns) => LessonType)
  createLession(
    @Args('name') name: string,
    @Args('startDate') startDate: string,
    @Args('endDate') endDate: string,
  ) {
    return this.lessonService.createLesson(name, startDate, endDate);
  }

  @Mutation((returns) => LessonType)
  assignStudentsToLessonMuta(
    @Args('assignStudentsToLesson')
    assignStudentsToLesson: AssignTudenstToLesson,
  ) {
    const { lessonID, studentIDs } = assignStudentsToLesson;
    return this.lessonService.assignStudentsToLesson(lessonID, studentIDs);
  }
}
