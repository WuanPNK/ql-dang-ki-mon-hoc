import { Test, TestingModule } from '@nestjs/testing';
import { DangkiController } from './dangki.controller.js';

describe('DangkiController', () => {
  let controller: DangkiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DangkiController],
    }).compile();

    controller = module.get<DangkiController>(DangkiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
