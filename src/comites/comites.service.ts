import { Injectable } from '@nestjs/common';
import { CreateComiteDto } from './dto/create-comite.dto';
import { UpdateComiteDto } from './dto/update-comite.dto';

@Injectable()
export class ComitesService {
  create(createComiteDto: CreateComiteDto) {
    return 'This action adds a new comite';
  }

  findAll() {
    return `This action returns all comites`;
  }

  findOne(id: number) {
    return `This action returns a #${id} comite`;
  }

  update(id: number, updateComiteDto: UpdateComiteDto) {
    return `This action updates a #${id} comite`;
  }

  remove(id: number) {
    return `This action removes a #${id} comite`;
  }
}
