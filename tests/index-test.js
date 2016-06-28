'use strict';

/* global require */





const testIsEven = (check) => {
    check.equal(isEven(1), false);
    check.equal(isEven(612), true);
    check.equal(isEven(0), true);
    check.equal(isEven(17), false);
    check.equal(isEven(-13), false);

}


function isOdd(number) {
    return number % 2 === 1;
}

const testIsOdd = (check) => {
    check.equal(isOdd(1), true);
    check.equal(isOdd(612), false);
    check.equal(isOdd(0), false);
    check.equal(isOdd(17), true);

}

test('isEven', testIsEven);
test('isOdd', testIsOdd);
// test('digitize');
// test('sumOfDigits');
