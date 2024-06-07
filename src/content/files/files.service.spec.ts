import { Test, TestingModule } from '@nestjs/testing';
import { filesService } from './files.service';

describe('filesService', () => {
  let service: filesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [filesService],
    }).compile();

    service = module.get<filesService>(filesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
