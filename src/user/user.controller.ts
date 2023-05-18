import { Body, Controller, Get, Query, Post, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('user')
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

  @Post('/register')
  create(@Body() body) {
    console.log(body);
    return {
      code: 1,
    };
  }

  @Get('/get/:id')
  queryById(@Param() param) {
    console.log(param);
    return {};
  }
}
