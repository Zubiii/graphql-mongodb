import { Module } from '@nestjs/common';
import { Student } from './student.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentResolver } from './student.resolver';
import { StudentService } from './student.service';

@Module({
  imports: [TypeOrmModule.forFeature([Student])],
  providers: [StudentResolver, StudentService],
  exports: [StudentService],
})
export class StudentModule {}
