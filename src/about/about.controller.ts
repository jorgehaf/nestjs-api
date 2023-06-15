import { Controller, Get } from '@nestjs/common';
import { AboutService } from './about.service';

@Controller('about')
export class AboutController {
  constructor(private readonly AboutService: AboutService) { }

  @Get()
  getApiVersion() {
    return this.AboutService.getApiVersion();
  }
}
