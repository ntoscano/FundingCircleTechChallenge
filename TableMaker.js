// PrimeMultiTable.js
var primeNumberTableCreator = function(n){
  var Table = require('cli-table');
  /*
  The first two functions, _range and _primeArray, are helper functions.
  _tableCreator is the function that creates the matrix.
    It takes one argument, n, which defines the range of the table.


  Time complexity is defined by the most expensive operation in a function. 
    The most expensive operations here are the for-loop inside the while-loop in _primeArray
    and the nested for-loop in _tableCreator.

    This means the time complexity is O(n^2).

    Consequently, this function becomes quadratically more expensive as n increases.

    Given that this is a matrix operation, O(n^2) isn't too bad.

  Space complexity is defined by how many objects in memory get instantiated in relation to the input.
    Since we're creating a matrix, it doesn't make sense to expect anything other than O(n^2),
    given that the requirements of the problem were to create an n * n matrix.

 ******
  A notable difference is the change from recursion to a while-loop and the optimization
   created for the current variable inside _primeArray.

  The change to the while-loop prevents unnecessary call-stacks from being created.

  The current variable optimization prevents current from being assigned to a number that's
    multiples have already been assigned to null. i.e. after all multiples of 2 have been set to null, 
    multiples of 4 can be ignored. 
 ******
  */


  var _range = function (n) {
    var result = [];
    for (var i = 0; i <= n; i++){
      result.push(i);
    }
    return result;
  };

  var _primeArray = function (n) {
    var current = 2; 
    var primes = _range(n);
    // While we haven't found all the primes.
    while (current < n) {

      // Removes all multiples of current from primes array
      for (var i = current + current; i <= n; i += current) {
        // null means not prime, a number means prime
        primes[i] = null;
      }  

      // Incriment current and skip numbers whose multiples are already set to null
      do {
        // Advance current at least once
        current += 1;
        // Then continue to advance it until we hit a prime number or we are out of
        // range.
      } while (!primes[current] && current <= n);
    };

    // Slice out 0 and 1 from primes array and filter our all null elements
    return primes.slice(2).filter(function (val) {
      return val;
    });;
  };

  var _tableCreater = function(n){

    //Populate first row
    var primeArray = [''].concat(_primeArray(n));
    var table = new Table({
        head: primeArray
    });

    //Populate first column
    for(var i = 1; i < primeArray.length; i++){
      var row = [primeArray[i]];
      //Populate the rest of the row
      for(var j = 1; j < primeArray.length; j++){
        row.push(row[0] * primeArray[j]);
      }
      table.push(row);
    }

    return table;
  };


  if(n === undefined) n = 29;
  else n = parseFloat(n);

  if(n < 2 || n !== Math.floor(n) || isNaN(n)){
    //We log error for visal representation in the terminal
    console.log("TableMaker.js only takes positive integers greater than 1 as arguments"); 
    //We return error for testing purposes
    return "TableMaker.js only takes positive integers greater than 1 as arguments";
  }else{
    var table = _tableCreater(n); 
    //We log the table for visual representation in terminal
    console.log(table.toString()); 
    //We return matrix for testing purposes
    var matrix = [table.options.head];
    for(var i = 0; i < table.length; i++) matrix.push(table[i]);
    return matrix; 
  }

}

primeNumberTableCreator(process.argv[2]);

module.exports = {
  primeNumberTableCreator: primeNumberTableCreator
}



