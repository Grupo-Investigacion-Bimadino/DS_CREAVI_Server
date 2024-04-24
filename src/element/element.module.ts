import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ElementService } from './element.service';
import { ElementController } from './element.controller';
import { ElementSchema } from './schemas/element.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Element', schema: ElementSchema }]),
  ],
  controllers: [ElementController],
  providers: [ElementService],
})
export class ElementModule { }
