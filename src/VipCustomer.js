function VipCustomer(){
    
}

VipCustomer.prototype.GetDiscount = function (products) {
    let amount = 0;
    let count = 0;
    products.forEach((product) => {
        amount += product.Price * product.Qty
        count += product.Qty
    });
    if (amount<500) return 1
    return 0.8
}

module.exports = VipCustomer;

