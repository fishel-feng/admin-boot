import { AppController } from './app.controller';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountsModule } from './app/accounts/accounts.module';
import { AuthModule } from './app/auth/auth.module';
import { PermissionsModule } from './app/permissions/permissions.module';
import { UsersModule } from './app/users/users.module';

@Module({
  imports: [
    AuthModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'auth_test',
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    UsersModule,
    PermissionsModule,
    AccountsModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
