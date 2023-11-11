import { CreateCiclodocDto } from './dto/create-ciclodoc.dto';
import { UpdateCiclodocDto } from './dto/update-ciclodoc.dto';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ciclodoc } from './entities/ciclodoc.entity';

@Injectable()
export class CiclodocService {
  constructor(
    @InjectRepository(Ciclodoc) private ciclodocRepository: Repository<Ciclodoc>,
  ) {}

  async createCiclodoc(ciclodoc: CreateCiclodocDto) {
    const ciclodocFound = await this.ciclodocRepository.findOne({
      where: {
        nom_ciclo: ciclodoc.nom_ciclo,
      },
    });
    if (ciclodocFound) {
      return new HttpException(
        'Nombre del ciclo documental ya existe',
        HttpStatus.CONFLICT,
      );
    }
    const newCiclo = this.ciclodocRepository.create(ciclodoc);
    return this.ciclodocRepository.save(newCiclo);
  }

  getCiclodoc() {
    return this.ciclodocRepository.find();
  }

  getCiclodocOne(id_ciclo: number) {
    return this.ciclodocRepository.findOne({
      where: {
        id_ciclo,
      },
    });
  }

  deleteCiclodoc(id_ciclo: number) {
    return this.ciclodocRepository.delete({ id_ciclo });
  }

  update(id_ciclo: number, Ciclodoc: UpdateCiclodocDto) {
    return this.ciclodocRepository.update({ id_ciclo }, Ciclodoc);
  }
}

