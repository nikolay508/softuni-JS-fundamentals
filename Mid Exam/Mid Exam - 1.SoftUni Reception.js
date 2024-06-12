function task(arr){
    let arr2 = arr.map(Number);
    let workPerHour = arr2[0] + arr2[1] + arr2[2];
    let toDo = arr2[3];
    let hours = 0;

    for(let done = 0; done < toDo; done += workPerHour){
        hours++;
        if(hours % 4 === 0){
            hours++;
        }
    }

    console.log(`Time needed: ${hours}h.`);
}
