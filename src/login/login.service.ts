import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class LoginService {
  constructor(private jwtService: JwtService) { }

  async getToken(email: string) {
    const payload = { email }
    return { "access_token": this.jwtService.sign(payload) };
  }
}
