import { Controller, Get, Post, Body, Param, Put, Delete, Patch } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './schemas/tasks.schema';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Task | null> {
    return this.tasksService.findOne(id);
  }

  @Get()
  async findAll(): Promise<Task[]> {
    return this.tasksService.findAll();
  }

  @Post()
  async create(@Body() createTasksDto: Task): Promise<Task> {
    return this.tasksService.create(createTasksDto);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateTasksDto: Task): Promise<Task | null> {
    return this.tasksService.update(id, updateTasksDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<Task | null> {
    return this.tasksService.delete(id);
  }
}
