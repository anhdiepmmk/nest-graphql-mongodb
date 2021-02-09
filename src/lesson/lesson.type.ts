import { Field, ID, ObjectType } from '@nestjs/graphql';
import { StudentType } from 'src/student/student.type';

@ObjectType('Lesson')
export class LessonType {
  // eslint-disable-next-line prettier/prettier
  @Field(type => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  startDate: string;

  @Field()
  endDate: string;

  // eslint-disable-next-line prettier/prettier
  @Field(type => [StudentType])
  students: string[];
}
