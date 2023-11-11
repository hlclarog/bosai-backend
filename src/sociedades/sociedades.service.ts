import { Injectable } from '@nestjs/common';
import { CreateSociedadeDto } from './dto/create-sociedade.dto';
import { UpdateSociedadeDto } from './dto/update-sociedade.dto';

@Injectable()
export class SociedadesService {
  create(createSociedadeDto: CreateSociedadeDto) {
    return 'This action adds a new sociedade';
  }

  findAll() {
    return `This action returns all sociedades`;
  }

  findOne(id: number) {
    return `This action returns a #${id} sociedade`;
  }

  update(id: number, updateSociedadeDto: UpdateSociedadeDto) {
    return `This action updates a #${id} sociedade`;
  }

  remove(id: number) {
    return `This action removes a #${id} sociedade`;
  }
}
