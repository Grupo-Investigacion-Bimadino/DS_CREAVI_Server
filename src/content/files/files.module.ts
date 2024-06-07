import { Module } from '@nestjs/common';
import { filesController } from './files.controller';
import { filesService } from './files.service';
import { FilesModule } from './files/files.module';

@Module({
  controllers: [filesController],
  providers: [filesService],
  imports: [FilesModule]
})
export class filesModule {}
