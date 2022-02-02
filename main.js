

// Part 1
console.log(`Creating Coffee Shops:\n`);
const james = createNewCoffeeShop(
  "James Coffee Co",
  false,
  5
)

const birdRock = createNewCoffeeShop(
  "Bird Rock Coffee Roasters",
  true,
  8
)

const sevenSeas = createNewCoffeeShop(
  "Seven Seas Roasting Company",
  true,
  10
)

console.log("james", james);
console.log("birdRock", birdRock);
console.log("sevenSeas", sevenSeas);

// Part 2 && 3

// console.log(`\n Roasting Coffees (yum!!): \n`);
// james.roastCoffee("Night Owl", undefined, "Dark")
// birdRock.roastCoffee("Cafe Del Sol", undefined, "Medium Light")
// birdRock.roastCoffee("Little Italy", "South America", "Medium Dark")
// sevenSeas.roastCoffee("Sidamo", "Ethopia", "Light")
// sevenSeas.roastCoffee("El Jaguar", "Mexico Siltepec", "Medium Dark")

// console.log(`\n Available Menus: \n`);
// console.log(james.printMenu())
// console.log(birdRock.printMenu())
// console.log(sevenSeas.printMenu())

// Part 4 && 5

// console.log(`\n Admitting Patrons: \n`);
// for(let i=0; i<7; i++) {
//   james.admitPatron()
//   birdRock.admitPatron()
//   sevenSeas.admitPatron()
// }

// console.log(`James at Capacity:`);
// console.log(james.isAtCapacity())
// console.log(james.currentPatrons);
// console.log(`Bird Rock at Capacity:`);
// console.log(birdRock.isAtCapacity())
// console.log(birdRock.currentPatrons);
// console.log(`Seven Seas at Capacity:`);
// console.log(sevenSeas.isAtCapacity())
// console.log(sevenSeas.currentPatrons);

// Part 6

// console.log(`\n Conducting Tastings.... \n`);
// const nightOwl = james.coffees[0]
// nightOwl.addTastingNote("Hazelnut")
// nightOwl.addTastingNote("Maple Syrup")
// console.log("nightOwl", nightOwl);

// const delSol = birdRock.coffees.find(coffee => coffee.name === "Cafe Del Sol")
// delSol.addTastingNote("Dark Honey")
// delSol.addTastingNote("Clementine")
// delSol.addTastingNote("Blackberry")
// console.log("delSol", delSol);

