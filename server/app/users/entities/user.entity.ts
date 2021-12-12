import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from 'typeorm';
import { Account } from '../../accounts/entities/account.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => Account, account => account.user)
  account: Account;
}
