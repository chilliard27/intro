

function countdown(seconds)  {
    
   
   while(seconds >= 0) {
        
        
        console.log( `There are ${seconds} seconds left until liftoff!`)
        seconds--
    }
    return 'Liftoff!'}


console.log(countdown(5))
// Edited to be a useable function, also used interpolation instead of concatenation 
