import { Module } from '@nestjs/common';
import { StructureService } from './structure.service';
import { StructureController } from './structure.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { StructureSchema } from './schemas/structure.schema';


@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Structure', schema: StructureSchema }]),
  ],
  controllers: [StructureController],
  providers: [StructureService],
})
export class Structure { }
