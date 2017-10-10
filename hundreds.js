function howManyHundreds(num) {
  return (num - (num % 100)) / 100;
}

console.log(howManyHundreds(894));
