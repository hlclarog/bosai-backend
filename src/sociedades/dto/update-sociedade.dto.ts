import { PartialType } from '@nestjs/mapped-types';
import { CreateSociedadeDto } from './create-sociedade.dto';

export class UpdateSociedadeDto extends PartialType(CreateSociedadeDto) {}
