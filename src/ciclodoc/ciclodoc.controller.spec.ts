import { Test, TestingModule } from '@nestjs/testing';
import { CiclodocController } from './ciclodoc.controller';
import { CiclodocService } from './ciclodoc.service';

describe('CiclodocController', () => {
  let controller: CiclodocController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CiclodocController],
      providers: [CiclodocService],
    }).compile();

    controller = module.get<CiclodocController>(CiclodocController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
