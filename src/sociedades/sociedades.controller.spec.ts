import { Test, TestingModule } from '@nestjs/testing';
import { SociedadesController } from './sociedades.controller';
import { SociedadesService } from './sociedades.service';

describe('SociedadesController', () => {
  let controller: SociedadesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SociedadesController],
      providers: [SociedadesService],
    }).compile();

    controller = module.get<SociedadesController>(SociedadesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
