// $((event) => {
let encounterCount = 0;
let encounterArray = [];
let probArray = [];
let fight;


class encounter {
  constructor(name, strength, charisma, speed, health, resilience, endurance, encounterChance, image, fightMessage, friendMessage, fleeMessage) {
  this.name = name;
  this.strength = strength;
  this.charisma = charisma;
  this.speed = speed;
  this.health = health;
  this.resilience = resilience;
  this.endurance = endurance;
  this.encounterChance = encounterChance;
  this.image = image;
  this.fightMessage = fightMessage || `The ${name} counter-attacks!`;
  this.friendMessage = friendMessage || `The ${name} is unconvinced. The ${name} attacks!`;
  this.fleeMessage = fleeMessage || `The ${name} takes the opportunity to attack!`;
  encounterArray.push(this);
  encounterCount++;
  probArray.push(encounterChance);
  }
}

//actions to be set up here!!

class monster extends encounter{
  constructor(name, strength, charisma, speed, health, resilience, endurance, encounterChance, image, fightMessage, friendMessage, fleeMessage) {
    super (name, strength, charisma, speed, health, resilience, endurance, encounterChance, image, fightMessage, friendMessage, fleeMessage);
    this.fight = fight;
    ;
     //fighting function here ^^
    this.flee = () => {2
    };
      //flee function here ^^
    this.friend = () => {3
    };
      //friend function here ^^
    // this._defeat = () => "defeat special function"
  }
}




const player = new encounter("Bob", 10, 10, 10, 100, 0, 0, 0);
console.log(player);

const Slime = new monster("Slime", 1, 20, 3, 30, 20, 3, 10, "");
console.log(Slime);

const Rock = new monster("Rock", 0, 1000, 0, 200, 1000, 0, 1, "");
console.log(Rock);

const GiantRat = new monster("GiantRat", 3, 20, 3, 30, 5, 20, 5, "");
console.log(GiantRat);

const accumulator = (a, b) => a + b;
const totalProb = probArray.reduce(accumulator,0);

let kills = 0;
let escapes = 0;
let friends = 0;

























//Setting encounter



probArray.push(0);
let probAccArray = [0];
for (var i = 1; i < probArray.length; i++) {
  probAccArray.push(probArray[i] + probAccArray[i-1])
}


let currentEncounter;
let setEncounter = () => {
  let ranVal = Math.random() * totalProb;
  console.log(`${ranVal} out of ${totalProb} was rolled!`);
  for (var i = 1; i < probAccArray.length; i++) {
    if (probAccArray[i-1] <= ranVal && ranVal <= probAccArray[i]) {
      currentEncounter = encounterArray[i];
      console.log(`A ${currentEncounter.name} was encountered!`)
      return encounterArray[i];
      break;
    }
  }
}

setEncounter();


























// action effects

fight = () => {
  playerFight = player.strength * Math.random();
  console.log(playerFight);
  currentEncounter.health -= playerFight;
  console.log(currentEncounter.health)
  instanceFiVictoryCheck(currentEncounter.health);

}
// currentEncounter.fight;

friend = () => {
  playerFriend = player.charisma * Math.random();
  console.log(playerFriend);
  currentEncounter.resilience -= playerFriend;
  console.log(currentEncounter.resilience)
  instanceFrVictoryCheck(currentEncounter.resilience);

}
// currentEncounter.fight;

flee = () => {
  playerFlee = player.speed * Math.random();
  console.log(playerFlee);
  currentEncounter.speed -= playerFlee;
  console.log(currentEncounter.endurance)
  instanceFlVictoryCheck(currentEncounter.endurance);

}
// currentEncounter.fight;





























// Instance Checks


const deathCheck = hp => {
  if (hp <= 0) {
    //create death game over screen here
    console.log(`Game over! You killed ${kills} enemies, made ${friends} new friends and escaped ${escapes} encounters!`)

  }
  else {
    console.log(`Still alive! For now...`)
  }
}
// deathCheck(player.health);

const instanceFiVictoryCheck = hp => {
  if (hp <= 0) {
    //create fight victory here, including + player skills
    console.log(`Congratulations! You killed the enemy ${currentEncounter.name}`)
    player.strength += currentEncounter.strength;
    kills++;
  }
  else {
    console.log(`The enemy ${currentEncounter.name} looks a bit shaken, but ready!`);
    // move to encounter's action
  }
}
// instanceFVictoryCheck(currentEncounter.health)

const instanceFrVictoryCheck = res => {
  if (res <= 0) {
    //create fight victory here, including + player skills
    console.log(`Congratulations! You have become buddies with the ${currentEncounter.name}!`)
    player.charisma += currentEncounter.charisma;
    friends++;
  }
  else {
    console.log(`The enemy ${currentEncounter} looks a bit conflicted, but remains angry!`);
    // move to encounter's action
  }
}
// instanceFrVictoryCheck(currentEncounter.charisma)

const instanceFlVictoryCheck = end => {
  if (end <= 0) {
    //create fight victory here, including + player skills
    console.log(`Congratulations! You gallantly fled the enemy ${currentEncounter.name}!`)
    player.speed += currentEncounter.speed;
    escapes++;
  }
  else {
    console.log(`The enemy ${currentEncounter.name} looks a bit tired, but doggedly pursues you!`);
    // move to encounter's action
  }
}
// instanceFlVictoryCheck(currentEncounter.speed)

































// DOM function ends here!
// })
