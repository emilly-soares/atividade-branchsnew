let displayValue = "";

function addToDisplay(value) {
   displayValue += value;
   updateDisplay();
}

function updateDisplay() {
   document.getElementById("displuy").value = null;
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
