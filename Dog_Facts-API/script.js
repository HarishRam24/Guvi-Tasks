// let factCount = document.getElementById("facts");

// //data() onClick function
// async function data() {

//   //To clear previous data
//   factCount.innerHTML = "";

//   //Get the value from input 
//   let count = document.getElementById("count").value;

//   //Getting the data from api using count and url.
//   let res = await fetch(
//     `https://dog-api.kinduff.com/api/facts?number=${count}`,
//     {
//       method: "GET",
//     }
//   );
//   let facts = await res.json();
//   let newData = facts.facts;

//   //Display the data
//   for (i = 0; i < newData.length; i++) {
//     let p = document.createElement("h4");
//     p.innerHTML = `${newData[i]}<hr>`;
//     console.log(i, newData[i]);
//     factCount.append(p);
//   }
// }
// data(); 
var request = new XMLHttpRequest()
var url = "https://dog.ceo/api/breeds/list/all";
request.open('GET',url,true)
request.send()

request.onload = function(){
	if(request.status == 200 && request.readyState == 4){
	var data = JSON.parse(this.response);	
	console.log(data.message);
	}
	else{
		alert("Page Status : "+request.status);
		console.log("Page Status : "+request.status);
	}
	
}

request.onerror = function(){
	console.log("connection failed")
	alert("Connection failed");
}