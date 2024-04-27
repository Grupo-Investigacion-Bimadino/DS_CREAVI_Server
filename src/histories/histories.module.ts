import { Module } from '@nestjs/common';
import { HistoriesService } from './histories.service';
import { HistoriesController } from './histories.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { HistoriesSchema } from './schemas/histories.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Histories', schema: HistoriesSchema }]),
  ],
  controllers: [HistoriesController],
  providers: [HistoriesService],
})
export class HistoriesModule { }
