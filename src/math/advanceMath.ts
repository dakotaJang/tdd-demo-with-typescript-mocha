/**
 * @license
 * Copyright (c) 2018 Dakota Jang. All rights reserved.
 * This code may only be used under the MIT license found
 * at https://github.com/dakotaJang/tdd-demo-using-mocha-typescript/blob/master/LICENSE
 * Author: Dakota Jang @dakotaJang
 */
import { sum } from "./basicMath";
export function average(...values: number[]):number {
  return sum(...values)/values.length;
}