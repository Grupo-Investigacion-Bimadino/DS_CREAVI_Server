import { Test, TestingModule } from '@nestjs/testing';
import { contentController } from './content.controller';

describe('contentController', () => {
  let controller: contentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [contentController],
    }).compile();

    controller = module.get<contentController>(contentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
