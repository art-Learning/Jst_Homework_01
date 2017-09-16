var ProductUtility = require('../src/ProductUtility.js');
function VipCustomer(){
    
}

VipCustomer.prototype.GetName = function(){
    return 'VIP'
}

VipCustomer.prototype.GetDiscount = function (products) {
    var prodUtil = new ProductUtility
    let amount = prodUtil.GetTotalAmount(products)
    if (amount<500) return 1
    return 0.8
}

module.exports = VipCustomer;

