import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

// export type User = any;

@Injectable()
export class UsersService {
  private readonly users: User[];
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {
    this.users = [
      // {
      //   userId: 1,
      //   username: 'john',
      //   password: 'changeme',
      // },
      // {
      //   userId: 2,
      //   username: 'chris',
      //   password: 'secret',
      // },
      // {
      //   userId: 3,
      //   username: 'maria',
      //   password: 'guess',
      // },
    ];
  }

  async findOne(username: string): Promise<User | undefined> {
    // return this.users.find((user) => user.username === username);
    return;
  }

  async addOne() {
    // return await this.usersRepository.save({
    //   username: 'tom',
    //   password: 'jerry',
    //   telephone: '123',
    //   account: 'account',
    //   status: 1,
    //   type: '1',
    // });
  }
}
