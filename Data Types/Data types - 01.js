function task(some){
    if(typeof(some) == "string" || typeof(some) == "number"){
        console.log(typeof(some))
        console.log(some)
    }else{
        console.log(typeof(some))
        console.log(`Parameter is not suitable for printing`)
    }
}
