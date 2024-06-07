import { Test, TestingModule } from '@nestjs/testing';
import { multimediaService } from './multimedia.service';

describe('multimediaService', () => {
  let service: multimediaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [multimediaService],
    }).compile();

    service = module.get<multimediaService>(multimediaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
