import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cargo } from './entities/cargo.entity';
import { CreateCargoDto } from './dto/create-cargo.dto';
import { UpdateCargoDto } from './dto/update-cargo.dto';

@Injectable()
export class CargosService {
  constructor(
    @InjectRepository(Cargo) private cargoRepository: Repository<Cargo>,
  ) {}


  async createCargo(cargo: CreateCargoDto) {
    const cargoFound = await this.cargoRepository.findOne({
      where: {
        nom_cargo: cargo.nom_cargo,
      },
    });
    if (cargoFound) {
      return new HttpException(
        'Nombre del cargo ya existe',
        HttpStatus.CONFLICT,
      );
    }
    const newCargo = this.cargoRepository.create(cargo);
    return this.cargoRepository.save(newCargo);
  }

  getCargos() {
    return this.cargoRepository.find();
  }

  getCargo(id_cargo: number) {
    return this.cargoRepository.findOne({
      where: {
        id_cargo,
      },
    });
  }

  deleteCargo(id_cargo: number) {
    return this.cargoRepository.delete({ id_cargo });
  }

  update(id_cargo: number, cargo: UpdateCargoDto) {
    return this.cargoRepository.update({ id_cargo }, cargo);
  }
}

