import { Test, TestingModule } from '@nestjs/testing';
import { contentService } from './content.service';

describe('contentService', () => {
  let service: contentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [contentService],
    }).compile();

    service = module.get<contentService>(contentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
