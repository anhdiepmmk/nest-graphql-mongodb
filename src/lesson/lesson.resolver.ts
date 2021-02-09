import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { LessonService } from './lesson.service';
import { LessonType } from './lesson.type';

// eslint-disable-next-line prettier/prettier
@Resolver(of => LessonType)
export class LessonResolver {
  constructor(private lessonService: LessonService) {}

  // eslint-disable-next-line prettier/prettier
  @Query(returns => LessonType)
  lesson() {
    return {
      id: 'abc',
      name: 'AName',
      startDate: new Date().toISOString(),
      endDate: new Date().toISOString(),
    };
  }

  // eslint-disable-next-line prettier/prettier
  @Mutation(returns => LessonType)
  createLesson(
    @Args('name') name: string,
    @Args('startDate') startDate: string,
    @Args('endDate') endDate: string,
  ) {
    return this.lessonService.createLesson(name, startDate, endDate);
  }
}
