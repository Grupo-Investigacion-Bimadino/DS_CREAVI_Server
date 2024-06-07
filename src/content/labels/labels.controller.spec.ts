import { Test, TestingModule } from '@nestjs/testing';
import { labelsController } from './labels.controller';

describe('labelsController', () => {
  let controller: labelsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [labelsController],
    }).compile();

    controller = module.get<labelsController>(labelsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
