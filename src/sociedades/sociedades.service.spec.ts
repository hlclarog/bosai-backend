import { Test, TestingModule } from '@nestjs/testing';
import { SociedadesService } from './sociedades.service';

describe('SociedadesService', () => {
  let service: SociedadesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SociedadesService],
    }).compile();

    service = module.get<SociedadesService>(SociedadesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
