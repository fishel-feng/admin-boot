import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { PermissionsService } from './permissions.service';
import { CreatePermissionDto } from './dto/create-permission.dto';
import { UpdatePermissionDto } from './dto/update-permission.dto';
import { PermissionsGuard } from '../../common/guards/permissions.guard';
import { Permissions } from '../../common/decorators/permissions.decorator';
import { Permission } from '../../common/enums/permission.enum';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('permissions')
@Controller('permissions')
@UseGuards(PermissionsGuard)
export class PermissionsController {
  constructor(private readonly permissionsService: PermissionsService) {}

  /**
   * create
   * @param createPermissionDto
   * @returns
   */
  @Post()
  @Permissions(Permission.PERMISSIONS_WRITE)
  create(@Body() createPermissionDto: CreatePermissionDto) {
    return this.permissionsService.create(createPermissionDto);
  }

  /**
   * findAll
   * @param createPermissionDto
   * @returns
   */
  @Get()
  @Permissions(Permission.PERMISSIONS_READ)
  findAll() {
    return this.permissionsService.findAll();
  }

  /**
   * findOne
   * @param createPermissionDto
   * @returns
   */
  @Get(':id')
  @Permissions(Permission.PERMISSIONS_READ)
  findOne(@Param('id') id: string) {
    return this.permissionsService.findOne(+id);
  }

  /**
   * update
   * @param createPermissionDto
   * @returns
   */
  @Patch(':id')
  @Permissions(Permission.PERMISSIONS_WRITE)
  update(
    @Param('id') id: string,
    @Body() updatePermissionDto: UpdatePermissionDto,
  ) {
    return this.permissionsService.update(+id, updatePermissionDto);
  }

  /**
   * remove
   * @param createPermissionDto
   * @returns
   */
  @Delete(':id')
  @Permissions(Permission.PERMISSIONS_WRITE)
  remove(@Param('id') id: string) {
    return this.permissionsService.remove(+id);
  }
}
