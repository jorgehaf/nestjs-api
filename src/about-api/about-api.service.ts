import { Injectable, VersioningType } from '@nestjs/common';

@Injectable()
export class AboutApiService {
  getApiVersion() {
    return VersioningType.HEADER
  }
}
