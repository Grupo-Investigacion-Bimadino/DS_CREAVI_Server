import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateElementDto } from './dto/create-element.dto';
import { UpdateElementDto } from './dto/update-element.dto';
import { Model } from 'mongoose';
import { Element } from './schemas/element.schema';

@Injectable()
export class ElementService {
  constructor(
    @InjectModel(Element.name) private elementModel: Model<Element>,
  ) {}

  async create(createElementDto: CreateElementDto) {
    const element = new this.elementModel(createElementDto);
    const newElement = await element.save();
    return newElement;
  }

  async findAll() {
    const elements = await this.elementModel.find().exec();
    return elements;
  }

  async findOneByName(name) {
    const element = await this.elementModel.findOne({ name }).exec();
    return element;
  }

  async findOne(id: string) {
    const element = await this.elementModel.findById(id).exec();
    return element;
  }

  async update(id: string, updateElementDto: UpdateElementDto) {
    const updatedElement = await this.elementModel.findByIdAndUpdate(
      id,
      updateElementDto,
      { new: true },
    );
    return updatedElement;
  }

  async remove(id: string) {
    const element = await this.elementModel.findByIdAndDelete(id);
    return element;
  }
}
