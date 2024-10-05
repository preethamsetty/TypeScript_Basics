class Employee2 {
    private salary: number;  // Private property
  
    constructor(private name: string, salary: number) {
      this.salary = salary;
    }
  
    getSalary(): number {
      return this.salary;
    }
  
    setSalary(newSalary: number): void {
      if (newSalary > 0) {
        this.salary = newSalary;
      } else {
        console.log("Salary must be positive.");
      }
    }
  
    public getName(): string {
      return this.name;
    }
  }
  
  const emps = new Employee2("John", 50000);
  console.log(emps.getSalary());  // Output: 50000
  emps.setSalary(60000);
  console.log(emps.getSalary());  // Output: 60000
  // emps.salary = 70000;  // Error: Property 'salary' is private and only accessible within class 'Employee'.
  