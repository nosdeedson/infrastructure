import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommentsModule } from './contollers/comments/comments.module';
@Module({
  imports: [CommentsModule],
  controllers: [AppController],
  providers: [AppService,],
})
export class AppModule {}
