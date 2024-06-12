function task(arr){
    let arr2 = arr.split(' ').map(Number);
    let sum = 0;
    let count = 0;
    let top5 = [];

    while(true){
        for(let i = 0; i < arr2.length; i++){
            sum += arr2[i];
        }
        let average = sum / arr2.length;

        for(let j = 0; j < arr2.length; j++){
            if(arr2[j] > average){
                count++;
                top5.push(arr2[j]);
            }
        }

        if(count === 0){
            console.log('No');
            break;
        }

        let result = top5.sort((a, b) => {
            return b - a;
        })

        let length = result.length;
        while(length > 5){ 
            length--;
            result.pop();
        }

        console.log(result.join(' '));
        break;
    }
}
