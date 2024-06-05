function task(arr){
    let meetings = {};

    for(string of arr){
        let [day, name] = string.split(' ');
        if(!meetings.hasOwnProperty(day)){
            meetings[day] = name;
            console.log(`Scheduled for ${day}`);
        }else{
            console.log(`Conflict on ${day}!`);
        }
    }

    for(string in meetings){
        console.log(`${string} -> ${meetings[string]}`);
    }
}
