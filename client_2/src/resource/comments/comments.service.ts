import { Injectable } from '@nestjs/common';

@Injectable()
export class CommentsService {
    
    async getComment(): Promise<string> {
        return "just a commnet";
    }
}
