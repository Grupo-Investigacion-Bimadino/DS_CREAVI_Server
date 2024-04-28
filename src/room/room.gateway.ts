import { OnModuleInit } from '@nestjs/common';
import {
  MessageBody,
  ConnectedSocket,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { RoomService } from './room.service';

@WebSocketGateway({
  cors: { origin: '*' },
  namespace: '/',
})
export class RoomGateway implements OnModuleInit {
  constructor(private readonly roomService: RoomService) { }

  @WebSocketServer() server: Server;

  private connectedClients: number = 0;

  onModuleInit() {
    this.server.on('connection', (socket) => {
      this.connectedClients++;

      this.server.emit('connectedClients', {
        connectedClients: this.connectedClients,
      });

      socket.on('disconnect', () => {
        this.connectedClients--;
        this.server.emit('connectedClients', this.connectedClients);
      });
    });
  }

  @SubscribeMessage('newRoom')
  async onNewRoom(@MessageBody() body: any) {
    // save on RoomService and returns room id
    let { ownerId, name, description } = body;
    const room = await this.roomService.createRoom(ownerId, name, description);

    // return id to client
    this.server.emit('onRoomCreate', { message: 'New room', room });
  }

  //list rooms
  @SubscribeMessage('listRooms')
  async onListRooms() {
    const rooms = await this.roomService.getRoomList();
    this.server.emit('onListRooms', { message: 'List rooms', rooms });
  }
}
