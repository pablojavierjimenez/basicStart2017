import { expect } from 'chai';
import { add } from './add';

describe('adding 2 numbers', () => {
  it('should return 3 when adding 1 + 2', () => {
    expect(add(1, 2)).to.equal(3);
  });
});
