import createNewCoffee from "./createNewCoffee.js"

const createNewCoffeeShop = (name, hasOutdoorSeating, capacity) => {
  // const coffeeShop = {
  //   name,
  //   hasOutdoorSeating,
  //   capacity
  // }
  const coffeeShop = {
    name: name,
    hasOutdoorSeating: hasOutdoorSeating,
    capacity: capacity,
    currentPatrons: 0,
    coffees: [],
    roastCoffee(name, origin, roast) {
      // this.coffees.push(createNewCoffee(name, origin, roast))
      // create the new coffee
      const newCoffee = createNewCoffee(name, origin, roast)
      // we'll want to push things into the coffees array
      this.coffees.push(newCoffee)
    },
    printMenu() {
      // which welcomes customers to the coffee shop (including the coffee shop's name), and then shows a nicely formatted list of all coffees available, including their name and their roast.
      let myMenu = `Welcome to ${this.name}\n\n`
      this.coffees.forEach(coffee => {
        myMenu = myMenu + `${coffee.name}: ${coffee.roast} roast\n`
        // myMenu += `${coffee.name}: ${coffee.roast} roast\n`
      })
      return myMenu
    },
    isAtCapacity() {
      // which returns a boolean true or false depending on whether or not our currentPatrons number has reached capacity yet
      // is there a way to refactor this `if` statement?
      if(this.currentPatrons >= this.capacity) {
        return true
      } else {
        return false
      }
    },
    admitPatron() {
      // it should first check to make sure we're not at capacity
      if(!this.isAtCapacity()) {
        // currentPatrons += 1
        this.currentPatrons++
      }
      // as long as there is room, increase currentPatrons by 1
    }
  }
  return coffeeShop

  // return {
  //   name,
  //   hasOutdoorSeating,
  //   capacity
  // }
}

export default createNewCoffeeShop