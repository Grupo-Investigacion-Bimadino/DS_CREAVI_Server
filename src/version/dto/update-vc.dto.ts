import { PartialType } from '@nestjs/mapped-types';
import { CreateVcDto } from './create-vc.dto';

export class UpdateVcDto extends PartialType(CreateVcDto) {}
