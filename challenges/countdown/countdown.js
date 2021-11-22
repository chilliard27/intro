let countdown= (seconds) => {
    while (seconds >= 0) {
        console.log( 'There are '+ seconds + ' seconds left until liftoff!')
        seconds--
    }
    return 'Liftoff!'
}
console.log(countdown(5))
