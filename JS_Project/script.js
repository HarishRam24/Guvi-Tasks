const API = "https://6604dda92ca9478ea17ea27f.mockapi.io/Users";
const user_container = document.querySelector(".user-container");
const user_form = document.querySelector(".user-form");
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

//POST - (Create)
async function addNewUser(newData) {
  const res = await fetch(API, {
    method: "POST" ,
    body: JSON.stringify(newData),
    headers: {
        "Content-Type": "application/json", 
    },
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

//Form innerHTML
user_form.innerHTML += `
<form>
<h2>USER MANAGEMENT</h2>
<input
type="text"
required
value=""
placeholder="Enter User Name"
class = "input-text"
id="input-name"
/>
<input
type="text"
required
value=""
placeholder="Enter User Batch"
class = "input-text"
id="input-batch"
/>
<input
type="number"
required
value=""
placeholder="Enter User Number"
class = "input-text"
id="input-contact"
/>
<button type= "submit" id="add-btn" class= "btn">Create</button>
</form>
`;
//Input fields 
const inp_name = document.querySelector("#input-name");
const inp_batch = document.querySelector("#input-batch");
const inp_contact = document.querySelector("#input-contact");

//DOM Handling 

//Get user input values 
function getUserInputValues() {
    return {
        name : inp_name.value,
        batch : inp_batch.value,
        contact : inp_contact.value,
    };
}

function clearForm() {
    inp_name.value = "";
    inp_batch.value = "";
    inp_contact.value = "";
}

function createUserCard(user) {
    const card = document.createElement("div");
    card.setAttribute("class", "card");
    card.innerHTML += `
  <h1>${user.name}</h2>
  <p>Batch <span id= "batch-value">${user.batch}</span></p>
  <p>Contact <span id= "contact-value">${user.contact}</span></p>
  <div class="btn-group">
  <button data-id =${user.id} id="edit-btn" class= "btn">Edit</button>
  <button data-id =${user.id}id="del-btn" class= "btn">Delete</button>
  </div>
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

user_form.addEventListener("click", (e) => {
    e.preventDefault();
    if(e.target.id == "add-btn") {
        const payload = getUserInputValues();
        addNewUser(payload);
        clearForm();
    }
});

user_container.addEventListener("click", (e) => {
    const id = e.target.dataset.id;
    const parent = e.target.parentNode.parentNode;
    if (e.target.id == "del-btn") {
        deleteUser(id, parent);
    }
});

//Handlers invocations 
// const dummy_data = {
//     name: "name7",
//     batch: "batch7",
//     contact: 75839374,
// };

// addNewUser(dummy_data);
// updateUser("6", dummy_data);
// deleteUser("6");
getAllUsers();
