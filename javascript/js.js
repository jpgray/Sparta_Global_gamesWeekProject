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

  }
}


PName = prompt("Please enter a name for your daring adventurer...") || "Bob";
if (PName == "Obi-Wan") {console.log("Hello there!")};
document.getElementById('gameTitle').innerHTML = PName + "'s adventure";

const player = new encounter(PName, (PName == "Arnie") ? 1000 : 10, (PName == "Obi-Wan") ? 1000 : 10, (PName == "Usain") ? 1000 : 10, (PName == "Jon Gray") ? 1000 : 100, 0, 0, 0);
const playerR = new encounter(PName, 10, 10, 10, 100, 0, 0, 0);
const playerNew = new encounter(PName, 10, 10, 10, 100, 0, 0, 0);
// const updateHP = (hp) => $('#lifePoints').html = hp;
// updateHP(player.health)
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

const TastyBanana = new monster("Tasty Banana", -100, 0, 0, 0.01, 100, 0, 1, "");
const TastyBananaR = new monster("", 0, 0, 0, 1, 100, 0, 0, "");
TastyBanana.fiWinMessage = "You destroy what most assuredly was a villainous opponent plotting evil in a fit of rage against it's insulting attempt of temptation.";
TastyBanana.friendMessage = "You successfully negotiate the banana into your stomach. It is tasty."
console.log(TastyBanana);

const Vampire = new monster("Vampire", 15, 8, 3, 50, 8, 20, 3, "");
const VampireR = new monster("", 0, 0, 0, 50, 8, 20, 0, "");
console.log(Vampire);

const Goblin = new monster("Goblin", 9, 18, 14, 35, 8, 20, 4, "");
const GoblinR = new monster("", 0, 0, 0, 35, 8, 20, 0, "");
console.log(Goblin);

const BBEG = new monster("BBEG", 25, 25, 25, 100, 100, 100, 0, "");
const BBEGR = new monster("", 0, 0, 0, 35, 8, 20, 0, "");
console.log(BBEG);

const accumulator = (a, b) => a + b;
const totalProb = probArray.reduce(accumulator,0);

let kills = 0;
let escapes = 0;
let friends = 0;
let totalVictories = () => kills + escapes + friends;
























//Setting encounter



probArray.push(0);
let probAccArray = [0];
for (var i = 1; i < probArray.length; i++) {
  probAccArray.push(probArray[i] + probAccArray[i-1])
}


let currentEncounter;
let setEncounter = () => {
  console.log(totalVictories())
  if (totalVictories() == 20) {
    currentEncounter = BBEG;
    console.log(currentEncounter);
    return BBEG}
  else if (totalVictories() == 21) {
    console.log(`Congratulations! ${player.name} has won! ${player.name} slew ${kills} foes, befriended ${friends} locals and left ${escapes} chumps in the dust. Would you like to play again?`)
    }
  else{
  let ranVal = Math.random() * totalProb;
  console.log(`${ranVal} out of ${totalProb} was rolled!`);
  for (var i = 1; i < probAccArray.length; i++) {
    if (probAccArray[i-1] <= ranVal && ranVal <= probAccArray[i]) {
      currentEncounter = encounterArray[i];
      console.log(`A ${currentEncounter.name} was encountered!`);
      if (totalVictories() == 0) {console.log("What would you like to do? (Fight/Friend/Flee)")};
      return encounterArray[i];
      }
    }

  }
}

const start = () => setEncounter();























// let FIwin;
// let FRwin;
// let FLwin;


// action effects

fight = () => {
  // FIwin = 0;
  playerFight = player.strength * ((Math.random())/2 +0.5);
  console.log("player fight" + playerFight);
  currentEncounter.health -= playerFight;
  console.log("enemy hp" + currentEncounter.health)
  let ehp = currentEncounter.health

  instanceFiVictoryCheck(currentEncounter.health);

  if (ehp > 0) {
    console.log(currentEncounter.fightMessage);
    enemyFight = currentEncounter.strength * ((Math.random())/2 +0.5);
    console.log("enemy fight" + enemyFight);
    player.health -= enemyFight;
    console.log("player hp" + player.health);

    if (currentEncounter.name == "Tasty Banana") {
      console.log(TastyBanana.fiWinMessage);
      currentEncounter.health--;
      setEncounter();
    }}
  deathCheck(player.health);
  if (currentEncounter != "") {
    console.log("What would you like to do? (Fight/Friend/Flee)")
    // health bar switch statement here
  };

}
// currentEncounter.fight;

