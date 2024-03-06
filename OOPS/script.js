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
