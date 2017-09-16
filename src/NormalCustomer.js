function NormalCustomer(){
    
}

NormalCustomer.prototype.GetDiscount = function (products) {
    let amount = 0;
    let count = 0;
    products.forEach((product)=> {
        amount+=product.Price * product.Qty
        count+=product.Qry
    });
    if (count<=3 || amount<1000) return 1
    return 0.85
}

module.exports = NormalCustomer;