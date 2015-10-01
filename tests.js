describe('primeArray', function (){

  it('should be a function', function(){
    primeArray.should.be.a.Function;
  });

  it('should take one argument', function(){
    primeArray.length.should.equal(1);
  });
  
  it('should return an array', function(){
    primeArray(10).should.be.an.instanceOf(Array);
  });

  it('should return every prime between 1 and 20', function(){
    primeArray(20).should.eql([2, 3, 5, 7, 11, 13, 17, 19]);
  });

});

describe('tableCreater', function(){
  it('should be a function', function(){
    tableCreater.should.be.a.Function;
  });

  it('should take one argument', function(){
    tableCreater.length.should.equal(1);
  });

  it('should return error message for invalid inputs', function(){
    tableCreater(null).should.equal("tableCreater only takes positive integers greater than 1");
    tableCreater([]).should.equal("tableCreater only takes positive integers greater than 1");
    tableCreater(1).should.equal("tableCreater only takes positive integers greater than 1");
    tableCreater(67.8).should.equal("tableCreater only takes positive integers greater than 1");
    tableCreater(-11).should.equal("tableCreater only takes positive integers greater than 1");
  });

  it('should work with valid input', function(){
    tableCreater(3).should.eql([
      [null, 2, 3],
      [2, 4, 6],
      [3, 6, 9]]);
    tableCreater(20).should.eql([
      [null, 2, 3, 5, 7, 11, 13, 17, 19],
      [2, 4, 6, 10, 14, 22, 26, 34, 38],
      [3, 6, 9, 15, 21, 33, 39, 51, 57],
      [5, 10, 15, 25, 35, 55, 65, 85, 95],
      [7, 14, 21, 35, 49, 77, 91, 119, 133],
      [11, 22, 33, 55, 77, 121, 143, 187, 209],
      [13, 26, 39, 65, 91, 143, 169, 221, 247],
      [17, 34, 51, 85, 119, 187, 221, 289, 323],
      [19, 38, 57, 95, 133, 209, 247, 323, 361]]);
  });

});