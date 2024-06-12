function task(arr){
    let arrWork = arr.slice(0);
    let list = arrWork[0].split(' ').map(Number);
    arrWork.shift();

    for(strings of arrWork){
        let wholeCommand = strings.split(' ');
        let command = wholeCommand[0];

        let index1 = Number(wholeCommand[1]);
        let index2 = Number(wholeCommand[2]);

        let number1 = Number(list[index1]);
        let number2 = Number(list[index2]);

        if(command === 'end'){
            break;
        }else if(command === 'swap'){
            list.splice(index1, 1, number2);
            list.splice(index2, 1, number1);
        }else if(command === 'multiply'){
            let numToReplace = number1 * number2;
            list.splice(index1, 1, numToReplace);
        }else if(command === 'decrease'){
            list = list.map(n => n-1);
        }
    }
    console.log(list.join(', '));
}
