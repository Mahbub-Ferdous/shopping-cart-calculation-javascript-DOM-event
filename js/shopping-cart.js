// inputField function:
function getInputFieldValue() {
  const quantityCount = document.getElementById("quantityField-phone");
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
  const currentQuantity = getInputFieldValue();
  if (isIncrese == true) {
    priceCount.innerText = currentPrice * currentQuantity;
  } else {
    priceCount.innerText = currentPrice * currentQuantity;
  }
}

// add click handler with (+) sign to increase product quantity and show with calculation in phone item
document.getElementById("phone-plus").addEventListener("click", function () {
  const increaseSign = quantityIncreaseDecrease("quantityField-phone", true);
  const increasePrice = priceIncreaseDecrease("price-phone", true);
});

//// add click handler with (-) sign to decrease product quantity and show with calculation in phone item
document.getElementById("phone-minus").addEventListener("click", function () {
  const quantityCount = document.getElementById("quantityField-phone");
  const currentQuantity = quantityCount.value;
  if (currentQuantity > 0) {
    const decreaseSign = quantityIncreaseDecrease("quantityField-phone", false);
  } else {
    alert("please increase your product quantity");
  }
});

// add click handler with (+) sign to increase product quantity and show with calculation in case item
document.getElementById("case-plus").addEventListener("click", function () {
  const increaseSign = quantityIncreaseDecrease("quantityField-case", true);
});

// add click handler with (-) sign to increase product quantity and show with calculation in case item
document.getElementById("case-minus").addEventListener("click", () => {
  const quantityCount = document.getElementById("quantityField-case");
  const currentQuantity = quantityCount.value;
  if (currentQuantity > 0) {
    const decreaseSign = quantityIncreaseDecrease("quantityField-case", false);
  } else {
    alert("please increase your product quantity");
  }
});
