class Company {
    constructor() {
        this.departments = [];
    }

    addEmployee(name, salary, position, department) {
        if (!name || !position || !department || salary < 0) {
            console.log('Invalid input!');
        }
        else {

            let employee = {
                name,
                salary,
                position,
                department
            }

            console.log(`New employee hired. Name: ${employee.name}. Position: ${employee.position}`);

            if (!this.departments[department]) {            
                this.departments[department] =  [];
            }

            this.departments[department].push(employee);
            
        }
    }

    bestDepartment() {
        
        let bestDepartment, bestSalary = 0, 
        averageSalary, result = '', bestDepEmployees = '', val;
        
        for (let [key, value] of Object.entries(this.departments)) {
            let totalSalary = 0;
            
            for (let token of value) {
                totalSalary += Number(token.salary);
            }
            if (totalSalary > bestSalary) {

                bestSalary = totalSalary;
                bestDepartment = key;
                averageSalary = (bestSalary / value.length).toFixed(2);

                val = value;

            }
        }

        let sort = val.sort((a, b) => b.salary - a.salary || a.name.localeCompare(b.name));
        
        for (let i of sort) {
            bestDepEmployees += `${i.name} ${i.salary} ${i.position} \n`;
        }

        result += `Best department is: ${bestDepartment} \n`;
        result += `Average salary: ${averageSalary} \n`;
        result += bestDepEmployees;

        return result;

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
