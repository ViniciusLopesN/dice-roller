const inputForm = document.getElementById('inputNumber');
const button = document.getElementById('submitBtn');
const includeText = document.getElementById('include-text');
const diceDisplay = document.getElementById('dice-display');
const diceValues = [];


function rollDice(instances) {
  for (let i = 0; i < instances; i++) {
   let diceRoll = Math.floor(Math.random() * 6) + 1;
   diceValues.push(diceRoll);
   includeText.textContent = diceValues;
  const diceImg = document.createElement('img');
   diceImg.src = `./images/${diceRoll}.png`;
   diceDisplay.appendChild(diceImg);
  }
}

button.addEventListener("click", () => {
  diceValues.length = 0;
  console.log(diceValues.length);
  diceDisplay.innerHTML = '';
  let numberOfDice = inputForm.value;
  if (numberOfDice > 100) {
   diceDisplay.textContent = 'Too many dice, please choose 100 or less';
   includeText.textContent = diceValues;
  }
  else{
  rollDice(numberOfDice);
  includeText.textContent = diceValues;
  }
})
