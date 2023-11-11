import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CiclodocService } from './ciclodoc.service';
import { CreateCiclodocDto } from './dto/create-ciclodoc.dto';
import { UpdateCiclodocDto } from './dto/update-ciclodoc.dto';

@Controller('ciclodoc')
export class CiclodocController {
  constructor(private readonly ciclodocService: CiclodocService) {}

  @Post()
  create(@Body() createCiclodocDto: CreateCiclodocDto) {
    return this.ciclodocService.create(createCiclodocDto);
  }

  @Get()
  findAll() {
    return this.ciclodocService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ciclodocService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCiclodocDto: UpdateCiclodocDto) {
    return this.ciclodocService.update(+id, updateCiclodocDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ciclodocService.remove(+id);
  }
}
