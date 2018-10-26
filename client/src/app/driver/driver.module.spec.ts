import { DriverModule } from './user.module';

describe('UserModule', () => {
  let userModule: DriverModule;

  beforeEach(() => {
    userModule = new DriverModule();
  });

  it('should create an instance', () => {
    expect(userModule).toBeTruthy();
  });
});
