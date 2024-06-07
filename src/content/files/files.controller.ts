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
    import { filesService } from './files.service';
    @Controller('files')
    export class filesController {
    constructor(private readonly filesService: filesService) {}
    // files one by id findOnfiles.service)
    @Get(':d')
    findOne(@Param('id') id: number): string {
    return this.filesService.findOne(id);
    }
    @Get()
    findAll(): string {
    return this.filesService.findAll();
    }
    @Post()
    create(@Body() createfilesDto): string {
    return this.filesService.create(createfilesDto);
    }
    @Patch(':id')
    update(@Param('id') id: number, @Body() updatefiles): string {
        return this.filesService.update(id, updatefiles);
    }
    @Delete(':id')
    delete(@Param('id') id: number): string {
    return this.filesService.delete(id);
    }
    }