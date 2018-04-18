/**
 * @license
 * Copyright (c) 2018 Dakota Jang. All rights reserved.
 * This code may only be used under the MIT license found
 * at https://github.com/dakotaJang/tdd-demo-with-typescript-mocha/blob/master/LICENSE
 * Author: Dakota Jang @dakotaJang
 */
import * as assert from "assert";
import { describe, it } from "mocha";
import { sum, product } from "./basicMath";

describe("BasicMath", function():void {
  describe("sum", function():void {
    it("should load sum method", function():void {
      assert.ok(sum);
    });
    it("2+3=5", function():void {
      assert.equal(sum(2,3), 5);
    });
    it("3+3=6", function():void {
      assert.equal(sum(3,3), 6);
    });
    it("3+3+8=14", function():void {
      assert.equal(sum(3,3,8), 14);
    });
  });

  describe("product", function():void {
    it("should load product method", function():void {
      assert.ok(product);
    });
    it("2 x 2 equals 4", function():void {
      assert.equal(product(2,2),4);
    });
    it("2 x 3 equals 6", function():void {
      assert.equal(product(2,3),6);
    });
    it("2 x 3 x 4 equals 24", function():void {
      assert.equal(product(2,3,4),24);
    });
    it("2 x -3 x 4 equals -24", function():void {
      assert.equal(product(2,-3,4),-24);
    });
  });
});