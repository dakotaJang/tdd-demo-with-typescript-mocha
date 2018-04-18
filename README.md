# Test Driven Development using Mocha and Typescript
A simple environment setup to start a test driven development.

Check the <a href="https://github.com/dakotaJang/tdd-demo-with-typescript-mocha/tree/sample">sample</a> branch as a simple example.

## Requirements
Install npm and node.
Install typescript if you don't already have it.
```
npm install -g typescript
```

Clone the project
```
git clone https://github.com/dakotaJang/tdd-demo-with-typescript-mocha.git
```

Install all the dependencies
```
npm install
```

## Test
Run following to start your TDD
```
npm test
```

## Stop Testing
- Press `ctrl + c` to terminate batch job
- Press `y` then `enter` and again `y` then `enter` to terminate `mocha` and `tsc`


# Why TDD?
The idea of the TDD is to make the tests/specs first and then you write the code. Many developers often start writing codes without writing tests for couple of reasons. It takes time, it is hard, it is tedious, and often developers just want to write code, not tests. This environment will help developers to do this in a fast and easy way.

Before starting development, the user will have to create a `*.spec.ts` file for the tests. When the user run `npm test`, `./dev` directory will be created where all the typescripts will be compiled.  `npm test` basically runs 2 programs: `tsc` and `mocha`.

`tsc` will be watching all of the `*.ts` files to compile any changes.

`mocha` will watching all of the compiled `*.js` files to check all the tests.

From here on we follow this development cycle
1. Write a test
2. Write the code to make the test pass
3. Refactor your code (optional)

We will start by writing the test:
```ts
import * as assert from "assert";
import { describe, it } from "mocha";
import { something } from "./someModule";

describe("Some Test", function():void {
  it("should do something", function():void {
    assert.ok(something);
  });
});
```
Save the changes. And you will notice a error. Examine the error to see what the problem is, like node is complaining that it cannot find the module or the test is failing.

The next step would be to do a minimal amount of work to make that test pass. This can range from just making a new module/function to making changes to logic of the code. When you see that all of tests pass, you can start to add more tests and write more code.

When you have enough code, may want to consider refactoring the code. This could range from extracting repeated codes and making it as a separate function to make it more reusable for future development or changing function/variable names to make it more sensible. It is a good practice to keep your code clean and readable.

Note that you write the `test` first. Because if you write a test after you write the code, then there is a possible problem of making a test based what the code "would" do instead of what the code "should" do.

# Benefits of TDD
## Know immediately when the code fails
When you are given a new spec you may start making changes to your code that meets the requirement of the new spec. And then few days later your clients are complaining that application is not working properly. Everyone make mistakes like a simple spelling mistake or using a hard-coded value. But with sub-millisecond tests, you will know that your tests are passing or not almost immediately.

## Makes refactoring easier
It is easy write messy code, especially with javascript. To avoid writing messy and hard to read codes, it is a good habit to refactor your codes. But some developers are terrified to make changes to the code because `if it works, you leave it alone`. This is because when you don't have tests, it is hard to know how the code will execute after making changes. If there are tests, then we can know the code is working fine because all the test will be passing after changes have been made.

### Quirks
- If you create a new `*spec.ts`, you will have to re-run the `npm test` command. Mocha will not be able to watch this test file because this file was created after the `mocha --watch` command was run. Therefore the new created test file will not be watched.
- When terminating batch after `npm test`, you have to enter `"y"` twice to terminate the batch job(s).

### Notes
- tests done using `nvm use 8.9.4`