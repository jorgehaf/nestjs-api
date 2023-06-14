import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AboutApiModule } from './about-api/about-api.module';

@Module({
  imports: [AboutApiModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
