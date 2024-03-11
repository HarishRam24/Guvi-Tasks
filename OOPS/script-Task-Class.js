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

console.log("------'Movie' class-----");

class Movie {
    constructor(title, studio, rating = "PG") {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }

    static getPG(movies) {
        return movies.filter(movie => movie.rating === "PG");
    }
}
let casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG-13");

let movies = [
    new Movie("The Lion King", "Walt Disney Pictures", "PG"),
    new Movie("Frozen", "Walt Disney Pictures", "PG"),
    new Movie("The Dark Knight", "Warner Bros. Pictures", "PG-13"),
    new Movie("Finding Nemo", "Pixar Animation Studios", "G")
];

let pgMovies = Movie.getPG(movies);
console.log(pgMovies);


console.log("------Array Methods------");
//a.Get all the countries from the Asia continent /region using the Filter function
var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v2/all");
request.send();
request.onload=function(){
    var result=JSON.parse(request.response);
     result.filter((countries) => {
           return countries.region ==="Asia";
     });
     console.log(result);
};

//b.Get all the countries with a population of less than 2 lakhs using Filter function

var request1 = new XMLHttpRequest();
request1.open("GET","https://restcountries.com/v2/all");
request1.send();
request1.onload=function(){
    var result1=JSON.parse(request1.response);
    const pop = result1.filter((element)=>{
        return element.population<200000;
    });
console.log(pop);};

//c.Print the following details name, capital, flag using forEach function

var requestt = new XMLHttpRequest();
requestt.open("GET","https://restcountries.com/v2/all");
requestt.send();
requestt.onload=function(){
    var resultt=JSON.parse(requestt.response);
    resultt.forEach(element => {
    console.log(element.name);
        console.log(element.capital);
        console.log(element.flag); 

    });
};

//d.Print the total population of countries using reduce function

var reques = new XMLHttpRequest();
reques.open("GET","https://restcountries.com/v2/all");
reques.send();
reques.onload=function(){
    var resul=JSON.parse(reques.response);
    var total = resul.reduce((acc,curr) =>{
        return acc+curr.population;
    } ,0);

    console.log(total);
 
};

//e.Print the country which uses US Dollars as currency

var req = new XMLHttpRequest();
req.open("GET","https://restcountries.com/v2/all");
req.send();
req.onload=function(){
    var res=JSON.parse(req.response);
    var currency = res.filter((element) => {
     for(let key in element.currencies){
        if(element.currencies[key].code === "USD"){
            return element;
        }
     }
    });
        console.log(currency);
    };