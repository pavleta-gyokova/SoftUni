function solve (object){
 
   if(!object.dizziness){
       return object
   } else {
       let addedAmaoint = 0.1 * object.weight * object.experience;
        object.levelOfHydrated += addedAmaoint;
        object.dizziness = false;
        return object
   }
   

  
  
}
solve ({ weight: 120,
    experience: 20,
    levelOfHydrated: 200,
    dizziness: true }
  
  )