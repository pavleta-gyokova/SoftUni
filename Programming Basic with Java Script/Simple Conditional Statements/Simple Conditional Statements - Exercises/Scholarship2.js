function Scholarship2(arg1,arg2,arg3){
    let IncomeLv = Number(arg1);
    let averageScore = Number(arg2);
    let MinSalary = Number(arg3);
    let SoScholarship = 0
    let ExllentScholarship = 0;
    if (IncomeLv < MinSalary && averageScore >= 4.5) {
        SoScholarship = MinSalary * 0.35;
        
    }
    if (averageScore >= 5.50) {
        ExllentScholarship = averageScore * 25;
        
    }
    if (SoScholarship == 0 && ExllentScholarship == 0) {
    console.log(`You cannot get a scholarship!`);
    } else if (SoScholarship > ExllentScholarship) {
        console.log(`You get a Social scholarship ${Math.floor(SoScholarship)} BGN`)
    } else if (ExllentScholarship >= SoScholarship) {
        console.log(`You get a scholarship for excellent results ${Math.floor(ExllentScholarship)} BGN`)
        
    }
}
Scholarship2("300.00",
"5.65",
"420.00")
