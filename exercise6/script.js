const addButton = document.getElementById("addButton");
const subtractButton = document.getElementById("subtractButton");
const multiplyButton = document.getElementById("multiplyButton");
const divideButton = document.getElementById("divideButton");

async function calculate(firstNumber, secondNumber, operation) {
  const url = `http://localhost:3000/?a=${firstNumber}&b=${secondNumber}&operation=${operation}`;

  try {
    const response = await fetch(url);
    const result = await response.text();
    return result;
  } catch (error) {
    console.error("Error:", error);
    return error;
  }
}

async function handleOperationClick(event) {
  const firstNumberField = parseFloat(
    document.getElementById("firstNumberField").value
  );
  const secondNumberField = parseFloat(
    document.getElementById("secondNumberField").value
  );
  const operation = event.target.getAttribute("data-operation");
  const result = document.getElementById("resultField");

  if (isNaN(firstNumberField) || isNaN(secondNumberField)) {
    result.innerText = "Please enter valid numbers :)";
    return;
  }

  const resultValue = await calculate(
    firstNumberField,
    secondNumberField,
    operation
  );

  result.innerText = resultValue;
}

document.querySelectorAll("button[data-operation]").forEach(button => {
  button.addEventListener("click", handleOperationClick);
});
