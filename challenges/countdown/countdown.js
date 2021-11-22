function countdown(seconds) {
 //setInterval(countdown, 1000)
 
 setInterval(countdown, 1000)
   
    for( let i = seconds; i <=seconds; i-- ) {
      
        if( i >= 0){
        return i + ' seconds to liftoff!!'
        }
        else {
            return 'Liftoff'
        }

    }
    
             

 }
console.log(countdown(5))

//So when I run this it runs all the numbers a once and then the ' second to liftoff' string over and over again 
// adding one more to it everytime once, then twice, then three times so on and so forth

//edited to return 12345 seconds to lift off, like its not really running a loop
// now intitall returns 5 seconds to liftoff then hits memory error