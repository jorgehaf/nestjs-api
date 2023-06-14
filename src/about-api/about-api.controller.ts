import { Controller, Get } from '@nestjs/common';
import { AboutApiService } from './about-api.service';

@Controller('about-api')
export class AboutApiController {
  constructor(private readonly aboutApiService: AboutApiService) { }

  @Get()
  getApiVersion() {
    return this.aboutApiService.getApiVersion();
  }
}
