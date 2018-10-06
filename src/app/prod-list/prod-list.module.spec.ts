import { ProdListModule } from './prod-list.module';

describe('ProdListModule', () => {
  let prodListModule: ProdListModule;

  beforeEach(() => {
    prodListModule = new ProdListModule();
  });

  it('should create an instance', () => {
    expect(prodListModule).toBeTruthy();
  });
});
