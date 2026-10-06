import { Test, TestingModule } from '@nestjs/testing';
import { DangkiService } from './dangki.service.js';

describe('DangkiService', () => {
  let service: DangkiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DangkiService],
    }).compile();

    service = module.get<DangkiService>(DangkiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
