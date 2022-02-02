# Coffee Roaster Objects: A Multi-file JS Program

This is the code-along code for the JS Multi-file Objects Clinic!

Follow the steps below to build out the necessary objects.

1. We want to be able to keep track of our favorite coffee shops in the San Diego area. First, create a module with a factory function called `createNewCoffeeShop`. This function should take in arguments of `name`, `hasOutdoorSeating`, and `capacity`, and return an object with those three properties. The object should additionally have a `currentPatrons` attribute that starts at `0`, and a `coffees` attribute that initializes as an empty array.

Run the first bit of code in `main.js` to see our coffee shops created.

2. We need to roast some coffees!

Build a `createNewCoffee` function in its own file. This function should take in the `name`, `origin`, and `roast` of a coffee, and return an object with those properties.

Then, add a `roastCoffee` method into our `createNewCoffeeShop` object. This method should take the `name`, `origin`, and `roast` of the coffee, create the new coffee, and add it to the `coffees` array for our shop!

3. Now that we have some coffees, we'd like to print our menu so that we can show customers what we have available. Create a `printMenu` method inside of your `createNewCoffeeShop` object, which welcomes customers to the coffee shop (including the coffee shop's name), and then shows a nicely formatted list of all coffees available, including their name and their roast.

Comment in the code in `main.js` under "Part 2 && 3" to see this our menus.

4. Since we now have coffee available for our customers, let's start letting customers in the door! First, we need to make sure we have a way to check if we're at capacity.

Create a method in `createNewCoffeeShop` called `isAtCapacity()`, which returns a boolean `true` or `false` depending on whether or not our `currentPatrons` number has reached `capacity` yet.

5. Since we can now check to make sure we're not at capacity, create an additional method in `createNewCoffeeShop` called `admitPatron()`. This method should not take any arguments. It should first check to make sure we're not at capacity, and so long as there is still room, increase our `currentPatrons` by 1!

Comment in the code in `main.js` under "Part 4 && 5" to see this in action.

6. Our customers are coming in hot and providing us with tons of great tasting notes for our coffees! We want to start keeping track of these for the reference of other patrons.

First, add a `tastingNotes` array as an attribute inside each coffee. It should start as an empty array when a coffee is first roasted.

Then, add an `addTastingNote` method to our coffee object, which takes in a parameter of the tasting note, and adds it to the `tastingNotes` array.

Finally, comment in the code in `main.js` under "Part 6" to see our tasting notes being tracked!