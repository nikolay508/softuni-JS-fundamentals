function task(n) {
    let sum = 0;
    let count = 1;
    for(num = 1; count <= n; num++) {
        if(num % 2 !== 0){
            count = count + 1;
            sum = sum + num;
            console.log(num);
        }
    }
    console.log(`Sum: ` + sum);
}
