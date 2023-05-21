import {
  Body,
  Controller,
  Get,
  Query,
  Post,
  Param,
  Res,
  Session,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  findAll(@Query() query) {
    console.log(query);
    return {
      code: 200,
      message: query.name,
    };
  }

  @Get('code')
  createCaptcha(@Res() res, @Session() session) {
    const captcha = this.userService.createCaptcha();
    console.log('我的', session);
    session.code = captcha.text;
    res.type('image/svg+xml');
    res.send(captcha.data);
  }

  @Post('/register')
  create(@Body() body, @Session() session) {
    console.log(body, session);
    if (body.captcha.toLowerCase() !== session.code.toLowerCase()) {
      return {
        code: 0,
        message: '验证码错误',
      };
    }
    return {
      code: 1,
      message: '注册成功，返回登录',
    };
  }

  @Get('/get/:id')
  queryById(@Param() param) {
    console.log(param);
    return {};
  }
}
