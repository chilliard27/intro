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

//So when I run this it runs all the numbers a once and then the ' second to liftoff' string over and over again