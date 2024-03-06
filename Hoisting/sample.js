const resumeobj = {
    name : "harish",
    education : "BE.MechanicalEngineering",
    about : "I'm a MechanicalEngineering graduate looking for an oppurtunity to showcase my skills.",
    skills : ["Autocad", "SolidWorks", "Ansys", "Catia", "NXcam"]
};
 
// for loop 
const objKeys = Object.keys(resumeobj);
const objValues = Object.values(resumeobj);
for (let i = 0; i < objValues.length; i++) {
    console.log(objKeys[i]);
    console.log(objValues[i]);
  }

// for each 
objValues.forEach((val,idx) => {
    console.log(val);
    console.log(idx);
}
); 

// for in 
for (key in resumeobj) {
    console.log(`
    obj key : ${key}
    obj value : ${resumeobj[key]}
    `);
}

// for of 
for (let key in resumeobj) {
    console.log(`${key}: ${resumeobj[key]}`);
}