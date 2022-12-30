import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { randomUUID } from 'crypto';
import { Repository } from 'typeorm';
import { Lesson } from './lesson.entity';

@Injectable()
export class LessonService {
  constructor(
    @InjectRepository(Lesson) private lessonRepository: Repository<Lesson>,
  ) {}

  async createLesson(name, startDate, endDate): Promise<Lesson> {
    const lesson = this.lessonRepository.create({
      id: randomUUID(),
      name,
      startDate,
      endDate,
    });
    return await this.lessonRepository.save(lesson);
  }

  async getAlesson(id: string): Promise<Lesson> {
    return await this.lessonRepository.findOne({ where: { id } });
  }

  async getLessons(): Promise<Lesson[]> {
    return await this.lessonRepository.find();
  }
}
