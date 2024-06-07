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
    import { multimediaService } from './multimedia.service';
    @Controller('multimedia')
    export class multimediaController {
    constructor(private readonly multimediaService: multimediaService) {}
    // multimedia one by id findOnmultimedia.service)
    @Get(':d')
    findOne(@Param('id') id: number): string {
    return this.multimediaService.findOne(id);
    }
    @Get()
    findAll(): string {
    return this.multimediaService.findAll();
    }
    @Post()
    create(@Body() createmultimediaDto): string {
    return this.multimediaService.create(createmultimediaDto);
    }
    @Patch(':id')
    update(@Param('id') id: number, @Body() updatemultimedia): string {
        return this.multimediaService.update(id, updatemultimedia);
    }
    @Delete(':id')
    delete(@Param('id') id: number): string {
    return this.multimediaService.delete(id);
    }
    }