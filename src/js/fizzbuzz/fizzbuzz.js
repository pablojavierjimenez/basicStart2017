
/**
 * @desc si el numerio es divisible por 3 retorna 'FIZZ', si es dibisible por 5 retorna 'BUZZ'
 * y si es divisible por ambos retorna 'FIZZBUZZ',
 * y sino devuelve el numero en formato string
 * @param {number} number
 * @return {string}
 * @example fizzbuzz(18) //FIZZ
 * fizzbuzz(25) //BUZZ
 * fizzbuzz(15) //FIZZBUZZ
 * fizzbuzz(7) //7
 */
export const fizzbuzz = (number) => {
  let final = number;

  if( number % 3 === 0) {
    final = 'FIZZ';
  }

  if( number % 5 === 0) {
    final = 'BUZZ';
  }

  if ( number % 5 === 0 && number % 3 === 0) {
    final = 'FIZZBUZZ';
  }

  return final.toString();
};
//module.s = fizzbuzz;
