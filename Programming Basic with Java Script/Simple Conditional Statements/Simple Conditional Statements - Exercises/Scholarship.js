function Scholarship(arg1,arg2,arg3){
    let IncomeLv = Number(arg1);
    let averageScore = Number(arg2);
    let MinSalary = Number(arg3);
    let SocialScholarship = Math.floor(MinSalary * 0.35);
    let ScoreScholarship = Math.floor(averageScore * 25);
    if (IncomeLv >= MinSalary && averageScore < 5.50) {
        console.log(`You cannot get a scholarship!`);
        
    } else if (IncomeLv < MinSalary && averageScore >= 4.5 && averageScore < 5.50 ) {
        console.log(`You get a Social scholarship ${SocialScholarship} BGN`);
        
    } else if (IncomeLv >= MinSalary && averageScore >= 5.5) {
        console.log(`You get a scholarship for excellent results ${ScoreScholarship} BGN`);
        
    } 
    if (IncomeLv < MinSalary && averageScore >= 5.5 && SocialScholarship > ScoreScholarship) {
        console.log(`You get a Social scholarship ${SocialScholarship} BGN`);
        
    } else if (IncomeLv < MinSalary && averageScore >= 5.5 && SocialScholarship <= ScoreScholarship) {
        console.log(`You get a scholarship for excellent results ${ScoreScholarship} BGN`);
    }

    

}
Scholarship("300.00",
"5.65",
"420.00")




