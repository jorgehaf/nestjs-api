import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AboutModule } from './about/about.module';
import { LoginModule } from './login/login.module';
import { ConfigModule } from '@nestjs/config';
import { FilesModule } from './files/files.module';

@Module({
  imports: [ConfigModule.forRoot(), AboutModule, LoginModule, FilesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
