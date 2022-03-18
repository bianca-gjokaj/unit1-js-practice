document.write("JavaScript works!");
console.log("Hello console!");
console.warn("This is only a test!");

let myName = "Bianca";
let workFromHome = true;
let side = 15; 
let radius = 10;

console.log("My name is " + myName);
console.log(`I work from home: ${workFromHome}`);
console.log("The length of each side of the square is " + side);
console.log("The radius of the circle is " + radius);

let squareArea = side * side;
let squarePerimeter = 4 * side;
let circleArea = Math.PI * radius * radius;
let circlePerimeter = 2 * Math.PI * radius;

console.log("The sqaure are is " + squareArea + " and the perimeter is " + 
squarePerimeter);
console.log("The circle are is " + circleArea + " and the perimeter is " + 
circlePerimeter);

let travelOptions = ["foot", "bike", "car", "airplane"];
    console.log("The travel options are:")
    console.log(`1) ${travelOptions[0]}`);
    console.log(`2) ${travelOptions[1]}`);
    console.log(`3) ${travelOptions[2]}`);
    console.log(`4) ${travelOptions[3]}`);

let travelType = prompt("How would you like to travel?")
    console.log("Travel type: " + travelType)

let distance = 100;
let time = 0;
let cost = 0;

if (travelType === "foot") {
    console.log("Walking is free! Speed is 3mph.");
} else if (travelType === "bike") {
    console.log("Biking is free! Speed is 10mph.");
} else if (travelType === "car") {
    console.log("Driving is $0.25/mi. Speed is 60mph.");
} else if (travelType === "airplane") {
    console.log("Flying is $0.10/mi. Speed is 400mph.");
} else {
    console.log(`Sorry. ${travelType} is an invalid option.`);
}
