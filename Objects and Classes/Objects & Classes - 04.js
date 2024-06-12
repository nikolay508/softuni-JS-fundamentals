function task(firstName, lastName, color){
    let object = {
        name: firstName,
        lastName: lastName,
        hairColor: color
    }
    console.log(JSON.stringify(object));
}
