import { Injectable } from '@nestjs/common';
import { CreateCiclodocDto } from './dto/create-ciclodoc.dto';
import { UpdateCiclodocDto } from './dto/update-ciclodoc.dto';

@Injectable()
export class CiclodocService {
  create(createCiclodocDto: CreateCiclodocDto) {
    return 'This action adds a new ciclodoc';
  }

  findAll() {
    return `This action returns all ciclodoc`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ciclodoc`;
  }

  update(id: number, updateCiclodocDto: UpdateCiclodocDto) {
    return `This action updates a #${id} ciclodoc`;
  }

  remove(id: number) {
    return `This action removes a #${id} ciclodoc`;
  }
}
