import createNewCoffee from "./createNewCoffee.js"

const createNewCoffeeShop = (name, hasOutdoorSeating, capacity) => {
  return {
    name: name,
    hasOutdoorSeating: hasOutdoorSeating,
    capacity: capacity,
    currentPatrons: 0,
    coffees: [],
    roastCoffee(name, origin, roast) {
      // create the new coffee
      let newCoffee = createNewCoffee(name, origin, roast)
      // and add it to the coffees array for our shop
      this.coffees.push(newCoffee)
    },
    printMenu() {
      // create string that:
      // welcomes customers to the coffee shop (including the coffee shop's name)
      let welcomeMessage = `Welcome to ${this.name}! The coffees we have available are:\n`
      // add to string:
      // and then shows a nicely formatted list of all coffees available
      this.coffees.forEach(coffee => {
        // including their name and their roast
        welcomeMessage += `${coffee.name}: ${coffee.roast} Roast\n`
      })
      // return string
      return welcomeMessage
    },
    isAtCapacity() {
      // returns a boolean `true` or `false` depending on whether or not our `currentPatrons` number has reached `capacity` yet
      // if(this.currentPatrons >= this.capacity) {
      //   return true
      // } else {
      //   return false
      // }
      return this.currentPatrons >= this.capacity
    },
    admitPatron() {
      // It should first check to make sure we're not at capacity
      if(!this.isAtCapacity()) {
        // and so long as there is still room
        // increase our `currentPatrons` by 1!
        // this.currentPatrons = this.currentPatrons + 1
        // this.currentPatrons += 1
        this.currentPatrons++
      }
    }
  }
}

export default createNewCoffeeShop