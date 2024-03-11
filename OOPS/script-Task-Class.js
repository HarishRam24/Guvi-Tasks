console.log("------Details of 'Person' class-----");

class Person {
    constructor(name, age, gender, occupation, skills, qualification, experience) {
        this.name = "Harish Ram";
        this.age = 20;
        this.gender = "Male";
        this.occupation = "FSD";
        this.skills = ["HTML", "CSS", "Javascript", "React", "MongoDB", "ExpressJS", "NodeJS"];
        this.qualification = "B.E.Mechanical Engineering";
        this.experience = "2 Years";
        
    }

    // display all details of the person
    displayDetails() {
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
        console.log(`Gender: ${this.gender}`);
        console.log(`Occupation: ${this.occupation}`);
        console.log(`Skills: ${this.skills}`);
        console.log(`Qualification: ${this.qualification}`);
        console.log(`Experience: ${this.experience}`);
    }
}

let person = new Person("Class");
person.displayDetails();



console.log("-----Calculating the Uber price-----");

class UberPriceCalculator {
    constructor(basePrice, costPerKm, bookingFee) {
        this.basePrice = basePrice;
        this.costPerKm = costPerKm;
        this.bookingFee = bookingFee;
    }
    calculatePrice(distanceInKm) {
        // Calculate total price
        let totalPrice = this.basePrice + (this.costPerKm * distanceInKm) + this.bookingFee;
        return totalPrice;
    }
}

let calculator = new UberPriceCalculator(50, 10, 5);

// To calculate the price for distance of 10 kms 
let distance = 10;
let price = calculator.calculatePrice(distance);
console.log(`The price of the Uber ride for ${distance} kilometers is: ${price} Rupees/-`);