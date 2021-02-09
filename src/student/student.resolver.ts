import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { CreateStudentInput } from './student.input';
import { StudentService } from './student.service';
import { StudentType } from './student.type';

// eslint-disable-next-line prettier/prettier
@Resolver(of => StudentType)
export class StudentResolver {
  constructor(private studentService: StudentService) {}

  // eslint-disable-next-line prettier/prettier
  @Mutation(returns => StudentType)
  createStudent(
    @Args('createStudentInput') createStudentInput: CreateStudentInput,
  ) {
    return this.studentService.createStudent(createStudentInput);
  }
}
