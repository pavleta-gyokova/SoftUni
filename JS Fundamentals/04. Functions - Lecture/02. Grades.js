function grades(grade){
    if(grade >= 2 && grade <= 2.99){
        return "Fail"
    } else if(grade <= 3.49){
        return "Poor"
    } else if(grade <= 4.49){
        return "Good"
    } else if(grade <= 5.49){
        return "Very good"
    } else if(grade >= 5.50){
        return "Excellent"
    }

    
}
console.log(grades(2.99))