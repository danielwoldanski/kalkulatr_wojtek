// Data
const data = {
  rupies: [
    200,   400,   600,   800,   1000,  1200,  1500,  2000,  2500,  3000,
    4000,  5000,  6000,  7000,  8000,  10000, 12000, 14000, 16000, 18000,
    20000, 22000, 24000, 26000, 28000, 30000, 32000, 34000, 36000, 38000,
    42000, 46000, 50000, 54000, 58000,
  ],
  lowOrb: [
    0,   0,   0,   1,   3,   5,   5,   5 ,  7,   7,
    10,  10,  10,  15,  15,  20,  20,  20,  30,  30,
    50,  50,  50,  70,  70,  100, 100, 100, 150, 150,
    200, 200, 200, 250, 250,
  ],
  midOrb: [
     0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
     1,  1,  1,  2,  2,  3,  3,  3,  4,  4,
     6,  6,  6,  8,  8, 10, 10, 10, 12, 12,
    15, 15, 15, 18, 18,
  ],
  highOrb: [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    1, 1, 1, 1, 1, 2, 2, 2, 3, 3,
    5, 5, 5, 7, 7,
  ],
};

// Constants
const maxLevel = 35;

// Elements
const altarOneRange = document.querySelector("#altar-one");
const altarTwoRange = document.querySelector("#altar-two");
const altarOneLevelSpan = document.querySelector(".altar-one-level");
const altarTwoLevelSpan = document.querySelector(".altar-two-level");
const valueRupies = document.querySelector(".value-rupies");
const valueLowOrb = document.querySelector(".value-low-orb");
const valueMidOrb = document.querySelector(".value-mid-orb");
const valueHighOrb = document.querySelector(".value-high-orb");

// Events
altarOneRange.addEventListener("input", () => calculate());
altarTwoRange.addEventListener("input", () => calculate());

// Functions
function calculate() {
  const levelOne = altarOneRange.value;
  const levelTwo = altarTwoRange.value;
  
  altarOneLevelSpan.textContent = levelOne;
  altarTwoLevelSpan.textContent = levelTwo;
  valueRupies.textContent  = parseInt(sum(data.rupies, levelOne, maxLevel)  + sum(data.rupies, levelTwo,  maxLevel)).toLocaleString("en-GB");
  valueLowOrb.textContent  = parseInt(sum(data.lowOrb, levelOne, maxLevel)  + sum(data.lowOrb, levelTwo,  maxLevel)).toLocaleString("en-GB");
  valueMidOrb.textContent  = parseInt(sum(data.midOrb, levelOne, maxLevel)  + sum(data.midOrb, levelTwo,  maxLevel)).toLocaleString("en-GB");
  valueHighOrb.textContent = parseInt(sum(data.highOrb, levelOne, maxLevel) + sum(data.highOrb, levelTwo, maxLevel)).toLocaleString("en-GB");
}

function sum(list, fromLevel, toLevel) {
  let i, total = 0;
  for (i=fromLevel; i<toLevel; i++) {
    total += list[i];
  }
  return total;
}

// Initial calculation
document.addEventListener("DOMContentLoaded", () => calculate());
