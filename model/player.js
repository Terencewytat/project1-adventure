function Player(classType, vigor, strength, vitality, endurance, speed) {
    this.classType = classType;
    this.vigor = vigor;
    this.strength = strength;
    this.vitality = vitality;
    this.endurance = endurance;
    this.speed = speed;
}


let player = new Player('Knight',12,13,15,14,11)


module.exports = player





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
