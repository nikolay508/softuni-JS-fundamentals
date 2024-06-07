function task(product, amount){
    let price = 0;
    if(product === 'coffee'){
        price = 1.50 * amount;
    }else if(product === 'water'){
        price = 1.00 * amount;
    }else if(product === 'coke'){
        price = 1.40 * amount;
    }else if(product === 'snacks'){
        price = 2.00 * amount;
    }
    console.log(price.toFixed(2));
}
