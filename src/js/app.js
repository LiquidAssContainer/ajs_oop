export class Character {
  constructor(name, type) { // проверка типа в задании мне вообще показалось какой-то размытой и непонятной штукой
    const characterClassList = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];

    if (characterClassList.includes(type) && this.constructor.name === type && name.length >= 2 && name.length <= 10) {
      this.name = name;
      this.type = type;
      this.health = 100;
      this.level = 1;
    } else {
      throw new Error('Неверные входные параметры');
    }
  }

  levelUp() {
    if (this.health <= 0) {
      throw new Error('Так вы же умерли!');
    }

    this.level += 1;
    this.attack = Math.round(this.attack * 1.2);
    this.defence = Math.round(this.defence * 1.2);
    this.health = 100;
  }

  damage(points) {
    this.health -= points * (1 - this.defence / 100); // а если защита больше 100? (:
    if (this.health < 0) {
      this.health = 0;
    }
  }
}

export class Bowman extends Character {
  constructor(name, type) {
    super(name, type);
    this.attack = 25;
    this.defence = 25;
  }
}

export class Swordsman extends Character {
  constructor(name, type) {
    super(name, type);
    this.attack = 40;
    this.defence = 10;
  }
}

export class Magician extends Character {
  constructor(name, type) {
    super(name, type);
    this.attack = 10;
    this.defence = 40;
  }
}

export class Daemon extends Character {
  constructor(name, type) {
    super(name, type);
    this.attack = 10;
    this.defence = 40;
  }
}

export class Undead extends Character {
  constructor(name, type) {
    super(name, type);
    this.attack = 25;
    this.defence = 25;
  }
}

export class Zombie extends Character {
  constructor(name, type) {
    super(name, type);
    this.attack = 40;
    this.defence = 10;
  }
}
