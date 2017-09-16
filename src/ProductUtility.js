function ProductUtility(){
    
}

ProductUtility.prototype.GetTotalAmount = function (products) {
    let amount = 0
    products.forEach((product) => {
        amount += product.Price * product.Qty
    });
    return amount
}
ProductUtility.prototype.GetTotalCount = function (products) {
    let count = 0
    products.forEach((product) => {
        count += product.Qty
    });
    return count
}


module.exports = ProductUtility;
