var chai = require('chai')
var should = chai.should()
var VipCustomer = require('../src/VipCustomer.js');

var dataSets = [
    { args: [500, 1], expected: 0.8 },
    { args: [499, 1], expected: 1 },
]

describe('VipCustomer', function () {
  
  describe('#GetDiscount(products)', function () {

    dataSets.forEach((data)=> {
        it(`商品單價:${data.args[0]} x 數量:${data.args[1]} 總金額:${data.args[0]*data.args[1]}，折扣比例為:${data.expected}`, () => {
            var target = new VipCustomer()
            // Act
            var products = [{ Name: "愛心筆", Price: data.args[0], Qty: data.args[1] }]
            var actual = target.GetDiscount(products)
            // Assert
            actual.should.equal(data.expected);
        });
    });
  });
});