function Grades(grade){
    grade = Number(grade);
    if (grade >= 5.50) {
        console.log("Отличен 6!");
    } else if (grade >= 4.50) {
        console.log("Мн. добър 5!");
    } else if (grade >= 3.50) {
        console.log("Добър 4!");
    } else if (grade >= 3.00) {
        console.log("Среден 3!");
    } else {
        console.log("Слаб 2!");
    }

}
Grades("2.54")