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
import { CreateCargoDto } from './dto/create-cargo.dto';
import { CargosService } from './cargos.service';
import { Cargo } from './entities/cargo.entity';
import { UpdateCargoDto } from './dto/update-cargo.dto';

@Controller('cargos')
export class CargosController {
  constructor(private cargosService: CargosService) {}

  @Get()
  getCargos() {
    return this.cargosService.getCargos();
  }

  @Get(':id_cargo')
  getCargo(@Param('id_cargo', ParseIntPipe) id_cargo: number): Promise<Cargo> {
    console.log(id_cargo);
    console.log(typeof id_cargo);
    return this.cargosService.getCargo(id_cargo);
  }

  @Post()
  createCargo(@Body() CreateCargoDto: CreateCargoDto) {
    return this.cargosService.createCargo(CreateCargoDto);
  }

  @Delete(':id_cargo')
  deleteCargo(@Param('id_cargo', ParseIntPipe) id_cargo: number) {
    return this.cargosService.deleteCargo(id_cargo);
  }

  @Patch(':id_cargo')
  update(@Param('id_cargo') id_cargo: number, @Body() UpdateCargoDto: UpdateCargoDto) {
    return this.cargosService.update(id_cargo, UpdateCargoDto);
  }
}
