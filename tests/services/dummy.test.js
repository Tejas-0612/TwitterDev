import { execute } from "../../src/services/dummy-service";
import { helper } from "../../src/services/helper-service";
jest.mock('../../src/services/helper-service');


test('result is true and returns Learning JS', () => {
    // IMPL of test

    helper.mockReturnValue(true);
    const result = execute();
    expect(result).toBe('Learning JS');
});

test('should ', () => {
  helper.mockReturnValue(false);
  const result=execute();
  expect(result).toBe('Learning ReactJS')
})
