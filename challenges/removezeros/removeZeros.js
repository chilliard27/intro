function removeZeros(number)
{
    let strNumber = number.toString()
    let answer = ''
for (let i = 0; i < strNumber.length; i++)
    {
        
        if (strNumber[i] !== '0') 
        { answer = answer + strNumber[i] }
    }
    console.log(answer)
    return Number(answer)
}
removeZeros(5068019)