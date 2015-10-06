// PrimeMultiTable.js
(function(){

  var Table = require('cli-table');
  /*
  The first two functions, _range and _primeArray, are helper functions.
  tableCreator is the function that created the matrix.
    It takes one argument, n, which defines the range of the table.
  */

  /*
  Time complexity is defined by the most expensive operation in a function. 
    The most expensive operations here are the for-loop inside the while loop in "_primeArray"
    and the nested for-loop in 'tableCreator'.

    This means the time complexity is O(n^2).

    Consequently, this function becomes quadratically more expensive as n increases.

    Given that this is a matrix operation, O(n^2) isn't too bad.

  Space complexity is defined by how many objects in memory get instantiated in relation to the input.
    Since we're creating a matrix, it doesn't make sense to expect anything other than O(n^2),
    given that the requirements of the problem were to create an n * n matrix.
 ******
  A notable difference is the change from recursion to a while-loop and the optimization
   created for the "current" variable inside "_primeArray".

  The change to the while-loop prevents unnecessary call-stacks from being created.

  The "current" variable optimization prevents "current" from being assigned to numbers that's
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
    while (current < n) { // 
    //Once we reach the n of the desired recursion cycle, filter nonprimes from final array
      for (var i = current + current; i <= n; i += current) {
        // null means not prime, a number means prime
        primes[i] = null;
      }  
      do {
        // Advance current at least once
        current += 1;
        // Then continue to advance it until we hit a prime number or we are out of
        // range.
      } while (!primes[current] && current <= n);
      // Then continue to advance it until we hit a prime number or we are out of range.
    };
    return primes.slice(2).filter(function (val) {
      return val;
    });;
  };

  var _tableCreater = function(n){
    if(typeof n !== 'number' || n < 2 || n !== Math.floor(n) || isNaN(n)) return "TableMaker.js only takes positive integers greater than 1 as arguments";
    var matrix = [];
    //Populate first row
    matrix.push(['null'].concat(_primeArray(n)));
    // matrix[0].unshift(null);
    //Populate first column
    for(var i = 1; i < matrix[0].length; i++){
      matrix.push([matrix[0][i]]);
      //Populate the rest of the row
      for(var j = 1; j < matrix[0].length; j++){
        matrix[i].push(matrix[i][0] * matrix[0][j]);
      }
    }
    var table = new Table({
        head: matrix[0]
    });

    for(var i = 1; i < matrix[0].length; i++){
      table.push(matrix[i]);
    }

    return (table.toString());
  };

  var n; 
  if(process.argv[2] === undefined) n = 10;
  else n = process.argv[2];

  console.log(_tableCreater(parseInt(n)));

})();





