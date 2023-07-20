// Task 1: Code a Person class
class Person {
    constructor(name='Tom', age=20, energy=100) {
        this.name = name
        this.age = age
        this.energy = energy
    }
    sleep() {
        this.energy += 10
        console.log('Energy is increasing, currently at:', this.energy)
    }
    doSomethingFun() {
        if(this.energy > 0) {
            this.energy -= 10;
            console.log('Energy is decreasing, currently at:', this.energy)
        } else if(this.energy == 0){
            this.sleep();
        }
    }
}
// Task 2: Code a Worker class
class Worker extends Person {
    constructor(xp = 0, hourlyWage = 10, name, age, energy) {
        super(name, age, energy)
        this.xp = xp
        this.hourlyWage = hourlyWage
    }
    goToWork() {
        this.xp += 10
        console.log('Experience points is increasing, currently at:', this.energy)
    }

}
// Task 3: Code an intern object, run methods
function intern() {
    var name = 'Bob'
    age = 21
    energy = 110
    xp = 0
    hourlyWage = 10
    var intern = new Worker(xp, hourlyWage, name, age, energy)
    intern.goToWork()
    return intern
}
// intern()

// Task 4: Code a manager object, methods
function manager() {
    var name = 'Alice'
    age = 30
    energy = 120
    xp = 100
    hourlyWage = 30
    var manager = new Worker(xp, hourlyWage, name, age, energy)
    manager.doSomethingFun()
    return manager
}
// manager()