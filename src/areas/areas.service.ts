import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Area } from './entities/area.entity';
import { CreateAreaDto } from './dto/create-area.dto';
import { UpdateAreaDto } from './dto/update-area.dto';

@Injectable()
export class AreasService {
  constructor(
    @InjectRepository(Area) private areaRepository: Repository<Area>,
  ) {}

  async createArea(area: CreateAreaDto) {
    const areaFound = await this.areaRepository.findOne({
      where: {
        nom_area: area.nom_area,
      },
    });
    if (areaFound) {
      return new HttpException(
        'Nombre del area ya existe',
        HttpStatus.CONFLICT,
      );
    }
    const newArea = this.areaRepository.create(area);
    return this.areaRepository.save(newArea);
  }

  getAreas() {
    return this.areaRepository.find();
  }

  getArea(id_area: number) {
    return this.areaRepository.findOne({
      where: {
        id_area,
      },
    });
  }

  deleteArea(id_area: number) {
    return this.areaRepository.delete({ id_area });
  }

  update(id_area: number, area: UpdateAreaDto) {
    return this.areaRepository.update({ id_area }, area);
  }
}

