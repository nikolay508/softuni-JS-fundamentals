function task(a, b, c){
    let count = 0;
    
    if(a < 0){
        count += 1;
    }
    if(b < 0){
        count += 1;
    }
    if(c < 0){
        count += 1;
    }

    if(count === 1 || count === 3){
        console.log('Negative');
    }else{
        console.log('Positive');
    }
    
}
