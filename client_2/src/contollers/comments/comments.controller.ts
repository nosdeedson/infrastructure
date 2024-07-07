import { Controller, Get } from '@nestjs/common';
import { CommentsService } from 'src/resource/comments/comments.service';

@Controller('comments')
export class CommentsController {

    constructor(private comments: CommentsService){}

    @Get()
    async getComment(): Promise<string>{
        return this.comments.getComment();
    }
}
