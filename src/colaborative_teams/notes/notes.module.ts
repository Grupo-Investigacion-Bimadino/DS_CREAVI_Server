import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Note, NoteSchema } from './schemas/notes.shemas';
import { NotesController } from './notes.controller';
import { NotesService } from './notes.service';


@Module({
  imports: [
    MongooseModule.forFeature([{ name: Note.name, schema: NoteSchema }]), // Importa el esquema de Note
  ],
  controllers: [NotesController],
  providers: [NotesService],
})
export class NotesModule {}

