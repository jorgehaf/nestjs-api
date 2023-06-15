import { Injectable, VersioningType } from '@nestjs/common';

@Injectable()
export class AboutService {
  getApiVersion() {
    return { "version": VersioningType.HEADER }
  }
}
