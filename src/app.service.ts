import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return String(process.env.NODE_ENV);
  }
}
