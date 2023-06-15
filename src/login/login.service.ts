import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateLoginDto } from './dto/create-login.dto';
import { UpdateLoginDto } from './dto/update-login.dto';

@Injectable()
export class LoginService {
  // constructor(private jwtService: JwtService) { }

  async getToken(email: string) {
    const payload = { email }
    return { "access_token": email };
    // return { "access_token": this.jwtService.sign(payload) };
  }
}
