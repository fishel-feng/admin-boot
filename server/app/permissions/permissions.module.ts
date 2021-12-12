import { Global, Module } from '@nestjs/common';
import { PermissionsService } from './permissions.service';
import { PermissionsController } from './permissions.controller';

@Global()
@Module({
  controllers: [PermissionsController],
  providers: [PermissionsService]
})
export class PermissionsModule {}
