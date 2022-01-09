function dailydrinks(day) {

   

    if (day == 'm' || day == 'f' ) {

            drinks = 6
    } else if (day == 't' ) {
        drinks = 4
    } else if ( day == 'w' || day == 'r') {
        drinks = 3
    }
        
return drinks
}

console.log(dailydrinks('m'))
console.log(dailydrinks('t'))
console.log(dailydrinks('w'))
console.log(dailydrinks('r'))
console.log(dailydrinks('f'))
