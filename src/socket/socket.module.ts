import { Module } from '@nestjs/common';
import { SocketGateway } from './socket.gateway';
import { RedisIoAdapter } from './redis-io.adapter';
import { RoomModule } from '../room/room.module';

@Module({
  imports: [RoomModule],
  providers: [SocketGateway, RedisIoAdapter],
})
export class SocketModule { }
