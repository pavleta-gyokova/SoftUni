function solve(input) {
    let schoolGrades = new Map;

    input.forEach(line => {
        let studentInfo = line.split(" ");
        let name = studentInfo.shift();
        let grades = studentInfo.map(Number);
        if (schoolGrades.has(name)) {
            let oldGrades = schoolGrades.get(name);
            let allGrades = oldGrades.concat(grades);
            schoolGrades.set(name, allGrades);

        } else {
            schoolGrades.set(name, grades)
        }
    });
    let studentEntries = Array.from(schoolGrades.entries());
    let sortedStudentEntries = studentEntries.sort((a,b) =>{
        let studentGradesA = a[1];
        let studentGradesB = b[1];

        let averageGradeA = averageGrade(studentGradesA);
        let averageGradeB = averageGrade(studentGradesB);
        return averageGradeA - averageGradeB
    })

    function averageGrade(grades){
        let gradeSum = 0;
        for(let grade of grades){
            gradeSum += grade
        }
        return gradeSum / grades.length;
    }

    for(kvp of sortedStudentEntries){
        console.log(`${kvp[0]}: ${kvp[1].join(", ")}`);
    }
}
solve(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6']
)