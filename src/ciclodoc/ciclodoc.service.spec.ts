import { Test, TestingModule } from '@nestjs/testing';
import { CiclodocService } from './ciclodoc.service';

describe('CiclodocService', () => {
  let service: CiclodocService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CiclodocService],
    }).compile();

    service = module.get<CiclodocService>(CiclodocService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
