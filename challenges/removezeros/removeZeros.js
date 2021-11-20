function removeZeros(number)
{
    let strNumber = number.toString()
    let answer = ''
for (let i = 0; i < strNumber.length; i++) {
        strNumber[i] !== '0' ?  answer += strNumber[i]  :  answer = answer + '' 
    }
    console.log(answer)
    return Number(answer)
}
removeZeros(506800)