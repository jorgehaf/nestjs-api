import { Injectable } from '@nestjs/common';
import { readFileSync } from 'fs';
import { join } from 'path';

@Injectable()
export class AboutService {
  private readonly version: string = AboutService.readPackageVersion();

  getApiVersion() {
    return { version: this.version };
  }

  private static readPackageVersion(): string {
    try {
      const pkg = JSON.parse(
        readFileSync(join(process.cwd(), 'package.json'), 'utf8'),
      );
      return pkg.version;
    } catch {
      return process.env.npm_package_version ?? 'unknown';
    }
  }
}
