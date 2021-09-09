function studentInformation(studentName,studentAge,grade){
    studentAge = Number(studentAge);
    grade = (Number(grade)).toFixed(2);

    console.log(`Name: ${studentName}, Age: ${studentAge}, Grade: ${grade}`)
}
studentInformation('John', 15, 5.54678)