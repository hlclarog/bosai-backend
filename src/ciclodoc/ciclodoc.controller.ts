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
import { CiclodocService } from './ciclodoc.service';
import { CreateCiclodocDto } from './dto/create-ciclodoc.dto';
import { UpdateCiclodocDto } from './dto/update-ciclodoc.dto';
import { Ciclodoc } from './entities/ciclodoc.entity';

@Controller('ciclos')
export class CiclodocController {
  constructor(private ciclodocService: CiclodocService) {}

  @Get()
  getCiclodoc() {
    return this.ciclodocService.getCiclodoc();
  }

  @Get(':id_ciclo')
  getCiclodocOne(@Param('id_ciclo', ParseIntPipe) id_ciclo: number): Promise<Ciclodoc> {
    console.log(id_ciclo);
    console.log(typeof id_ciclo);
    return this.ciclodocService.getCiclodocOne(id_ciclo);
  }

  @Post()
  createCiclodoc(@Body() CreateCiclodocDto: CreateCiclodocDto) {
    return this.ciclodocService.createCiclodoc(CreateCiclodocDto);
  }

  @Delete(':id_ciclo')
  deleteCiclodoc(@Param('id_ciclo', ParseIntPipe) id_ciclo: number) {
    return this.ciclodocService.deleteCiclodoc(id_ciclo);
  }

  @Patch(':id_ciclo')
  update(@Param('id_ciclo') id_ciclo: number, @Body() UpdateCiclodocDto: UpdateCiclodocDto) {
    return this.ciclodocService.update(id_ciclo, UpdateCiclodocDto);
  }
}
