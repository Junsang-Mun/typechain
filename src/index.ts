class Human {
  public name: string;
  public age: number;
  public gender: string;
  constructor(name: string, age: number, gender: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}

const lynn = new Human("Lynn", 1, "eagle");

const person = {
  name: "Lee Sang Hae Ssi",
  gender: "Pokémon",
  age: 1,
};

const sayHi = (person: Human): string => {
  return `Hi, you are ${person.name} and you are ${person.age} years old. And you are a ${person.gender}!`;
};

console.log(sayHi(lynn));

export {};
