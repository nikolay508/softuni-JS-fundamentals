function task(day, age){
    let price = 0;
    if(day == "Weekday"){
        if(0 <= age  && age <= 18){
            price = 12;
        }else if(18 < age && age <= 64){
            price = 18;
        }else if(64 < age && age <= 122){
            price = 12;
        }
    }else if(day == "Weekend"){
        if(0 <= age && age <= 18){
            price = 15;
        }else if(18 < age && age <= 64){
            price = 20;
        }else if(64 < age && age <= 122){
            price = 15;
        }
    }else if(day == "Holiday"){
        if(0 <= age && age <= 18){
            price = 5;
        }else if(18 < age && age <= 64){
            price = 12;
        }else if(64 < age && age <= 122){
            price = 10;
        }
    }
    if(0 > age || age > 122){
        console.log(`Error!`);
    }else{
        console.log(price + `$`);
    }
}
