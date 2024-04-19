import {
  Controller,
  UseGuards,
  Request,
  Post,
  Body,
  Get,
  Param,
  Query,
} from '@nestjs/common';
import { ChatService } from './chat.service';

@Controller('chat')
export class ChatController {
  constructor(private readonly chatService: ChatService) {}
  @Post('send')
  async sendMessage(
    @Request() req,
    @Body('roomId') roomId: string,
    @Body('content') content: {},
  ) {
    const senderId = req.user.id;

    return this.chatService.saveMessage({ ...content, roomId });
  }

  @Get(':roomId')
  getChatHistory(
    @Param('roomId') roomId: string,
    @Query('page') page: number = 1,
    @Query('pageSize') pageSize: number = 20,
  ) {
    return this.chatService.getMessagesByRoomId(roomId, page, pageSize);
  }
}
