import {
  Controller,
  UseGuards,
  Request,
  Post,
  Body,
  Get,
  Param,
} from '@nestjs/common';
import { RoomService } from './room.service';

@Controller('room')
export class RoomController {
  constructor(private readonly roomService: RoomService) {}

  @Post('create')
  async createRoom(
    @Request() req,
    @Body('name') name: string,
    @Body('description') description: string,
  ) {
    const ownerId = req.user.id;
    return this.roomService.createRoom(ownerId, name, description);
  }

  @Get('list')
  getRoomList() {
    return this.roomService.getRoomList();
  }

  @Get('list/:listId')
  getRoomListById(@Param('listId') listId: string) {
    return this.roomService.getRoomListById(listId);
  }
}
