import { Module } from '@nestjs/common';
import { Lesson } from './lesson.entity';
import { LessonResolver } from './lesson.resolver';
import { LessonService } from './lesson.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Lesson])],
  providers: [LessonResolver, LessonService],
})
export class LessonModule {}