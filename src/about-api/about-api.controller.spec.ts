import { Test, TestingModule } from '@nestjs/testing';
import { AboutApiController } from './about-api.controller';
import { AboutApiService } from './about-api.service';

describe('AboutApiController', () => {
  let controller: AboutApiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AboutApiController],
      providers: [AboutApiService],
    }).compile();

    controller = module.get<AboutApiController>(AboutApiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
