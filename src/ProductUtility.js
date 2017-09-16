function ProductUtility(){
    
}

ProductUtility.prototype.GetTotalAmount = function (products) {
    let amount = 0
    products.forEach((product) => {
        amount += product.Price * product.Qty
    });
    return amount
}


module.exports = ProductUtility;
