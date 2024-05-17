function task(arr){
    let obj = {}
    let arrWork = []

    for(each of arr){
        let [name, adress] = each.split(':')
        obj[name] = adress
    }
    
    for (let key in obj) {
        let obj2 = []
        obj2.name = key
        obj2.adress = obj[key]
        arrWork.push(obj2)
    }

    let sorted = arrWork.sort((a,b)=> a.name.localeCompare(b.name))

    for(each of sorted){
        console.log(`${each.name} -> ${each.adress}`)
    }
}
