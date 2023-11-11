import { Module } from '@nestjs/common';
import { SociedadesService } from './sociedades.service';
import { SociedadesController } from './sociedades.controller';

@Module({
  controllers: [SociedadesController],
  providers: [SociedadesService]
})
export class SociedadesModule {}
