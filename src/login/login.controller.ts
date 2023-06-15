import { Controller, Get, Param } from '@nestjs/common';
import { LoginService } from './login.service';

@Controller('login')
export class LoginController {
  constructor(private readonly loginService: LoginService) { }

  @Get(':email')
  getToken(@Param('email') email: string) {
    return this.loginService.getToken(email);
  }
}
