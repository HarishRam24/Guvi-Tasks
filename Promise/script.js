console.log("working promise");
// Production of promise 
function getData(val) {
    return new Promise((resolve,reject)=> {
        if (val !=0) {
            setTimeout(() => {
              resolve(`Your data is ${val}`);    
            }, 2000);
         }else {
            setTimeout(() => {
               reject("[ERROR] You have no data");
             }, 1000);
        }
    });
}

//Consumption of promise 
const myPromise = getData(1);
console.log(myPromise);
//Promise states -> pending, resolve, rejected 
//In pending state -> setTimeout is given for some time and pending will be printed on the console

console.log("start");
getData(1)
  .then((data) => console.log(data))
  .catch((err) => console.log(err))
console.log("end");
//.then -> get the data if value is true 
//.catch -> get data if the value is false/error

function courseCreation() {
    return new Promise((res) => {
        setTimeout(() => {
            res("Created Course {p1}")
        }, 2000);
    });
}
function chooseCourse(data) {
    return new Promise((res) => {
        setTimeout(() => {
            res(`${data} for MERN {p2}`);
        }, 3000);
    });
}
function makePayment(data) {
    return new Promise((res) => {
        setTimeout(() => {
            res(`${data} and made payment {p3}`);
        }, 2000);
    });
}

//Promise chaining 
courseCreation()
.then((data) => {
    console.log(data);
    return chooseCourse(data);
})
.then((data2) => {
    console.log(data2);
    return makePayment(data2);
})
.then((finalData) => {
    console.log(finalData);
});

//Promise all 
const promise1 = new Promise((res) => {
    setTimeout(() => {
        res("Promise 1 resolved");
    }, 2000);
});
const promise2 = new Promise((res) => {
    setTimeout(() => {
        res("Promise 2 resolved");
    }, 2000);
});
const promise3 = new Promise((res) => {
    setTimeout(() => {
        res("Promise 3 resolved");
    }, 5000);
});
// const promise3 = new Promise((res,rej) => {
//     setTimeout(() => {
//         rej("Promise 3 rejected");
//     }, 5000);
// }); -> Example for reject => only this will be shown in the console

Promise.all([promise1, promise2, promise3])
.then((data)=>console.log(data))
.catch((err)=>console.log(err))
//When all promises are resolved -> it will be resolved
//If even any one is rejected -> it will only show the rejected response

//Fetch api

fetch("https://restcountries.com/v3.1/all", {
  method: "GET",
})
  .then((res) => res.json())
  .then((data) => renderAllCards(data))
  .catch((err) => console.log("[ERROR]", err));

  //Create card() -> card -> button
  function renderAllCards (data) {
    console.log(data);
    data.map((val) => {
        createCard(val);
    });
  }
  function createCard(con) {
    cardContainer.innerHTML += `
    <div class="card">
    <img id="flag" src=${con.flags.png} alt="Country Flag" />
    <div class="card-info">
      <h2>${con.name.common}</h2>
      <p><span>Population </span>${con.population}<p>
      <p><span>Region </span>${con.region}<p>
      <p><span>Capital </span>${con.capital}<p>
      <button>Click Weather</button>
      <span></span>
      </div>
      </div>
      `;
  }
  function getWeather() {

  }