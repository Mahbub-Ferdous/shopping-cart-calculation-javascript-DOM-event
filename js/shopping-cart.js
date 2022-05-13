// inputField function:
function getInputFieldValue(quantityFieldId) {
  const quantityCount = document.getElementById(quantityFieldId);
  const currentQuantity = parseInt(quantityCount.value);
  return currentQuantity;
}

// quantity increase decrease function
function quantityIncreaseDecrease(quantityFieldId, isIncrese) {
  const quantityCount = document.getElementById(quantityFieldId);
  const currentQuantity = parseInt(quantityCount.value);
  if (isIncrese == true) {
    quantityCount.value = currentQuantity + 1;
  } else {
    quantityCount.value = currentQuantity - 1;
  }
}

// price increase decrease function:
function priceIncreaseDecrease(priceFieldId, isIncrese) {
  const priceCount = document.getElementById(priceFieldId);
  const currentPrice = parseInt(priceCount.innerText);
  if (isIncrese) {
    const currentQuantity = getInputFieldValue("quantityField-phone");
    priceCount.innerText = currentQuantity * 1219;
  } else {
    const currentQuantity = getInputFieldValue("quantityField-case");
    priceCount.innerText = currentQuantity * 59;
  }
}

// calculate total:
function calculateTotal(quantityFieldIdPhone, quantityFieldIdCase) {
  const phoneTotal = getInputFieldValue(quantityFieldIdPhone) * 1219;
  const caseTotal = getInputFieldValue(quantityFieldIdCase) * 59;
  const subTotal = phoneTotal + caseTotal;
  document.getElementById("subTotal").innerText = subTotal;
}

// add click handler with (+) sign to increase product quantity and show with calculation in phone item
document.getElementById("phone-plus").addEventListener("click", function () {
  const increaseSign = quantityIncreaseDecrease("quantityField-phone", true);
  const increasePrice = priceIncreaseDecrease("price-phone", true);
  // calculate total
  calculateTotal("quantityField-phone", "quantityField-case");
});

// click handler with (-)sign to decrease product quantity and show with calculation in phone item
document.getElementById("phone-minus").addEventListener("click", function () {
  const currentQuantity = getInputFieldValue("quantityField-phone");
  if (currentQuantity > 0) {
    const decreaseSign = quantityIncreaseDecrease("quantityField-phone", false);
  } else {
    alert("please increase your product quantity");
  }
  const decreasePrice = priceIncreaseDecrease("price-phone", true);
  // calculate total
  calculateTotal("quantityField-phone", "quantityField-case");
});

//click handler with (+)sign to increase product quantity and show with calculation in case item
document.getElementById("case-plus").addEventListener("click", function () {
  const increaseSign = quantityIncreaseDecrease("quantityField-case", true);
  const increasePrice = priceIncreaseDecrease("price-case", false);
  // calculate total
  calculateTotal("quantityField-phone", "quantityField-case");
});

// add click handler with (-) sign to increase product quantity and show with calculation in case item
document.getElementById("case-minus").addEventListener("click", () => {
  const currentQuantity = getInputFieldValue("quantityField-case");
  if (currentQuantity > 0) {
    const decreaseSign = quantityIncreaseDecrease("quantityField-case", false);
  } else {
    alert("please increase your product quantity");
  }
  const decreasePrice = priceIncreaseDecrease("price-case", false);
  // calculate total
  calculateTotal("quantityField-phone", "quantityField-case");
});
