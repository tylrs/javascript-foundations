var Human = require('./human');

class Ogre {
  constructor(ogre) {
    this.name = ogre.name;
    if (!ogre.abode) {
      this.home = 'Swamp';
    } else {
      this.home = ogre.abode;
    }
    this.swings = 0;
  }

  encounter(human)  {
    human.encounterCounter++;
    if (human.noticesOgre()) {
      this.swingAt(human);
    }
  }

  swingAt(human) {
    this.swings++;
    if (!(this.swings % 2)) {
      human.knockedOut = true;
    }
  }

  apologize(human) {
    human.knockedOut = false;
  }
}
module.exports = Ogre;
