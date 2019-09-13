import { LegalModule } from './legal.module';

describe('LegalModule', () => {
  let legalModule: LegalModule;

  beforeEach(() => {
    legalModule = new LegalModule();
  });

  it('should create an instance', () => {
    expect(legalModule).toBeTruthy();
  });
});
