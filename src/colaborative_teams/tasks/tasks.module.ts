import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';
import { Task, TaskSchema } from './schemas/tasks.schema'; // Importa el modelo y el esquema

@Module({
  imports: [
    TasksModule, // Importa el módulo del modelo
    MongooseModule.forFeature([{ name: Task.name, schema: TaskSchema }]), // Registra el modelo en Mongoose
  ],
  controllers: [TasksController],
  providers: [TasksService],
})
export class TasksModule {}
