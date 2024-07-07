import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from './controller/posts/posts.module';
import { PostsService } from './service/posts/posts.service';

@Module({
  imports: [PostsModule],
  controllers: [AppController],
  providers: [AppService, PostsService],
})
export class AppModule {}
