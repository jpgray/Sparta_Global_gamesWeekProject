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
  this.arrIndex = encounterCount;
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
const playerR = new encounter("Bob", 10, 10, 10, 100, 0, 0, 0);
console.log(player);

const Slime = new monster("Slime", 1, 1, 1, 30, 20, 3, 10, "");
const SlimeR = new monster("", 0, 0, 0, 30, 20, 3, 0, "");
console.log(Slime);

const Rock = new monster("Rock", 0, 1000, 0, 200, 1000, 0, 1, "");
const RockR = new monster("", 0, 0, 0, 200, 1000, 0, 0, "");
console.log(Rock);

const GiantRat = new monster("Giant Rat", 3, 3, 3, 30, 5, 20, 5, "");
const GiantRatR = new monster("", 0, 0, 0, 30, 5, 20, 0, "");
console.log(GiantRat);

const TastyBanana = new monster("Tasty Banana", -100, 0, 0, 0.01, 100, 0, 2, "");
const TastyBananaR = new monster("", 0, 0, 0, 1, 100, 0, 0, "");
TastyBanana.fiWinMessage = "You destroy what most assuredly was a villainous opponent plotting evil in a fit of rage against it's insulting attempt of temptation.";
TastyBanana.frWinMessage = "You successfully negotiate the banana into your stomach. It is tasty."
console.log(TastyBanana);

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
  playerFight = player.strength * ((Math.random())/2 +0.5);
  console.log(playerFight);
  currentEncounter.health -= playerFight;
  console.log(currentEncounter.health)
  instanceFiVictoryCheck(currentEncounter.health);



  if (currentEncounter.name == "Tasty Banana") {
    console.log(TastyBanana.fiWinMessage)
    currentEncounter.health--;
    setEncounter();
  }
  deathCheck(player.health);
}
// currentEncounter.fight;

friend = () => {
  playerFriend = player.charisma * ((Math.random())/2 +0.5);
  console.log(playerFriend);
  currentEncounter.resilience -= playerFriend;
  console.log(currentEncounter.resilience)
  instanceFrVictoryCheck(currentEncounter.resilience);



  if (currentEncounter.name == "Tasty Banana") {
    console.log(TastyBanana.frWinMessage)
    currentEncounter.health--;
    setEncounter();
  }
  deathCheck(player.health);

}
// currentEncounter.fight;

flee = () => {
  playerFlee = player.speed * ((Math.random())/2 +0.5);
  console.log(playerFlee);
  currentEncounter.endurance -= playerFlee;
  console.log(currentEncounter.endurance)
  instanceFlVictoryCheck(currentEncounter.endurance);

  deathCheck(player.health);
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
    //create fight victory here
    console.log(`Congratulations! You killed the enemy ${currentEncounter.name}`)
    if (currentEncounter.name != "Tasty Banana") {player.strength += currentEncounter.strength};
    kills++;
    currentEncounter.health = encounterArray[currentEncounter.arrIndex+1].health;
    currentEncounter.resilience = encounterArray[currentEncounter.arrIndex+1].resilience;
    currentEncounter.endurance = encounterArray[currentEncounter.arrIndex+1].endurance;
    setEncounter();
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
    currentEncounter.health = encounterArray[currentEncounter.arrIndex+1].health;
    currentEncounter.resilience = encounterArray[currentEncounter.arrIndex+1].resilience;
    currentEncounter.endurance = encounterArray[currentEncounter.arrIndex+1].endurance;
    setEncounter();
  }
  else {
    console.log(`The enemy ${currentEncounter.name} looks a bit conflicted, but remains angry!`);
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
    currentEncounter.health = encounterArray[currentEncounter.arrIndex+1].health;
    currentEncounter.resilience = encounterArray[currentEncounter.arrIndex+1].resilience;
    currentEncounter.endurance = encounterArray[currentEncounter.arrIndex+1].endurance;
    setEncounter();
  }
  else {
    console.log(`The enemy ${currentEncounter.name} looks a bit tired, but doggedly pursues you!`);
    // move to encounter's action
  }
}
// instanceFlVictoryCheck(currentEncounter.speed)

































// DOM function ends here!
// })
