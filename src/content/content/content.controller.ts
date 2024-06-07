import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
  Patch,
} from '@nestjs/common';
import { contentService } from './content.service';

@Controller('contents')
export class contentController {
  constructor(private readonly contentService: contentService) { }
  // find one by id findOne(id)
  @Get(':id')
  findOne(@Param('id') id: string): Promise<{}> {
    return this.contentService.findOne(id);
  }

  @Get()
  findAll(): Promise<{}> {
    return this.contentService.findAll();
  }

  @Post()
  create(@Body() createcontentDto): Promise<{}> {
    return this.contentService.create(createcontentDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatecontent): Promise<{}> {
    return this.contentService.update(id, updatecontent);
  }

  @Delete(':id')
  delete(@Param('id') id: number): Promise<{}> {
    return this.contentService.delete(id);
  }
}