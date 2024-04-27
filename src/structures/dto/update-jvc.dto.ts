import { PartialType } from '@nestjs/mapped-types';
import { CreateJvcDto } from './create-jvc.dto';

export class UpdateJvcDto extends PartialType(CreateJvcDto) {}
