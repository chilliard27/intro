function mortgagePayment(amountInvested, annualInterest) {
    
    let payment = amountInvested * annualInterest


        console.log(payment)
        return payment
  }
  
  
  
  
  //Tests
  console.log( mortgagePayment(100000,.05) === 5000 )
  console.log( mortgagePayment(15000,.085) === 1275 )