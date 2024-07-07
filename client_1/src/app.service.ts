import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {


  getPing(): string {
    return "pong " + new Date().toLocaleDateString();
  }
  getHello(): string {
    return 'Hello World! client_1';
  }
}
