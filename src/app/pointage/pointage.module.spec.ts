import { PointageModule } from './pointage.module';

describe('PointageModule', () => {
  let pointageModule: PointageModule;

  beforeEach(() => {
    pointageModule = new PointageModule();
  });

  it('should create an instance', () => {
    expect(pointageModule).toBeTruthy();
  });
});
