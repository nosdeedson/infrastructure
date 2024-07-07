import { Module } from '@nestjs/common';
import { CommentsController } from './comments.controller';
import { CommentsService } from 'src/resource/comments/comments.service';

@Module({
  controllers: [CommentsController],
  providers: [CommentsService]
})
export class CommentsModule {}
