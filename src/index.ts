const person = {
  name: "Lee Sang Hae Ssi",
  gender: "Pokémon",
  age: 1,
};

const sayHi = (name: string, age: number, gender: any): string => {
  return `Hi, you are ${name} and you are ${age} years old. And you are ${gender}!`;
};

console.log(sayHi("name", 123, "asdf"));

export {};
