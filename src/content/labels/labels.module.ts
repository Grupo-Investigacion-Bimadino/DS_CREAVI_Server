import { Module } from '@nestjs/common';
import { labelsController } from './labels.controller';
import { labelsService } from './labels.service';
import { LabelsModule } from './labels/labels.module';

@Module({
  controllers: [labelsController],
  providers: [labelsService],
  imports: [LabelsModule]
})
export class labelsModule {}
