var Dragon = require("../dragon");

describe("exists?", () => {
  test("dragon should be a function", () => {
    //checks that the dragon class is a function
    expect(typeof dragon).toBe('function');
    //setup a new dragon object
    const newDragon = new dragon();
    //check to see that the dragon object exists, using an assertion
    expect(newDragon).toBeDefined();
  });
});

describe("attributes", () => {
  test("it should be red by default", () => {
    //write a test to check if the default color is red
    //set up the dragon object
    const dragonInstance = new Dragon();
    //isolate the color attribute in a variable
    const dragonColor = dragonInstance.color;
    /*write what you expect the name variable to be 
    in the form of an assertion*/
    expect(dragonColor).toBe('red');
  });

  test("it can change color to golden", () => {
    //write a test to check if you can change the dragon's color
    const dragonInstance = new Dragon();
    dragonInstance.color = 'golden';
    expect(dragonInstance.color).toBe('golden');
  });
});

describe("sayings", () => {
  test("it should get angry when you wake it up", () => {
    /*write a test to check the return value of this function is
  what you'd expect*/
    //set up a dragon
    const dragonInstance = new Dragon();
    /*invoke the function and check to see if the return 
    value is what you expect using assertions*/
    const response = dragonInstance.wakeUp();
    expect(response).toBe("WHO DARES DISTURB MY SLUMBER?");
  });

  test("it should be happy when you leave", () => {
    /*similar to the above, write a test to check if the return value of this 
    function is what you expect*/
    const dragonInstance = new Dragon();
    const response = dragonInstance.onLeave();
    expect(response).toBe("Finally some peace!");
  });
});
