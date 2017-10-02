import { defineSupportCode } from 'cucumber';
import assert from 'assert';

defineSupportCode(({ Given, Then, When }) => {
  let answer = 0;
  Given('I start with {int}', (input) => {
    answer = input;
  });
  When('I add {int}', (input) => {
    answer += input;
  });
  Then('I end up with {int}', (input) => {
    assert.equal(answer, input);
  });
});
