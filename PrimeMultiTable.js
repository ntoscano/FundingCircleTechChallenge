// PrimeMultiTable.js
/*
The first two functions, range and primeArray, are helper functions.
tableCreator is the function that created the matrix.
  It takes one argument, n, which defines the range of the table.
*/

var range = function (start, end) {
  var result = [];
  for (var i = start; i < end; i++){
    result.push(i);
  }
  return result;
};

var primeArray = function (start, end) {
  var current = 2; 
  var primes = range(0, end + 1);
  // While we haven't found all the primes.
  var primeIdentifyer = function(){
    //Once we reach the end of the desired recursion cycle, filter nonprimes from final array
    if(current >= end){
      return primes.slice(2).filter(function (val) {
        return val && val >= start;
      });    
    }else{
      for (var i = current + current; i <= end; i += current) {
        // null means not prime, a number means prime
        primes[i] = null;
      }  
      do {
        // Advance current at least once
        current += 1;
      // Then continue to advance it until we hit a prime number or we are out of range.
      return primeIdentifyer();
      } while (!primes[current] && current <= end);  
    }
  }
  return primeIdentifyer();
};

var tableCreater = function(n){
  var table = [];
  //Populate first row
  table.push(primeArray(1, n));
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
}