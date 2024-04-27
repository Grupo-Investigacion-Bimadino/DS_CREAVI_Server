import { Injectable } from '@nestjs/common';
import { CreateHistoryDto } from './dto/create-history.dto';
import { UpdateHistoryDto } from './dto/update-history.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Histories } from './schemas/histories.schema';

@Injectable()
export class HistoriesService {
  constructor(
    @InjectModel(Histories.name) private historiesModel: Model<Histories>
  ) { }

  async create(createHistoryDto: CreateHistoryDto) {
    let history = await this.historiesModel.create(createHistoryDto);
    return history;
  }

  findAll() {
    return `This action returns all histories`;
  }

  findOne(id: number) {
    return `This action returns a #${id} history`;
  }

  update(id: number, updateHistoryDto: UpdateHistoryDto) {
    return `This action updates a #${id} history`;
  }

  remove(id: number) {
    return `This action removes a #${id} history`;
  }
}
