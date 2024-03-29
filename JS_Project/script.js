const API = "https://6604dda92ca9478ea17ea27f.mockapi.io/Users";
const user_container = document.querySelector(".user-container");
//API Request to handle CRUD Operations
//API Handlers
//GET - (Read)
async function getAllUsers() {
    const res = await fetch(API, {
        method: "GET" ,
    });
    const data = await res.json();
    console.log(data);
    renderAllUserData(data);
}
getAllUsers(); 

//POST - (Create)
async function addNewUser(newData) {
  const res = await fetch(API, {
    method: "POST" ,
    body: JSON.stringify(newData),
    headers: {
        "Content-Type": "application/json", 
    }
  });
  const data = await res.json();
  console.log(data);
}

//PUT - (Update)
async function updateUser(id, updatedUser) {
    const res = await fetch (`${API}/${id}` , {
        method: "PUT" ,
        body: JSON.stringify(updatedUser),
        headers: {
            "Content-Type": "application.json",
        },
    });
    const data = await res.json();
    console.log(data);
}

//DELETE - (Delete)
async function deleteUser(id) {
    const res = await fetch(`${API}/${id}`, {
        method: "DELETE",
    });
    const data = await res.json();
    console.log(data);
}

//DOM Handling 
function createUserCard() {
    const card = document.createElement("div", { class: "card" });
    card.innerHTML += `
    <h1>${user.name}</h1>
    <p>Batch <span>${user.batch}</span></p>
    <p>Contact <span>${user.contact}</span></p>
    `;
    return card;
}
function appendUserCard(user){
    const appendedData = createUserCard(user);
    user_container.append(appendedData);
}
function renderAllUserData(users) {
    users.map((user) => {
      appendUserCard(user);
    });
}

//Handlers invocations 
const dummy_data = {
    name: "name7",
    batch: "batch7",
    contact: 75839374,
};

// addNewUser(dummy_data);
// updateUser("6", dummy_data);
// deleteUser("6");
getAllUsers();
