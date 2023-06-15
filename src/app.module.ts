import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AboutModule } from './about/about.module';
import { LoginModule } from './login/login.module';

@Module({
  imports: [AboutModule, LoginModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
