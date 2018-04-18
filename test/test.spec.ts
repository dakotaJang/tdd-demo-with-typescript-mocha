/**
 * @license
 * Copyright (c) 2018 Dakota Jang. All rights reserved.
 * This code may only be used under the MIT license found
 * at https://github.com/dakotaJang/tdd-demo-with-typescript-mocha/blob/master/LICENSE
 * Author: Dakota Jang @dakotaJang
 */
import * as assert from "assert";
import { describe, it } from "mocha";

describe("Sample test - javascript allows trailing comma in arrays",
  function():void {
    it("length of [,,] should equal 2", function():void {
      assert.equal([,,].length,2);
    });
  }
);