let string = 'some test string';

console.log(string);
console.log(string.length);


console.log(string[0]);
console.log(string[15]);

console.log(string.charAt(0).toUpperCase() + string.slice(1));

console.log ( string [0].toUpperCase() );
console.log ( string [15].toUpperCase() );

console.log (string.indexOf('string'));

let position = string.indexOf(' ', string.indexOf(' ') + 1);
console.log(position);


console.log (string.substr(4 , 4));

console.log (string.substring(4 , 9));


let value = string.substr(0, string.length - 6);
console.log(value);


let newString = '20' + '16';
console.log(newString);