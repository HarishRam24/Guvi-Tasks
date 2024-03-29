//Promise function
//Make delay
function makeDelay(delay){
    return new Promise((res,rej)=>{
        if(delay <1000){
            rej("[ERROR] cannot make delay less than a second");
        }else{
            setTimeout(() => {
                res(`Delay made for ${delay}`);
            }, delay);
        }
    });
}

//Async and Await 
async function executeSetOfOperations() {
    try {
        console.log("Operation 1");
        console.log("Operation 2");
        let delay = await makeDelay(3000);
        console.log(delay);
        console.log("Operation 3");
        delay = await makeDelay(500);
        console.log(delay);
        console.log("Operation 4");
    } catch (error) {
        console.log(error);
    }
}
executeSetOfOperations();

//fetch in promise -> async function 
async function getAllCountries() {
    const res = await fetch("https://restcountries.com/v3.1/all", {
        method: "GET",
    });
    const data = await res.json();
    console.log(data);
  }
  getAllCountries();