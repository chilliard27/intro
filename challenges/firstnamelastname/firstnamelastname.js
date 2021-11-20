function fullName(firstName, lastName) {
    // your code here
    //let namefirst = firstName
    //let namelast = lastName
    //Changed variables from namefirst and namelast
    let name = firstName + ' ' + lastName

    console.log(name)
    return name

  }
  
  // ---- TESTS - don't change these ---- //
  console.log(fullName('Michael', 'Jordan') === 'Michael Jordan')
  console.log(fullName('Tom', 'Prete') === 'Tom Prete')
  console.log(fullName('Ada', 'Lovelace') === 'Ada Lovelace')