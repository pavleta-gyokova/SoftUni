function examPreparation(input){
    let index = 0;
    let lowGradeNum = Number(input[index]);
    index++
    let exam = input[index];
    index++
    let grade = Number(input[index]);
    let counterTask = 0;
    let sumGrade = 0;
    let lastExam = "";
    let counterLowGrade = 0;
    let isTirred = false;
    while(exam !== "Enough"){
        if(grade <= 4){
            counterLowGrade++;
        }

        if(lowGradeNum === counterLowGrade){
            isTirred = true;
            break;
        }
        lastExam = exam;
        sumGrade += grade;
        counterTask++;
        index++
        exam = input[index];
        index++
        grade = Number(input[index])

    }
    let averageScore = sumGrade / counterTask;
    if(isTirred === true){
        console.log(`You need a break, ${counterLowGrade} poor grades.`);
    } else {
        console.log(`Average score: ${averageScore.toFixed(2)}`);
        console.log(`Number of problems: ${counterTask}`);
        console.log(`Last problem: ${lastExam}`)
    }
}
examPreparation(["2",
"Income",
"3",
"Game Info",
"6",
"Best Player",
"4"])

