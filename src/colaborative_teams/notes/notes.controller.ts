import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { NotesService } from './notes.service';

@Controller('notes')
export class NotesController {
  constructor(private readonly notesService: NotesService) {}

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.notesService.findOne(id);
  }

  @Get()
  findAll() {
    return this.notesService.findAll();
  }

  @Post()
  create(@Body() createNoteDto) {
    return this.notesService.create(createNoteDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateNote) {
    return this.notesService.update(id, updateNote);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.notesService.delete(id);
  }
}
