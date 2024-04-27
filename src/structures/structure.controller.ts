import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StructureService } from './structure.service';
import { CreateJvcDto } from './dto/create-jvc.dto';
import { UpdateJvcDto } from './dto/update-jvc.dto';

@Controller('Structure')
export class StructureController {
  constructor(private readonly jvcService: StructureService) { }

  @Post()
  create(@Body() createJvcDto: CreateJvcDto) {
    return this.jvcService.create(createJvcDto);
  }

  @Get()
  findAll() {
    return this.jvcService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.jvcService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateJvcDto: UpdateJvcDto) {
    return this.jvcService.update(id, updateJvcDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.jvcService.remove(id);
  }
}
