import { Module } from '@nestjs/common';
import { ComitesService } from './comites.service';
import { ComitesController } from './comites.controller';

@Module({
  controllers: [ComitesController],
  providers: [ComitesService]
})
export class ComitesModule {}
