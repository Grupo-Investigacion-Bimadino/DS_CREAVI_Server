import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
  Patch,
} from '@nestjs/common';
import { TeamService } from './team.service';

@Controller('teams')
export class TeamController {
  constructor(private readonly teamService: TeamService) { }
  // find one by id findOne(id)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.teamService.findOne(id);
  }

  @Get()
  findAll() {
    return this.teamService.findAll();
  }

  @Post()
  create(@Body() createTeamDto) {
    return this.teamService.create(createTeamDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTeam) {
    return this.teamService.update(id, updateTeam);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.teamService.delete(id);
  }
}
