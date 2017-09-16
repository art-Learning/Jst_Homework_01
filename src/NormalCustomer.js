var ProductUtility = require('../src/ProductUtility.js');
function NormalCustomer(){
    
}

NormalCustomer.prototype.GetDiscount = function (products) {
    var prodUtil = new ProductUtility
    let amount = prodUtil.GetTotalAmount(products)
    let count = prodUtil.GetTotalCount(products)

    if (count <= 3 || amount < 1000) return 1
    return 0.85
}

module.exports = NormalCustomer;

