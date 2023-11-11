import { Module } from '@nestjs/common';
import { CiclodocService } from './ciclodoc.service';
import { CiclodocController } from './ciclodoc.controller';

@Module({
  controllers: [CiclodocController],
  providers: [CiclodocService]
})
export class CiclodocModule {}
