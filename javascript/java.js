class Tamagotchi {
    constructor(name, type) {
      this.name = name;
      this.type = type;
      this.hunger = 5;
      this.happiness = 5;
    }
  
    async decreaseLevels() {
      while (this.hunger > 0 && this.happiness > 0) {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        this.hunger--;
        await new Promise((resolve) => setTimeout(resolve, 2000));
        this.happiness--;
        console.log(
          `${this.name}'s hunger is now ${this.hunger} and happiness is now ${this.happiness}`
        );
      }
      console.log(`${this.name} has died!`);
    }
  
    async play() {
      if (this.happiness > 0) {
        this.happiness++;
        console.log(`${this.name} is happy! Happiness is now ${this.happiness}`);
      }
    }
  
    async feed() {
      if (this.hunger > 0) {
        this.hunger++;
        console.log(`${this.name} is full! Hunger is now ${this.hunger}`);
      }
    }
  }
  
  async function main() {
    const name = prompt("Enter a name for your Tamagotchi:");
    const type = prompt("Enter a type for your Tamagotchi (dog or cat):");
    const tamagotchi = new Tamagotchi(name, type);
  
    console.log(`${tamagotchi.name} is a ${tamagotchi.type} Tamagotchi!`);
  
    await tamagotchi.decreaseLevels();
  
    console.log(`Game over!`);
  }
  
  main();  