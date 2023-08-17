let displayValue = "";

function addToDisplay(value) {
   displayValue += value;
   updateDisplay();
}

function updateDisplay() {
   document.getElementById("display").value = displayValue;
}


function calculate() {
   try {
      displayValue = eval(displayValue);
      updateDisplay();
   } catch (error) {
      displayValue = "Erro";
      updateDisplay();
   }
}



window.onload = updateDisplay;

