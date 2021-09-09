class Company {
    constructor() {
        this.departments = [];
        this.departmentsData = [];
       
    }

    isValid(input){
        if (input === "" || input === undefined || input === null) {
            return false
        } else {
            return true
        }
    }

    addEmployee(username, salary, position, department) {

        if (this.isValid(username) && this.isValid(salary) && this.isValid(position) && this.isValid(department)) {

            if (salary >= 0) {
                if (!this.departments.includes(department)) {
                    this.departments.push(department)
                    this.departmentsData.push(
                        {
                        departmentName: department,
                        emplyeeData: [],
                        totalSalary: 0
                    })
                    
                }

                let currnentDepartment = this.departmentsData.filter(dep => dep.departmentName === department)[0]
                currnentDepartment.emplyeeData.push(
                    {
                        username,
                        salary,
                        position
                    }
                )
                currnentDepartment.totalSalary = currnentDepartment.totalSalary + salary;
                return `New employee is hired. Name: ${username}. Position: ${position}`
            } else {
                throw new Error("Invalid input!")
            }
        } else {
            throw new Error("Invalid input!")
        }
    }

    bestDepartment() {
        let bestDepartment = this.departmentsData.sort((dep1, dep2) =>{
            
            let dep1AverageSalary = dep1.totalSalary / dep1.emplyeeData.length
            let dep2AverageSalary = dep2.totalSalary / dep2.emplyeeData.length

            return dep2AverageSalary - dep1AverageSalary

        })[0]

        let output=[];
        output.push(`Best Department is: ${bestDepartment.departmentName}`)
        output.push(`Average salary: ${(bestDepartment.totalSalary / bestDepartment.emplyeeData.length).toFixed(2)}`)
        
        let sortedEmplData = bestDepartment.emplyeeData.sort((empl1, empl2) => empl2.salary - empl1.salary || empl1.username.localeCompare(empl2.username));

        sortedEmplData.forEach(empl => {
            output.push(`${empl.username} ${empl.salary} ${empl.position}`)
        });

        return(output.join("\n"))

    }
}
let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());
