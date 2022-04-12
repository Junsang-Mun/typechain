const name = "Kim";
const age = -99;
const gender = null;

const sayHi = (name: string, age: number, gender: any): string => {
  return `Hi, you are ${name} and you are ${age} years old. And you are ${gender}`;
};

console.log(sayHi(name, age, gender));

export {};
