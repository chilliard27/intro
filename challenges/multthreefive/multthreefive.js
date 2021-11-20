function multthreefive(max) {
    let sum = 0
    for ( let i = 0; i < max; i++ ) {
            if( i % 3 ==0 || i % 5 ==0 ) {
                sum += i
            }


    }
    console.log(sum)
    return sum
}
multthreefive(1000)