import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';
import { Account } from './entities/account.entity';

@Injectable()
export class AccountsService {
  
  

  constructor(
    @InjectRepository(Account)
    private readonly accountsRepository: Repository<Account>,
    private readonly jwtService: JwtService,
  ) {}

  async login(createAccountDto: CreateAccountDto) {
    const account = await this.accountsRepository.findOne({
      telephone: createAccountDto.telephone,
    });
    if (!account) throw new HttpException('账号不存在', HttpStatus.BAD_REQUEST);
    if (account && account.password !== createAccountDto.password)
      throw new HttpException('账号或密码错误', HttpStatus.BAD_REQUEST);
    if (account) {
      const user = account.user;
      const token = this.generateToken(user.id);
    }
  }

  async signUp(createAccountDto: CreateAccountDto) {
    const account = await this.accountsRepository.findOne({
      telephone: createAccountDto.telephone,
    });
    if (account) {
      return 'user exist';
    }
    // TODO 校验验证码是否有效

    // TODO 加密
    const res = await this.accountsRepository.save(createAccountDto);

    // TODO 创建 user

    // 执行登录

    // this.generateToken(user.id);
    this.generateToken(2333);

    // TODO check res
    return 'success';
  }

  async reset(createAccountDto: CreateAccountDto) {
    // 
  }

  async makeCaptcha(telephone: string) {
    // 判断用户是否有效
    throw new Error('Method not implemented.');
  }

  generateToken(id: number) {
    // TODO: 调用 auth service 处理 jwt 逻辑
    return this.jwtService.sign({ id });
  }

  create(createAccountDto: CreateAccountDto) {
    return 'This action adds a new account';
  }

  findAll() {
    return `This action returns all accounts`;
  }

  findOne(id: number) {
    return `This action returns a #${id} account`;
  }

  update(id: number, updateAccountDto: UpdateAccountDto) {
    return `This action updates a #${id} account`;
  }

  remove(id: number) {
    return `This action removes a #${id} account`;
  }
}
