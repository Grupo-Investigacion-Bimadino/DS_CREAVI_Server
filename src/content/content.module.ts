import { Module } from '@nestjs/common';
import { contentModule } from './content/content.Module';
import { filesModule } from './files/files.Module';
import { labelsModule } from './labels/labels.module';
import { multimediaModule } from './multimedia/multimedia.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://jtiradoverbel06:Juan.tirado20@edit.hhfcfay.mongodb.net/',
    ),
    contentModule,
    filesModule,
    labelsModule,
    multimediaModule,
  ],
  controllers: [],
  providers: [],
})
export class ContentModule {}
