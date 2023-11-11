import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Sede } from './entities/sede.entity';
import { CreateSedeDto } from './dto/create-sede.dto';
import { UpdateSedeDto } from './dto/update-sede.dto';

@Injectable()
export class SedesService {
  constructor(
    @InjectRepository(Sede) private sedeRepository: Repository<Sede>,
  ) {}

  async createSede(sede: CreateSedeDto) {
    const sedeFound = await this.sedeRepository.findOne({
      where: {
        nom_sede: sede.nom_sede,
      },
    });
    if (sedeFound) {
      return new HttpException(
        'Nombre de la sede ya existe',
        HttpStatus.CONFLICT,
      );
    }
    const newSede = this.sedeRepository.create(sede);
    return this.sedeRepository.save(newSede);
  }

  getSedes() {
    return this.sedeRepository.find();
  }

  getSede(id_sede: number) {
    return this.sedeRepository.findOne({
      where: {
        id_sede,
      },
    });
  }

  deleteSede(id_sede: number) {
    return this.sedeRepository.delete({ id_sede });
  }

  update(id_sede: number, sede: UpdateSedeDto) {
    return this.sedeRepository.update({ id_sede }, sede);
  }
}

