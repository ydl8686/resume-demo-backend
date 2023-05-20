import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

  validateUser(username: string, password: string): boolean {
    const user = this.userService.findOne(username);
    if (user && user.password === password) {
      return true;
    }
    return false;
  }
}
