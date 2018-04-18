/**
 * @license
 * Copyright (c) 2018 Dakota Jang. All rights reserved.
 * This code may only be used under the MIT license found
 * at https://github.com/dakotaJang/tdd-demo-with-typescript-mocha/blob/master/LICENSE
 * Author: Dakota Jang @dakotaJang
 */
import * as assert from "assert";
import { describe, it } from "mocha";
import { average } from "./advanceMath";

describe("AdvanceMath", function():void {
  describe("average", function():void {
    it("should load average method", function():void {
      assert.ok(average);
    });
    it("average of 1,2,3 equals 2", function():void {
      assert.equal(average(1,2,3),2);
    });
  });
});