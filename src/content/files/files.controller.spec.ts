import { Test, TestingModule } from '@nestjs/testing';
import { filesController } from './files.controller';

describe('filesController', () => {
  let controller: filesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [filesController],
    }).compile();

    controller = module.get<filesController>(filesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
