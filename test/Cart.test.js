var chai = require('chai')
var should = chai.should()
var Cart = require('../src/Cart.js');
var target

var VipCustomer = require('../src/VipCustomer.js')


var vip = new VipCustomer()
var dataSets = [
    { args: [vip, 500, 1], expected: 400 },
]

beforeEach(() => {
    target = new Cart()
});

describe('Cart', function () {
    describe('#Pay(customer,products)', function () {
        dataSets.forEach((data)=> {
            it(`顧客身份:${data.args[0].GetName()} 購買商品單價:${data.args[1]} x 數量:${data.args[2]} ，應付金額為:${data.expected}`, () => {
                // Act
                var customer = data.args[0]
                var products = [{ Name: "愛心筆", Price: data.args[1], Qty: data.args[2] }]
                
                var actual = target.Pay(customer,products)
                // Assert
                actual.should.equal(data.expected);
            });
        });
    });
});