function task(arr){
    let firstLine = []
    let secLine = []
    k = arr[0]
    let arr2 = arr.slice(1)
    for(let i = 0; i < k; i++){
        firstLine.push(arr2[i])
    }
    for(let j = 0; j < k; j++){
        secLine.unshift(arr2[arr2.length - 1])
        arr2.pop()
    }
    console.log(firstLine.join(' '))
    console.log(secLine.join(' '))
}
