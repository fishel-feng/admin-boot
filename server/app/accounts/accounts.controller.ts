import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Request,
  Req,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { LocalAuthGuard } from '../auth/local-auth.guard';
import { AccountsService } from './accounts.service';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';

@ApiTags('accounts')
@Controller('accounts')
export class AccountsController {
  constructor(private readonly accountsService: AccountsService) {}

  /**
   * 登录
   * @param req
   * @returns
   */
  @Post('login')
  async login(@Body() createAccountDto: CreateAccountDto) {
    return this.accountsService.login(createAccountDto);
  }

  /**
   * 注册
   */
  @Post('signup')
  async signUp(@Body() createAccountDto: CreateAccountDto) {
    return this.accountsService.signUp(createAccountDto);
  }

  /**
   * 重置密码
   * @param createAccountDto 
   * @returns 
   */
   @Post('reset')
  async reset(@Body() createAccountDto: CreateAccountDto) {
    return this.accountsService.reset(createAccountDto);
  }

  @Get('captcha')
  async makeCaptcha(telephone: string) {
    return this.accountsService.makeCaptcha(telephone);
  }

  @Post()
  create(@Body() createAccountDto: CreateAccountDto) {
    return this.accountsService.create(createAccountDto);
  }

  @Get()
  findAll() {
    return this.accountsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.accountsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAccountDto: UpdateAccountDto) {
    return this.accountsService.update(+id, updateAccountDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.accountsService.remove(+id);
  }
}
