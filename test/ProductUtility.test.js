var chai = require('chai')
var should = chai.should()
var ProductUtility = require('../src/ProductUtility.js');
var target

var dataSetsPrice = [
    { args: [500, 1], expected: 500 },
    { args: [350, 3], expected: 1050 },
]

var dataSetsCount = [
    { args: [500, 1], expected: 1 },
    { args: [350, 3], expected: 3 },
]
beforeEach(() => {
    target = new ProductUtility()
});

describe('ProductUtility', function () {
    describe('#GetTotalAmount(products)', function () {
        dataSetsPrice.forEach((data)=> {
            it(`商品單價:${data.args[0]} x 數量:${data.args[1]} = 總金額:${data.expected}`, () => {
                // Act
                var products = [{ Name: "愛心筆", Price: data.args[0], Qty: data.args[1] }]
                var actual = target.GetTotalAmount(products)
                // Assert
                actual.should.equal(data.expected);
            });
        });
    });
    describe('#GetTotalCount(products)', function () {
        dataSetsCount.forEach((data) => {
            it(`商品數量:${data.args[1]} = 總數量:${data.expected}`, () => {
                // Act
                var products = [{ Name: "愛心筆", Price: data.args[0], Qty: data.args[1] }]
                var actual = target.GetTotalCount(products)
                // Assert
                actual.should.equal(data.expected);
            });
        });
    });
});