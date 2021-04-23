function Character(charaClass, vigor, strength, vitality, endurance, speed) {
    this.charaClass = charaClass;
    this.vigor = vigor;
    this.strength = strength;
    this.vitality = vitality;
    this.endurance = endurance;
    this.speed = speed;
}

let knight = new Character('Knight',12,13,15,14,11)
let warrior = new Character('Warrior',14,16,11,11,13)

console.log(knight.vigor)

// const character = [
//     { 
//         class: 'Knight',
//         vigor: 12,
//         strength: 13,
//         vitality: 15,
//         endurance: 14,
//         speed: 11,
//     },
//     {
//         class: 'Warrior',
//         vigor: 14,
//         strength: 16,
//         vitality: 11,
//         endurance: 11,
//         speed: 13,
//     }
// ]
