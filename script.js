window.addEventListener("DOMContentLoaded", (e) => {
  const counterValue = document.querySelector("#counter-value");

  const lowerBtn = document.querySelector("#lower-btn");
  const addBtn = document.querySelector("#add-btn");

  const getCurrentValue = () => {
    if (!JSON.parse(localStorage.getItem("currentValue"))) {
      localStorage.setItem("currentValue", JSON.stringify(0));
    }

    return JSON.parse(localStorage.getItem("currentValue"));
  };

  const storeCurrentValue = (value) => {
    localStorage.setItem("currentValue", JSON.stringify(value));
  };

  let currentValue = getCurrentValue();

  counterValue.innerText = currentValue;

  lowerBtn.addEventListener("click", (e) => {
    currentValue--;

    if (currentValue < 0) {
      alert("Minimum value reached");
      currentValue = 0;
    }

    storeCurrentValue(currentValue);

    counterValue.innerText = currentValue;
  });

  addBtn.addEventListener("click", (e) => {
    currentValue++;

    if (currentValue > 50) {
      alert("Maximum value reached");
      currentValue = 50;
    }

    storeCurrentValue(currentValue);

    counterValue.innerText = currentValue;
  });
});
