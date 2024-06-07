import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Note } from './schemas/notes.shemas';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class NotesService {
  findOne(id: string) {
    throw new Error('Method not implemented.');
  }
  constructor(@InjectModel(Note.name) private noteModel: Model<Note>) {}

  async findAll() {
    return await this.noteModel.find().exec();
  }

  async findById(id: string) {
    return await this.noteModel.findById(id).exec();
  }

  async create(createNoteDto: any) {
    const createdNote = new this.noteModel(createNoteDto);
    return await createdNote.save();
  }

  async update(id: string, updateNoteDto: any) {
    return await this.noteModel.findByIdAndUpdate(id, updateNoteDto, { new: true }).exec();
  }

  async delete(id: string) {
    return await this.noteModel.findByIdAndDelete(id).exec();
  }
}



