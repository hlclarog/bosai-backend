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
import { CreateSedeDto } from './dto/create-sede.dto';
import { SedesService } from './sedes.service';
import { Sede } from './entities/sede.entity';
import { UpdateSedeDto } from './dto/update-sede.dto';

@Controller('sedes')
export class SedesController {
  constructor(private readonly sedesService: SedesService) {}

  @Get()
  getSedes() {
    return this.sedesService.getSedes();
  }

  @Get(':id_sede')
  getSede(@Param('id_sede', ParseIntPipe) id_sede: number): Promise<Sede> {
    console.log(id_sede);
    console.log(typeof id_sede);
    return this.sedesService.getSede(id_sede);
  }

  @Post()
  createSede(@Body() CreateSedeDto: CreateSedeDto) {
    return this.sedesService.createSede(CreateSedeDto);
  }

  @Delete(':id_sede')
  deleteSede(@Param('id_sede', ParseIntPipe) id_sede: number) {
    return this.sedesService.deleteSede(id_sede);
  }

  @Patch(':id_sede')
  update(@Param('id_sede') id_sede: number, @Body() UpdateSedeDto: UpdateSedeDto) {
    return this.sedesService.update(id_sede, UpdateSedeDto);
  }
}


