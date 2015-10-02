// PrimeMultiTable.js
/*
The first two functions, range and primeArray, are helper functions.
tableCreator is the function that created the matrix.
  It takes one argument, n, which defines the range of the table.
*/

/*
Time complexity is defined by the most expensive opperation in a function. 
  The most expensive opperations here are the for-loop inside the recursive function call 'primeIdentifyer'
  and the nested for-loop in 'tableCreator'.

  This means the time complexity is O(n^2).

  Consequently, this function becomes quadradically more expensive as n increases.

  Given that this is a matrix operation, O(n^2) isn't too bad.

Space complexity is defined by how many objects in memory get instantiated in relation to the input.
  Since we're creating a matrix, it doesn't make sense to expect anything other than O(n^2),
  given that the requirements of the problem were to create an n * n matrix.
*/

var range = function (n) {
  var result = [];
  for (var i = 0; i < n; i++){
    result.push(i);
  }
  return result;
};

var primeArray = function (n) {
  var current = 2; 
  var primes = range(n + 1);
  // While we haven't found all the primes.
  var primeIdentifyer = function(){
    //Once we reach the n of the desired recursion cycle, filter nonprimes from final array
    if(current >= n){
      return primes.slice(2).filter(function (val) {
        return val;
      });    
    }else{
      for (var i = current + current; i <= n; i += current) {
        // null means not prime, a number means prime
        primes[i] = null;
      }  
      // Advance current at least once
      current += 1;
      // Then continue to advance it until we hit a prime number or we are out of range.
      return primeIdentifyer(); 
    }
  };
  return primeIdentifyer();
};

var tableCreater = function(n){
  if(typeof n !== 'number' || n < 2 || n !== Math.floor(n)) return "tableCreater only takes positive integers greater than 1";
  var table = [];
  //Populate first row
  table.push(primeArray(n));
  table[0].unshift(null);
  //Populate first column
  for(var i = 1; i < table[0].length; i++){
    table[i] = [table[0][i]];
    //Populate the rest of the row
    for(var j = 1; j < table[0].length; j++){
      table[i][j] = table[i][0] * table[0][j];
    }
  }
  return table;
};