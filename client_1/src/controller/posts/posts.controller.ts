import { Controller, Get } from '@nestjs/common';
import { PostsService } from 'src/service/posts/posts.service';

@Controller('posts')
export class PostsController {

    constructor(private posts: PostsService){}

    @Get()
    public async getPost() : Promise<string> {
        return this.posts.getPost();
    }

    @Get("another-post")
    public async getAnotherPost() : Promise<string> {
        return this.posts.getAnotherPost();
    }
}
