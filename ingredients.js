var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
var i = 0;
while (i < ingredients.length) {
  console.log(ingredients[i]);
  i++;
}
// Write a for loop that prints out the contents of ingredients:
for (var i = 0; i < ingredients.length; i++) {
  console.log(ingredients[i]);
}
// Write any loop (while or for) that prints out the contents of ingredients backwards:
for (var i = ingredients.length - 1; i >= 0; i--) {
  console.log(ingredients[i]);
}


function range(start, end, step) {
  var array = [];
  if (end > start && step > 0) {
    for (var i = start; i <= end; i += step) {
      array.push(i);
    }
  }
  return array;
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));
console.log(range(2, 4));
console.log(range(10, 8, 2));
console.log(range(1, 1, -1));


function lastIndexOf(array, value) {
  var match = false;
  for (var i = array.length - 1; i >= 0; i--) {
    if (array[i] === value) {
      var result = i;
      match = true;
      break;
    }
  }
  if (match) {
    return result;
  }
  else {
    return -1;
  }
}

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);
console.log(lastIndexOf([1], 3), "=?", -1);
console.log(lastIndexOf([3], 3), "=?", 0);