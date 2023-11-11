import { Module } from '@nestjs/common';
import { CiclodocService } from './ciclodoc.service';
import { CiclodocController } from './ciclodoc.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ciclodoc } from './entities/ciclodoc.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Ciclodoc])],
  controllers: [CiclodocController],
  providers: [CiclodocService]
})
export class CiclodocModule {}
