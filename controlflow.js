// Part 1: Growing Pains
// Constants for the garden
const PI = 3.1415;
const radius = 5;
const area = PI * radius * radius;
const minSpacePerPlant = 0.8;
const initialPlants = 20;

//Calculate the maximum capacity of the garden
const maxCapacity = area / minSpacePerPlant;

// Week counter and initial number of plants
let week = 1;
let plants = initialPlants; //Start with 20 plants in week 1

while (week <= 3) {
    console.log("Week " + week + " :");
    console.log("Plants expected: " + plants);
    console.log("Maximum capacity: " + maxCapacity);

    // check garden status and log appropriate message
    if(plants > maxCapacity * 0.8){
        console.log("Pruned")
    }else if (plants >= maxCapacity * 0.5){
        console.log("Monitored")
    }else {
        console.log("Planted")
    }

    // Double the number of plants for the next iteration
    plants *= 2;

    // Increment week counter
    week++;
}


