var x = 12345;
console.log(typeof (x));
  if(x !== 'number') {
  console.log('This is not a number');
} else if(x % 3 === 0) {
  console.log('Gen');
} else if(x % 5 === 0) {
  console.log('Buzz');
}else if(x % 30 === 0) {
  console.log('GenBuzz');
} else {
  console.log(x);
}

let myItem = 'jeans';
switch (myItem) {
  case 'shoes':
    console.log('shoes are $50')
    break;
  case 'jeans':
    console.log('jeans are $25')
    break;
  case 'hats':
    console.log('hats are $10')
    break;
  case 'socks':
    console.log('socks are $5')
    break;
}

function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
console.log(getRandomArbitrary(55,70));
