import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cuenta } from './entities/cuenta.entity';
import { CreateCuentaDto } from './dto/create-cuenta.dto';
import { UpdateCuentaDto } from './dto/update-cuenta.dto';

@Injectable()
export class CuentasService {
  constructor(
    @InjectRepository(Cuenta) private cuentaRepository: Repository<Cuenta>,
  ) {}

  async createCuenta(cuenta: CreateCuentaDto) {
    const cuentaFound = await this.cuentaRepository.findOne({
      where: {
        nom_cuenta: cuenta.nom_cuenta,
      },
    });
    if (cuentaFound) {
      return new HttpException(
        'Nombre de la cuenta ya existe',
        HttpStatus.CONFLICT,
      );
    }
    const newCuenta = this.cuentaRepository.create(cuenta);
    return this.cuentaRepository.save(newCuenta);
  }

  getCuentas() {
    return this.cuentaRepository.find();
  }

  getCuenta(id_cuenta: number) {
    return this.cuentaRepository.findOne({
      where: {
        id_cuenta,
      },
    });
  }

  deleteCuenta(id_cuenta: number) {
    return this.cuentaRepository.delete({ id_cuenta });
  }

  update(id_cuenta: number, cuenta: UpdateCuentaDto) {
    return this.cuentaRepository.update({ id_cuenta }, cuenta);
  }
}

