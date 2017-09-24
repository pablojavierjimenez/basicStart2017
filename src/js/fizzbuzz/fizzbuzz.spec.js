import { expect } from 'chai';
import { fizzbuzz } from './fizzbuzz';

describe('kata fizbuzz', () => {
  it('should return a number as a string', () => {
    expect(fizzbuzz(1)).to.be.a('string');
    expect(fizzbuzz(1)).to.eql('1');
  });

  it('deberia ser divisible por 3', () => {
    expect(fizzbuzz(6)).to.eql('FIZZ');
    expect(fizzbuzz(9)).to.eql('FIZZ');
    expect(fizzbuzz(12)).to.eql('FIZZ');
  });

  it('deberia ser divisible por 5', () => {
    expect(fizzbuzz(5)).to.eql('BUZZ');
    expect(fizzbuzz(10)).to.eql('BUZZ');
  });

  it('deberia ser divisible por ambos', () => {
    expect(fizzbuzz(30)).to.eql('FIZZBUZZ');
    expect(fizzbuzz(15)).to.eql('FIZZBUZZ');
  });
});
