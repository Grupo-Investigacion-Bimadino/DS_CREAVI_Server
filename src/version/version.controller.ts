import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VersionService } from './version.service';
import { CreateVcDto } from './dto/create-vc.dto';
import { UpdateVcDto } from './dto/update-vc.dto';

@Controller('versions')
export class VersionController {
  constructor(private readonly versionService: VersionService) { }

  @Post('')
  create(@Body() createVcDto: CreateVcDto) {
    return this.versionService.createVersion(createVcDto);
  }

  @Get(':id')
  findAll(@Param('id') id: string) {
    return this.versionService.findAllComponentVersions(id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.versionService.findOneComponentVersion(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVcDto: UpdateVcDto) {
    return this.versionService.updateVersion(id, updateVcDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.versionService.removeVersion(id);
  }
}
