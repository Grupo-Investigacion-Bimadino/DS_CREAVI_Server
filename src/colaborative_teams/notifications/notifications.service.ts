import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Notification } from './schemas/notifications.schema'; // Importa el modelo de notificación

@Injectable()
export class NotificationsService {
  constructor(@InjectModel(Notification.name) private readonly notificationModel: Model<Notification>) {}

  async findOne(id: string): Promise<Notification> {
    return this.notificationModel.findById(id).exec();
  }

  async findAll(): Promise<Notification[]> {
    return this.notificationModel.find().exec();
  }

  async create(createNotificationDto: Notification): Promise<Notification> {
    const createdNotification = new this.notificationModel(createNotificationDto);
    return createdNotification.save();
  }

  async update(id: string, updateNotificationDto: Notification): Promise<Notification> {
    return this.notificationModel.findByIdAndUpdate(id, updateNotificationDto, { new: true }).exec();
  }

  async delete(id: string): Promise<Notification> {
    return this.notificationModel.findOneAndDelete({ _id: id }).exec();
  }
}
