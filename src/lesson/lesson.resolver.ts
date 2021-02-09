import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AssignStudentsToLessonInput } from './assign-students-to-lesson.input';
import { CreateLessonInput } from './lesson.input';
import { LessonService } from './lesson.service';
import { LessonType } from './lesson.type';

// eslint-disable-next-line prettier/prettier
@Resolver(of => LessonType)
export class LessonResolver {
  constructor(private lessonService: LessonService) {}

  // eslint-disable-next-line prettier/prettier
  @Query(returns => LessonType)
  lesson(@Args('id') id: string) {
    return this.lessonService.getLesson(id);
  }

  // eslint-disable-next-line prettier/prettier
  @Query(returns => [LessonType])
  lessons() {
    return this.lessonService.getLessons();
  }

  // eslint-disable-next-line prettier/prettier
  @Mutation(returns => LessonType)
  createLesson(
    @Args('createLessonInput') createLessonInput: CreateLessonInput,
  ) {
    return this.lessonService.createLesson(createLessonInput);
  }

  @Mutation(returns => LessonType)
  assignStudentsToLesson(
    @Args('assignStudentsToLessonInput')
    assignStudentsToLessonInput: AssignStudentsToLessonInput,
  ) {
    const { lessonId, studentIds } = assignStudentsToLessonInput;
    return this.lessonService.assignStudentsToLesson(lessonId, studentIds);
  }
}
