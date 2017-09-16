var ProductUtility = require('../src/ProductUtility.js');
function Cart(){
    
}

Cart.prototype.Pay = function (customer,products) {
    let prodUtil = new ProductUtility
    let amount = prodUtil.GetTotalAmount(products)
    let discount = customer.GetDiscount(products)
    return amount * discount
}

module.exports = Cart;

