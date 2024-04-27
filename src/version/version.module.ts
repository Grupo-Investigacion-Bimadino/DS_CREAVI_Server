import { Module } from '@nestjs/common';
import { VersionService } from './version.service';
import { VersionController } from './version.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { StructureService } from 'src/structures/structure.service';
import { HistoriesService } from 'src/histories/histories.service';
import { VersionSchema } from './schemas/version.schema';
import { HistoriesSchema } from 'src/histories/schemas/histories.schema';
import { StructureSchema } from 'src/structures/schemas/structure.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Version', schema: VersionSchema }]),
    MongooseModule.forFeature([{ name: 'Histories', schema: HistoriesSchema }]),
    MongooseModule.forFeature([{ name: 'Structure', schema: StructureSchema }])
  ],
  controllers: [VersionController],
  providers: [VersionService, StructureService, HistoriesService],
})
export class VersionModule { }
