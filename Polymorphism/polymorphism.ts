class Animals {
    makeSound(): void {
      console.log("Some generic animal sound");
    }
  }
  
  class Dogs extends Animals {
    makeSound(): void {
      console.log("Dog barks!");
    }
  }
  
  class Cat extends Animals {
    makeSound(): void {
      console.log("Cat meows!");
    }
  }
  
  function getAnimalSound(animal: Animals) {
    animal.makeSound();
  }
  
  let myDogs = new Dogs();
  let myCats = new Cat();
  
  getAnimalSound(myDogs);  // Output: Dog barks!
  getAnimalSound(myCats);  // Output: Cat meows!
  