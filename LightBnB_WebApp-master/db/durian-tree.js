class Employee {
  constructor(name, title, salary) {
    this.name = name;
    this.title = title;
    this.salary = salary;
    this.boss = null; // Initialize boss to null
    this.subordinates = [];
  }

  addSubordinate(subordinate) {
    this.subordinates.push(subordinate);
    subordinate.boss = this;
  }

  get numberOfPeopleToCEO() {
    let numberOfPeople = 0;
    let currentEmployee = this;

    // Climb "up" the tree (using iteration), counting nodes, until no boss is found
    while (currentEmployee.boss) {
      currentEmployee = currentEmployee.boss;
      numberOfPeople++;
    }

    return numberOfPeople;
  }

  hasSameBoss(employee) {
    return this.boss === employee.boss;
  }
}

// Create instances of Employee
const ada = new Employee("Ada", "CEO", 3000000.00);
const craig = new Employee("Craig", "VP Software", 1000000);
const arvinder = new Employee("Arvinder", "Chief Design Officer", 1000000);
const angela = new Employee("Angela", "VP Retail", 1000000);
const phil = new Employee("Phil", "VP Marketing", 1000000);
const simone = new Employee("simone", "Team member", 250000);
const Ali = new Employee("Ali",);
const florida = new Employee("florida", "Team member", 250000);
const david = new Employee("david", "Team member", 250000);
const brian = new Employee("brian", "Team member", 250000);
const karia = new Employee("karia", "Team member", 250000);

// Add subordinates to the CEO
ada.addSubordinate(craig);
ada.addSubordinate(arvinder);
ada.addSubordinate(angela);
ada.addSubordinate(phil);
ada.addSubordinate(simone);
ada.addSubordinate(Ali);
ada.addSubordinate(florida);
ada.addSubordinate(david);
ada.addSubordinate(brian);
ada.addSubordinate(karia);

// Test
console.log("Craig's boss:", craig.boss);
console.log("Number of Craig's subordinates:", craig.subordinates.length);
console.log("Number of people between Craig and the CEO:", craig.numberOfPeopleToCEO);
