import { PartialType } from '@nestjs/mapped-types';
import { CreateElementDto } from './create-element.dto';

export class UpdateElementDto extends PartialType(CreateElementDto) {}
