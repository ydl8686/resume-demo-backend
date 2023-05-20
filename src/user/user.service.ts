import { Injectable } from '@nestjs/common';
import * as svgCaptcha from 'svg-captcha';
// import { CreateUserDto } from './dto/create-user.dto';
// import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  findAll() {
    return `This action returns all user`;
  }

  findOne(username: string) {
    return {
      username,
      password: '123',
    };
  }

  createCaptcha() {
    const Captcha = svgCaptcha.create({
      size: 4,
      fontSize: 50,
      width: 100,
      height: 34,
      background: '#cc9966',
    });
    return Captcha;
  }
}
