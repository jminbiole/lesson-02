'use strict';

QUnit.module('Workshop');

const simpsons = [
  {
    name: 'Homer',
    age: 36,
  },
  {
    name: 'Marge',
    age: 34,
  },
  {
    name: 'Bart',
    age: 10,
  },
  {
    name: 'Lisa',
    age: 8,
  },
];

const flanders = [
  {
    name: 'Todd',
    age: 10,
  },
  {
    name: 'Ned',
    age: 40,
  },
  {
    name: 'Maude',
    age: 35,
  },
];

const min = function (numbers) {
  let minSoFar = Infinity;

  for (let i = 0; i < numbers.length; i++) {
    // Decide if less than the previous...
    if (numbers[i] < minSoFar) {
      minSoFar = numbers[i];
    }
  }

  return minSoFar;
};

test('it can find the min', (assert) => {
  assert.equal(min([17, 23]), 17);
  assert.equal(min([0, 12, 52]), 0);
  assert.equal(min([34, 2]), 2);
});

// rewrite this using a for loop
function numberOfPeople(familyArray) {
  console.log(familyArray);

  return familyArray.length;
}


test('number of family members', (assert) => {
  assert.equal(numberOfPeople(simpsons), 4);
  assert.equal(numberOfPeople(flanders), 3);
});

// This should result in a completely new array
const addFamilyMember = (familyArray, name, age) => {
  let newFamily = [];

  // Duplicate the old array
  //
  // Loop through all family members in the old array
  for (let i = 0; i < familyArray.length; i++) {
    // Adds an item to
    newFamily.push(familyArray[i]);
  }

  // Add the new member to the end of the newFamily array
  newFamily.push({ name: name, age: age });

  return newFamily;
};

test('families can have babies', (assert) => {
  assert.deepEqual(addFamilyMember(simpsons, 'Maggie', 1), [
    {
      name: 'Homer',
      age: 36,
    },
    {
      name: 'Marge',
      age: 34,
    },
    {
      name: 'Bart',
      age: 10,
    },
    {
      name: 'Lisa',
      age: 8,
    },
    {
      name: 'Maggie',
      age: 1,
    },
  ]);
});

// Create a function called "range" that takes two numbers:
// "start" and "end"
// Return an array of numbers from "start" to "end" including
// these values!


var range = function (start, end) {
  let newRange = [];
  for (let i = start; i <= end; i++)
  newRange.push(i);
  return newRange;

}

test('a student knows how to use for loops', (assert) => {
  assert.deepEqual(range(0, 0), [0]);
  assert.deepEqual(range(0, 1), [0, 1]);
  assert.deepEqual(range(5, 10), [5, 6, 7, 8, 9, 10]);
});

// Create a function isKid that takes one argument "person"
// and returns a boolean value based on that person's "age"

var isKid = function (person) {

  if (person.age < 18) {
    return true;
  }else {
    return false;
  }
}


test('knows if a person is a kid', (assert) => {
  const homer = {
    name: 'Young Homer',
    age: 20,
  };
  const marge = {
    name: 'Young Marge',
    age: 18,
  };
  const bart = {
    name: 'Old Bart',
    age: 17,
  };
//change for save
  assert.equal(isKid(bart), true);
  assert.equal(isKid(homer), false);
  assert.equal(isKid(marge), false);
});

// Create a function "onlyKids" that takes an array of "familyMembers"
// Return a DIFFERENT ARRAY that contains only the people that are kids
// See above for figuring out who is considered a kid


var onlyKids = function (familyMembers) {
  let newArray = [];
  for (var i = 0; i < familyMembers.length; i++) {
    if (familyMembers[i].age < 17) {
      newArray.push(familyMembers[i]);
    }
  }
    return newArray;
}

test('can find who should be in school', (assert) => {
  assert.deepEqual(onlyKids(simpsons), [
    {
      name: 'Bart',
      age: 10,
    },
    {
      name: 'Lisa',
      age: 8,
    },
  ]);

  assert.deepEqual(onlyKids(flanders), [
    {
      name: 'Todd',
      age: 10,
    },
  ]);
});
