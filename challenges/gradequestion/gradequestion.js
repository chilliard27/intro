function whatGrade(gpa){

    let grades = {
        4 : 'A',
        3 : 'B',
        2 : 'C',
        1 : 'D',
        
    }
 if (gpa >= 1){


return grades[gpa]
} else {
    return 'F'
}
}
console.log(whatGrade(4))
console.log(whatGrade(3))
console.log(whatGrade(2))
console.log(whatGrade(1))
console.log(whatGrade(.9))