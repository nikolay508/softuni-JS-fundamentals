function task(num, arr){
    newArr = arr.slice(0, num);
    newArr.reverse();
    
    console.log(newArr.join(' '));
}
