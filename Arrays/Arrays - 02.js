function task(num){
    daysWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    
    if(num > 7 || num < 1){
        console.log('Invalid day!');
    }else{
        console.log(daysWeek[num - 1]);
    }
}
