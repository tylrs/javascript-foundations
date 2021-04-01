class Centaur {
  constructor(centaur) {
    this.name = centaur.name;
    this.breed = centaur.type;
    this.cranky = false;
    this.standing = true;
    this.layingDown = false;
  }

  shootBow() {
    if (this.cranky) {
      return "NO!";
    } else {
        this.cranky = !this.cranky;
      return "Twang!!!";
    }
  }

  run() {
    if (this.cranky) {
      return "NO!";
    } else {
      this.cranky = !this.cranky;
      return "Clop clop clop clop!!!";
    }
    //this is also only happening to work
  }

  sleep() {
    if (this.standing) {
      return "NO!"
    } else {
      this.cranky = false;
      return "ZZZZ";
    }
  }

  layDown() {
    this.standing = false;
    this.layingDown = true;
    this.cranky = true;
    //^Might need to change this
  }

  standUp() {
    this.standing = true;
    this.layingDown = false;
  }

  drinkPotion() {
    if (this.standing) {
      this.cranky = false;
    } else {
      return "Not while I'm laying down!";
    }
  }
}

module.exports = Centaur;
