import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { RoomService } from '../room/room.service';
// import { Room, User } from './chat.interfaces';

@WebSocketGateway({
  cors: { origin: '*' },
  namespace: '/',
})
export class SocketGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
  constructor(private readonly roomsService: RoomService) { }

  @WebSocketServer() server: Server;

  afterInit(server: any) {
    // console.log('Esto se ejecuta cuando inicia')
  }

  // refactorizar metodos
  /*handleConnection(client: any, ...args: any[]) {
    const users = this.getConnectedUsers(); // Implementa este método para obtener los usuarios conectados
    this.server.emit('connectedUsers', users);
  }

  handleDisconnect(client: any) {
    const users = this.getConnectedUsers(); // Implementa este método para obtener los usuarios conectados
    this.server.emit('connectedUsers', users);
  }*/

  handleConnection(client: any, ...args: any[]) {
    let payload = { idClient: client.id, isConnect: true };
    this.server.emit('onconnect', payload);
  }

  handleDisconnect(client: any) {
    let payload = { idClient: client.id, isConnect: false };
    this.server.emit('ondisconnect', payload);
  }

  @SubscribeMessage('events')
  handleEvent(client: Socket, payload: any) {
    this.server.emit('events', payload);
  }

  @SubscribeMessage('event_message')
  handleIncommingMessage(
    client: Socket,
    payload: { room: string; message: string },
  ) {
    const { room, message } = payload;
    this.server.to(`room_${room}`).emit('new_message', message);
  }

  @SubscribeMessage('chatMessage')
  handleChatMessage(client: Socket, payload: any) {
    // Este método maneja el evento 'chatMessage' enviado desde el cliente
    // Puedes emitir un mensaje de vuelta al cliente si es necesario
    this.server.emit('resChatMessage', `Servidor: ${payload}`);
  }

  @SubscribeMessage('sendTestMessage')
  handleTestMessage(client: Socket, payload: any) {
    console.log('Test message', payload);
    // Este método maneja el evento 'testMessage' enviado desde el cliente
    // Puedes emitir un mensaje de vuelta al cliente si es necesario
    this.server.emit('responseTestMessage', `Servidor: ${payload}`);
  }

  // Chat rooms
  /*@SubscribeMessage('event_join')
  handleJoinRoom(client: Socket, room: string) {
    client.join(`room_${room}`);
  }*/

  /*@SubscribeMessage('event_join')
  async handleJoinRoom(client: Socket, room: string) {
    client.join(`room_${room}`);
    // const rooms = this.getRooms();
    //const rooms = await this.socketService.getRooms();
    const rooms = [];
    this.server.emit('roomList', rooms);
  }*/

  /*@SubscribeMessage('event_leave')
  handleRoomLeave(client: Socket, room: string) {
    client.leave(`room_${room}`);
  }*/

  /*@SubscribeMessage('event_leave')
  async handleRoomLeave(client: Socket, room: string) {
    client.leave(`room_${room}`);
    // const rooms = this.getRooms();
    // const rooms = await this.socketService.getRooms();
    const rooms = [];
    this.server.emit('roomList', rooms);
  }*/

  /// end chat rooms
}
