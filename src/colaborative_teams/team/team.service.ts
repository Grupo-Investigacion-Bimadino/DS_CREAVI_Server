import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ObjectId } from 'mongodb';
import { Team } from './schemas/team.schema';

@Injectable()
export class TeamService {

  constructor(@InjectModel(Team.name) private teamModel: Model<Team>) { }

  async findOne(id: string) {
    // busca un equipo por su Id
    let team = await this.teamModel.findById(id);
    return team;
  }

  async findAll() {
    let teams = await this.teamModel.find();
    return teams;
  }

  async create(createTeamDto) {
    let team = this.teamModel.create(createTeamDto);
    return team;
  }

  update(id, updateTeam) {
    let team = this.teamModel.findByIdAndUpdate(id, updateTeam, { new: true });
    return team;
  }

  delete(id) {
    let team = this.teamModel.findByIdAndDelete(id);
    return team;
  }
}