friend = () => {
  // FRwin = 0;
  playerFriend = player.charisma * ((Math.random())/2 +0.5);
  console.log(playerFriend);
  currentEncounter.resilience -= playerFriend;
  console.log(currentEncounter.resilience)
  let res = currentEncounter.resilience

  instanceFrVictoryCheck(currentEncounter.resilience);

  if (res > 0) {
    console.log(currentEncounter.friendMessage);
    enemyFight = currentEncounter.strength * ((Math.random())/2 +0.5);
    console.log("enemy fight" + enemyFight);
    player.health -= enemyFight;
    console.log("player hp" + player.health);

  if (currentEncounter.name == "Tasty Banana") {
    currentEncounter.health--;
    setEncounter();
  }}
  deathCheck(player.health);
  console.log("What would you like to do? (Fight/Friend/Flee)");

}
// currentEncounter.fight;

flee = () => {
  // FLwin = 0;
  playerFlee = player.speed * ((Math.random())/2 +0.5);
  console.log(playerFlee);
  currentEncounter.endurance -= playerFlee;
  console.log(currentEncounter.endurance)
  let end = currentEncounter.endurance;

  instanceFlVictoryCheck(currentEncounter.endurance);

  if (end > 0) {
    console.log(currentEncounter.fleeMessage);
    enemyFight = currentEncounter.strength * ((Math.random())/2 +0.5);
    console.log("enemy fight" + enemyFight);
    player.health -= enemyFight;
    console.log("player hp" + player.health);

  if (currentEncounter.name == "Tasty Banana") {
    console.log(TastyBanana.frWinMessage)
    currentEncounter.health--;
    setEncounter();
  }}
  deathCheck(player.health);
  console.log("What would you like to do? (Fight/Friend/Flee)");

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
    if (currentEncounter.name != "Tasty Banana") {player.strength += 0.5 * currentEncounter.strength};
    kills++;
    currentEncounter.health = encounterArray[currentEncounter.arrIndex+1].health;
    currentEncounter.resilience = encounterArray[currentEncounter.arrIndex+1].resilience;
    currentEncounter.endurance = encounterArray[currentEncounter.arrIndex+1].endurance;
    setEncounter();
    FIwin = 1;
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
    player.charisma += 0.5 * currentEncounter.charisma;
    friends++;
    currentEncounter.health = encounterArray[currentEncounter.arrIndex+1].health;
    currentEncounter.resilience = encounterArray[currentEncounter.arrIndex+1].resilience;
    currentEncounter.endurance = encounterArray[currentEncounter.arrIndex+1].endurance;
    setEncounter();
    FRwin = 1;
  }
  else {
    console.log(`The enemy ${currentEncounter.name} looks a bit conflicted, but remains angry!`);
    // moves to encounter's action
  }
}
// instanceFrVictoryCheck(currentEncounter.charisma)

const instanceFlVictoryCheck = end => {
  if (end <= 0) {
    //create fight victory here, including + player skills
    console.log(`Congratulations! You gallantly fled the enemy ${currentEncounter.name}!`)
    player.speed += 0.5 * currentEncounter.speed;
    escapes++;
    currentEncounter.health = encounterArray[currentEncounter.arrIndex+1].health;
    currentEncounter.resilience = encounterArray[currentEncounter.arrIndex+1].resilience;
    currentEncounter.endurance = encounterArray[currentEncounter.arrIndex+1].endurance;
    setEncounter();
    FLwin = 1;
  }
  else {
    console.log(`The enemy ${currentEncounter.name} looks a bit tired, but doggedly pursues you!`);
    // move to encounter's action
  }
}
// instanceFlVictoryCheck(currentEncounter.speed)

































// DOM function ends here!
// })
