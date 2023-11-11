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
import { CreateAreaDto } from './dto/create-area.dto';
import { AreasService } from './areas.service';
import { Area } from './entities/area.entity';
import { UpdateAreaDto } from './dto/update-area.dto';

@Controller('areas')
export class AreasController {
  constructor(private areasService: AreasService) {}

  @Get()
  getAreas() {
    return this.areasService.getAreas();
  }

  @Get(':id_area')
  getArea(@Param('id_area', ParseIntPipe) id_area: number): Promise<Area> {
    console.log(id_area);
    console.log(typeof id_area);
    return this.areasService.getArea(id_area);
  }

  @Post()
  createArea(@Body() CreateAreaDto: CreateAreaDto) {
    return this.areasService.createArea(CreateAreaDto);
  }

  @Delete(':id_area')
  deleteArea(@Param('id_area', ParseIntPipe) id_area: number) {
    return this.areasService.deleteArea(id_area);
  }

  @Patch(':id_area')
  update(@Param('id_area') id_area: number, @Body() UpdateAreaDto: UpdateAreaDto) {
    return this.areasService.update(id_area, UpdateAreaDto);
  }
}
