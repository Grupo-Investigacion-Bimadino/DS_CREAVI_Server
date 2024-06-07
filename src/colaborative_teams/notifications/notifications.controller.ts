import { Controller, Get, Post, Body, Param, Put, Delete, Patch } from '@nestjs/common';
import { NotificationsService } from './notifications.service';
import { Notification } from './schemas/notifications.schema'; // Importamos el esquema de notificaciones

@Controller('notifications')
export class NotificationsController {
  constructor(private readonly notificationService: NotificationsService) {}

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.notificationService.findOne(id);
  }

  @Get()
  findAll() {
    return this.notificationService.findAll();
  }

  @Post()
  create(@Body() createNotificationDto: Notification) { // Utilizamos el tipo de datos del esquema para validar los datos
    return this.notificationService.create(createNotificationDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateNotification: Notification) {
    return this.notificationService.update(id, updateNotification);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.notificationService.delete(id);
  }
}
