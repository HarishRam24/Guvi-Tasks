console.log("working");

//OOPS
//Factory functions 
//Return an object 
function createToy(name, dia, type, color, wrapper) {
    return {
        name,
        dia,
        type,
        color,
        wrapper,
        buildToy: function () {
            console.log(`
            Start Manufacturing ${name}
            Head is built at ${dia}
            Body type is ${type}
            Color of the toy is assigned to be ${color}
            Packing the toy in ${wrapper}
            `);
        },
        info: function () {
            console.log(`I'm, ${name}, I got built using createToy method`)
        },
    };
}

const toy1 = createToy("Toy1", "50cm", "Cone", "Red", "Box");
const toy2 = createToy("Toy2", "60cm", "Square", "Purple", "Cone");

console.log(toy1);
console.log(toy2);
toy1.buildToy();
toy1.info();
toy2.buildToy();
toy2.info();

// this keyword 
const Obj = {
    land: "Property Land belonging to GrandFather",
    getLand: function() {
        console.log(this.land);
    },
    innerObj: {
        land: "Property owned by Father",
        getLand: function () {
            console.log(this.land);
        },
        // Targets only the Global object 
        getDetails: () => {
            console.log("Inner Obj1", this);
        },
        //Targets the immediate parent 
        getDetailsin() {
            const arrowFunc = () => {
                console.log("Inner Obj2", this);
            };
            arrowFunc();
        },
     },
};
console.log(Obj);
Obj.getLand();
Obj.innerObj.getLand();
console.log("Global window", this);
Obj.innerObj.getDetails();
Obj.innerObj.getDetailsin(); 

// constructor functions
// it creates an object {} -> when `new` is added 
function Product(name, price, type) {
    this.product_name = name;
    this.product_price = price;
    this.product_type = type;
    this.getDetails = function () {
        console.log(`
        Product Name : ${this.product_name}
        Product Price : ${this.product_price}
        Product Type : ${this.product_type}
        `);
    };
} 

Product.prototype.getPName = function () {
    console.log("Product Name : ", this.product_name);
};

const MyMac = new Product("MAC23", 150000, "Electronics");
console.log(MyMac);
MyMac.getDetails();
MyMac.getPName(); 

// Classes in JS 
// 4 Pillars -> Encapsulation, Inheritance, Abstraction, Polymorphism

class Guvi {
    //Encapsulation 
    constructor(batch, topic, mentor, time, task) {
        //{}
        //POlymorphism 
        this.batch = `FSD${batch}WD2` ; 
        this.topic = topic;
        this.mentor = mentor;
        this.time = time;
        this.task = task; 
    }

 //Abstraction
 getTaskPercentage() {
    let taskpercentage = (this.task * 100) / 67;
    console.log("Task percentage", taskpercentage.toFixed(2));
  }
  getBatchDetails() {
    console.log("The batch info is", this.batch);
  }
  getTodayTopic() {
    console.log("The Topic info is", this.topic);
  }
  getOverALlDetails() {
    console.log(`
       Batch : ${this.batch}
       Topic :  ${this.topic}
       Mentor : ${this.mentor}
    `);
  }
}

const todaySession = new Guvi(57, "OOPS", "Sanjay", "8.10", 60);
console.log(todaySession);
todaySession.getTaskPercentage();

//Inheritance
class Student extends Guvi {
    constructor(batch, topic, mentor, time, task, name, course) {
      super(batch, topic, mentor, time, task);
      this.student_name = name;
      this._student_course = course;
    }
    // getter method 
    get student_course() {
        return this._student_course;
    }
    // setter method 
    set student_course(newCourse) {
        if (newCourse.lenghth <=0 || newCourse.lenghth > 10) {
            console.log("ERROR");
        } else {
            this._student_course = newCourse;
        }
    }
    getStudentInfo() {
      console.log(`
      StudentName : ${this.student_name}
      StudentCourse : ${this.student_course}
      `);
    }
  }

  const harish = new Student(57, "OOPS", "Sanjay", "8.10", 60, "Harish", "MERN");
  console.log(harish);
  harish.getStudentInfo();
  harish.getTodayTopic();

console.log(harish.student_course);
harish.student_course = "FSD" ; 
console.log(harish.student_course); 