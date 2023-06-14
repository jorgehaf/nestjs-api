import { Module } from '@nestjs/common';
import { AboutApiService } from './about-api.service';
import { AboutApiController } from './about-api.controller';

@Module({
  controllers: [AboutApiController],
  providers: [AboutApiService]
})
export class AboutApiModule {}
