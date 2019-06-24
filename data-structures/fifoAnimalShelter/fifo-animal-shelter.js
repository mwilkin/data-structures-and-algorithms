'use strict';

class Animal{
  constructor(name){
    this.name = name;
  }
}

class AnimalShelter{
  constructor(){
    this.storage = [];
  }
  enqueue(name){
    if(name === 'cat' || name === 'dog'){
      let animal = new Animal(name);
      this.storage.push(animal);
    }else{
      return 'must be cat or dog';
    }
  }

  dequeue(pref){
   
  }

}

module.exports = AnimalShelter;
