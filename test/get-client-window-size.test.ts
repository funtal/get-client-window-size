import { getClientWindowSize } from '../src';

describe('getClientWindowSize function', () => {
  it('should return an object with width and height properties', () => {
    const result = getClientWindowSize();

    expect(result).toEqual({
      width: 1024,
      height: 768,
    });
  });
});
