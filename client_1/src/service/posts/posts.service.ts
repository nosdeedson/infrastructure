import { Injectable } from '@nestjs/common';

@Injectable()
export class PostsService {
    getAnotherPost(): string | PromiseLike<string> {
        return "another post";
    }
    
    async getPost() :Promise<string> {
        return "a single message";
    }
}
