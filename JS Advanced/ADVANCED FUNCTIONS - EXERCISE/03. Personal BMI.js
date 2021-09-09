function solve (name,age,weight,height){

    weight = Number(weight);
    let heightinM = Number(height) / 100;
    let bmi = Math.round(weight / heightinM ** 2);
    let status = statusBMI(bmi);
    
    let person = {
        name: name,
        personalInfo: {
            age,
            weight,
            height
        },
        BMI:bmi,
        status
    };
    if(status === 'obese'){
        person.recommendation ='admission required';
    }
   return person; 
    function statusBMI(bmi){
        if(bmi < 18.5){
            return "underweight"
        } else if(bmi < 25){
            return 'normal'
        } else if(bmi < 30){
            return 'overweight'
        } else {
            return 'obese'
        }
    }
}
solve('Honey Boo Boo', 9, 57, 137);