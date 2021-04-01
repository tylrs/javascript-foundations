var Person = require('./person');
var Statue = require('./statue');

class Medusa {
  constructor(name) {
    this.name = name;
    this.statues = [];
  }

  gazeAtVictim(person) {
    if (this.statues.length < 3){
      var statue = new Statue(person.name);
      this.statues.push(statue);
    } else {
      var statue = new Statue(person.name);
      this.statues.push(statue);
      var savedPerson = this.statues.shift();
      var newSavedPerson = new Person(savedPerson.name);
      newSavedPerson.mood = "relieved";
      return newSavedPerson;
    }
  }
}

module.exports = Medusa;
