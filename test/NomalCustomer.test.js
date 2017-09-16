const Mocha = require('mocha');
const expect = require('chai').should();
const NormalCustomer = require('../src/NormalCustomer.js');

describe('NormalCustomer', function () {
  
  describe('#GetDiscount(products)', function () {
      it('商品總金額未滿1000元，原價購買', () => {
          // Arrange
          var products = [{ Name:"愛心筆",Price:"500",Qry:1}]
          var expected = 1;
          var actual = 0;
          var target = new NormalCustomer()
          // Act
          actual = target.GetDiscount(products);
          
          // Assert
          actual.should.equal(expected);
      });
  });
  
});