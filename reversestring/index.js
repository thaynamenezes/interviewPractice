// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    //My solution 
    let reversed = '';
    for(let i = str.length - 1; i > -1; i--){
      reversed += str[i]
    }
  return reversed  

        // SOLUTION 1
    // let reversed = '';
    //  for ( let character of str) {
    //    reversed = character + reversed;
    //  }
    // return reversed  


    //SOLUTION 2
//     arr = str.split('');
//     arr.reverse();
//     return arr.join('');
        //clean version 
    // return str.split('').reverse().join('');

    //SOLUTION 3
    // return str.split('')
    // .reduce((reversed, character) => {
    //     return character + reversed;
    // }, '');
}



module.exports = reverse;
