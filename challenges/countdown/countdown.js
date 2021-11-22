function countdown(seconds) {
 //setInterval(countdown, 1000)
 let tellme = ' seconds to liftoff!'
 setInterval(countdown, 1000)
    for( let i = seconds; i >= 0; i-- ) {
        tellme = i + tellme

    }
    console.log( tellme )
    return tellme          

 }
console.log(countdown(10))