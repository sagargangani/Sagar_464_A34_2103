function convertToUSD() {
  const cadInputValue = document.getElementById("cadInput").value.trim();
  const resultElement = document.getElementById("result");

  resultElement.textContent = ``;

  if (!isValidInput(cadInputValue)) {
    displayErrorMessage(
      resultElement,
      "Please enter a valid number for Canadian Dollars."
    );
    return;
  }

  const exchangeRateCADtoUSD = 0.75;
  const usdAmount = calculateConvertedAmount(
    cadInputValue,
    exchangeRateCADtoUSD
  );
  displayConvertedValue("usdInput", usdAmount);
}

function convertToCAD() {
  const usdInputValue = document.getElementById("usdInput").value.trim();
  const resultElement = document.getElementById("result");

  resultElement.textContent = ``;

  if (!isValidInput(usdInputValue)) {
    displayErrorMessage(
      resultElement,
      "Please enter a valid number for US Dollars."
    );
    return;
  }

  const exchangeRateUSDtoCAD = 1.33;
  const cadAmount = calculateConvertedAmount(
    usdInputValue,
    exchangeRateUSDtoCAD
  );
  displayConvertedValue("cadInput", cadAmount);
}

function isValidInput(input) {
  return !isNaN(input) && input !== "";
}

function calculateConvertedAmount(inputValue, exchangeRate) {
  return parseFloat(inputValue) * exchangeRate;
}

function displayConvertedValue(elementId, amount) {
  document.getElementById(elementId).value = amount.toFixed(3);
}

function displayErrorMessage(element, message) {
  element.textContent = message;
}
