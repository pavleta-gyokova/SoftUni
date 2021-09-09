function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick () {
      let input = document.querySelector('#inputs > textarea').value;
      
      let restoraunts = {};
      let arr = JSON.parse(input);
      arr.forEach(line => {
         let tokens = line.split(" - ");
         let name = tokens[0];
         let workersArr = tokens[1].split(', ');
         let workers = [];
         for(worker of workersArr){
            let [name,salary] = worker.split(' ');
            salary = Number(salary);
            workers.push({
               name,
               salary
            })
         }
         if(restoraunts[name]){
            workers = workers.concat(restoraunts[name].workers);
         }
         
      workers.sort((a,b)=> b.salary - a.salary);
      let bestSalary = workers[0];
      let averageSalary = workers.reduce((acc, curr) => acc + curr.salary,0)/workers.length;
      restoraunts[name] = {
         workers,
         averageSalary,
         bestSalary
      }
         
      });
      
      console.log(restoraunts);
   }
   
}