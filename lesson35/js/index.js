'use strict'

const sayArrow = () => {
  console.log('Меня зовут', this.name , this.title);
  console.log('Мне', this.age);
}

let person = {
  name: 'Айжан',
  title: 'Эже',
  age: 23,
  say: sayName,
};


let otherPerson = {
  name: 'Айбек',
  title:'Байке',
  age: 33,
  say: sayName,
};


function sayName (extra) {
  console.log(extra);
  console.log('Меня зовут', this.name , this.title);
  console.log('Мне', this.age);
}


person.say.bind(otherPerson);
otherPerson.say("ПРИВЕТ");