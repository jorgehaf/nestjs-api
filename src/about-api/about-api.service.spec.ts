import { Test, TestingModule } from '@nestjs/testing';
import { AboutApiService } from './about-api.service';

describe('AboutApiService', () => {
  let service: AboutApiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AboutApiService],
    }).compile();

    service = module.get<AboutApiService>(AboutApiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
