import { Test, TestingModule } from '@nestjs/testing';
import { labelsService } from './labels.service';

describe('labelsService', () => {
  let service: labelsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [labelsService],
    }).compile();

    service = module.get<labelsService>(labelsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
