function Enemy(enemyType, vigor, strength, vitality, endurance, speed) {
    this.enemyType = enemyType;
    this.vigor = vigor;
    this.strength = strength;
    this.vitality = vitality;
    this.endurance = endurance;
    this.speed = speed;
}

let enemy = new Enemy('Undead',30,5,10,10,5)

module.exports = enemy