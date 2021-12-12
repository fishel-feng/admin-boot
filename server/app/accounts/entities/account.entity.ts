import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
import { User } from '../../users/entities/user.entity';

@Entity()
export class Account {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  telephone: string;

  @Column()
  password: string;

  @Column()
  status: number;

  @OneToOne(() => User, user => user.account)
  @JoinColumn()
  user: User;
}
