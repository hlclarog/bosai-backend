import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SociedadesService } from './sociedades.service';
import { CreateSociedadeDto } from './dto/create-sociedade.dto';
import { UpdateSociedadeDto } from './dto/update-sociedade.dto';

@Controller('sociedades')
export class SociedadesController {
  constructor(private readonly sociedadesService: SociedadesService) {}

  @Post()
  create(@Body() createSociedadeDto: CreateSociedadeDto) {
    return this.sociedadesService.create(createSociedadeDto);
  }

  @Get()
  findAll() {
    return this.sociedadesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sociedadesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSociedadeDto: UpdateSociedadeDto) {
    return this.sociedadesService.update(+id, updateSociedadeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sociedadesService.remove(+id);
  }
}
