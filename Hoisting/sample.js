const resumeobj = {
    name : "harish",
    education : "BE.MechanicalEngineering",
    about : "I'm a MechanicalEngineering graduate looking for an oppurtunity to showcase my skills.",
    skills : ["Autocad", "SolidWorks", "Ansys", "Catia", "NXcam"]
} 

// for loop 
const objKeys = Object.keys(resumeobj);
const objValues = Object.values(resumeobj);
for (let i = 0; i < resumeobj.length; i++) {
    console.log("objKeys", objKeys[i]);
    console.log("objValues", resumeobj[`${objKeys[i]}`]);
  }
