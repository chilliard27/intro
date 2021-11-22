function totalChange(amountPaid, totalCost) {
    
   let change = Math.round( ( amountPaid - totalCost ) *100) / 100
            //.toFixed did not work for this and I am not sure why, this seems like a strange way to have to do this but It was the 
                    //only way to get correct arguments
                    // let change = ( amountPaid - totalCost ).toFixed(2) gave me correct answers but false arguments?
    console.log(change)
    return change
  }
  
  // ---- TESTS - don't change these ---- //
  console.log(totalChange(100, 75) === 25)
  console.log(totalChange(10, 7.28) === 2.72)