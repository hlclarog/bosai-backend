import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Delete,
  ParseIntPipe,
  Patch,
} from '@nestjs/common';
import { CreateCuentaDto } from './dto/create-cuenta.dto';
import { CuentasService } from './cuentas.service';
import { Cuenta } from './entities/cuenta.entity';
import { UpdateCuentaDto } from './dto/update-cuenta.dto';


@Controller('cuentas')
export class CuentasController {
  constructor(private cuentasService: CuentasService) {}

  @Get()
  getCuentas() {
    return this.cuentasService.getCuentas();
  }

  @Get(':id_cuenta')
  getCuenta(@Param('id_cuenta', ParseIntPipe) id_cuenta: number): Promise<Cuenta> {
    console.log(id_cuenta);
    console.log(typeof id_cuenta);
    return this.cuentasService.getCuenta(id_cuenta);
  }

  @Post()
  createCuenta(@Body() CreateCuentaDto: CreateCuentaDto) {
    return this.cuentasService.createCuenta(CreateCuentaDto);
  }

  @Delete(':id_cuenta')
  deleteCuenta(@Param('id_cuenta', ParseIntPipe) id_cuenta: number) {
    return this.cuentasService.deleteCuenta(id_cuenta);
  }

  @Patch(':id_cuenta')
  update(@Param('id_cuenta') id_cuenta: number, @Body() UpdateCuentaDto: UpdateCuentaDto) {
    return this.cuentasService.update(id_cuenta, UpdateCuentaDto);
  }
}