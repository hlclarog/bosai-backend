import { PartialType } from '@nestjs/mapped-types';
import { CreateCiclodocDto } from './create-ciclodoc.dto';

export class UpdateCiclodocDto extends PartialType(CreateCiclodocDto) {}
