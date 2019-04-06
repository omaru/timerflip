import RandomNumber from './component/random/RandomNumber';

expect.extend({
    toBeInteger(received) {
      const pass = Number.isInteger(received);
      if (pass) {
        return {
          message: () =>
            `expected ${received} to be integer`,
          pass: true,
        };
      } else {
        return {
          message: () =>
            `expected ${received} to be integer`,
          pass: false,
        };
      }
    },
  });

it('should get random number between the MAX_VALUE given', () => {
    let maxValue =500;
    let randomNumber = new RandomNumber(maxValue);
    expect(randomNumber.getByMaxValue()).toBeLessThanOrEqual(maxValue);
});

it('should get random number between the MAX_VALUE given', () => {
    let maxValue =1;
    let randomNumber = new RandomNumber(maxValue);
    expect(randomNumber.getByMaxValue()).toBeLessThanOrEqual(maxValue);
});
it('should get random number between the MAX_VALUE given', () => {
    let maxValue =2;
    let randomNumber = new RandomNumber(maxValue);
    expect(randomNumber.getByMaxValue()).toBeLessThanOrEqual(maxValue);
});

it('should get only  whole numbers', () => {
    let maxValue =2;
    let randomNumber = new RandomNumber(maxValue);
    expect(randomNumber.getByMaxValue()).toBeInteger();
});

it('should throw an error when MAX_VALUE is greather than {100000}', () => {
  expect(() => new RandomNumber(1000001)).toThrowError();
});