var chai = require('chai')
var should = chai.should()
var NormalCustomer = require('../src/NormalCustomer.js');

var dataSets = [
    { args: [500, 1], expected: 1 },
    { args: [350, 4], expected: 0.85 },
    { args: [150, 4], expected: 1 },
    { args: [500, 3], expected: 1},
]

describe('NormalCustomer', function () {
  
  describe('#GetDiscount(products)', function () {

    dataSets.forEach((data)=> {
        it(`商品單價:${data.args[0]} x 數量:${data.args[1]} 總金額:${data.args[0]*data.args[1]}，折扣比例為:${data.expected}`, () => {
            var target = new NormalCustomer()
            // Act
            var products = [{ Name: "愛心筆", Price: data.args[0], Qty: data.args[1] }]
            var actual = target.GetDiscount(products)
            // Assert
            actual.should.equal(data.expected);
        });
    });
  });
});