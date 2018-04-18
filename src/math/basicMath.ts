/**
 * @license
 * Copyright (c) 2018 Dakota Jang. All rights reserved.
 * This code may only be used under the MIT license found
 * at https://github.com/dakotaJang/tdd-demo-with-typescript-mocha/blob/master/LICENSE
 * Author: Dakota Jang @dakotaJang
 */

export function sum(...values: number[]):number {
  let sum:number = 0;
  values.forEach(val => {
    sum += val;
  });
  return sum;
}
export function product(...values: number[]):number {
  let product:number = 1;
  values.forEach(val => {
    product = product * val;
  });
  return product;
}