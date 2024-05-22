function task(arr1, arr2){
    let sum = 0
    isOk = true

    for(let i = 0; i < arr1.length; i++){
        if(arr1[i] === arr2[i]){
            sum += Number(arr1[i])
        }else{
            isOk = false
            problem = i
            break
        }
    }
    if(isOk){
        console.log(`Arrays are identical. Sum: ${sum}`)
    }else{
        console.log(`Arrays are not identical. Found difference at ${problem} index`)
    }
}
