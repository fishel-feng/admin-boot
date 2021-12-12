import { Body, Controller, Delete, Param, Patch, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @ApiTags('users')
  @Post('/test')
  async test() {
    await this.usersService.addOne();
    return { name: 233 };
  }
}
