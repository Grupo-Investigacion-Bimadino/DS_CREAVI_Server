import { OnModuleInit } from '@nestjs/common';
import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  ConnectedSocket,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { ChatService } from './chat.service';

@WebSocketGateway({
  cors: { origin: '*' },
  namespace: '/',
})
export class ChatGateway implements OnModuleInit {
  constructor(private readonly chatService: ChatService) {}

  @WebSocketServer() server: Server;

  onModuleInit() {
    this.server.on('connection', (socket) => {
      console.info('Chat connected', socket.id);
    });
  }

  @SubscribeMessage('message')
  handleMessage(client: any, payload: any): string {
    return 'Hello world!';
  }

  @SubscribeMessage('newMessage')
  async onNewMessage(@MessageBody() body: any) {
    let { ownerId, senderId } = body;
    const newMessage = await this.chatService.saveMessage(body);

    this.server.emit('onNewMessage', {
      msg: 'New message',
      newMessage,
      ownerId,
      senderId,
    });
  }

  @SubscribeMessage('getMessagesByRoomId')
  async onGetMessagesByRoomId(@MessageBody() body: any) {
    let { ownerId } = body;
    const roomMessages = await this.chatService.getMessagesByRoomId(ownerId);

    this.server
      .to(ownerId)
      .emit('onLoadMessagesRoom', { ownerId, roomMessages });
  }

  @SubscribeMessage('joinRoom')
  async onJoinRoom(
    @MessageBody() body: any,
    @ConnectedSocket() client: Socket,
  ) {
    const { ownerId, userId } = body;

    client.join(ownerId);
    const messages = await this.chatService.getMessagesByRoomId(ownerId);

    this.server
      .to(ownerId)
      .emit('onLoadMessagesRoom', { userId, ownerId, messages });
  }

  @SubscribeMessage('leaveRoom')
  onLeaveRoom(@MessageBody() body: any, @ConnectedSocket() client: Socket) {
    const { roomId, userId } = body;
    client.leave(roomId);
    this.server.to(roomId).emit('onUserLeaveRoom', { userId, roomId });
  }
}
