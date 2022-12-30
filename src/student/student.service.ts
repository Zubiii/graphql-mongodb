import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { randomUUID } from 'crypto';
import { Repository } from 'typeorm';
import { Student } from './student.entity';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student) private studentRepository: Repository<Student>,
  ) {}

  async createStudent(firstName, lastName): Promise<Student> {
    const newStudent = this.studentRepository.create({
      id: randomUUID(),
      firstName,
      lastName,
    });
    return await this.studentRepository.save(newStudent);
  }
}
