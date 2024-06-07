import { Test, TestingModule } from '@nestjs/testing';
import { multimediaController } from './multimedia.controller';

describe('multimediaController', () => {
  let controller: multimediaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [multimediaController],
    }).compile();

    controller = module.get<multimediaController>(multimediaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
