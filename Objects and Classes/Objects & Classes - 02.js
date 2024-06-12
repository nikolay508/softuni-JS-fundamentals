function task(obj){
    for(let i = 0; i < 5; i++){
        let keys = Object.entries(obj);
        let wholeKey = keys[i];
        console.log(`${wholeKey[0]} -> ${wholeKey[1]}`);
    }
}
