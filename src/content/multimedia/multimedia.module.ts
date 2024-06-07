import { Module } from '@nestjs/common';
import { multimediaController } from './multimedia.controller';
import { multimediaService } from './multimedia.service';
import { MultimediaModule } from './multimedia/multimedia.module';

@Module({
  controllers: [multimediaController],
  providers: [multimediaService],
  imports: [MultimediaModule]
})
export class multimediaModule {}
