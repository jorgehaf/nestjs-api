import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { jwtConstants } from '../login/constants';
import { Request } from 'express';

@Injectable()
export class FilesService {
  transform() {
    return {
      "file": 'teste'
    };
  }
}
