var chai = require('chai')
var should = chai.should()
var ProductUtility = require('../src/ProductUtility.js');

var dataSets = [
    { args: [500, 1], expected: 500 },
    { args: [350, 3], expected: 1050 },
]

describe('ProductUtility', function () {
  
  describe('#GetTotalAmount(products)', function () {

    dataSets.forEach((data)=> {
        it(`商品單價:${data.args[0]} x 數量:${data.args[1]} = 總金額:${data.expected}`, () => {
            var target = new ProductUtility()
            // Act
            var products = [{ Name: "愛心筆", Price: data.args[0], Qty: data.args[1] }]
            var actual = target.GetTotalAmount(products)
            // Assert
            actual.should.equal(data.expected);
        });
    });
  });
});