function openTab(evt, tabName) {
  var i, tabcontent, tablinks;

  // Hide all tab content
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Remove 'active' class from all tab buttons
  tablinks = document.getElementsByClassName("tab");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the specific tab content
  document.getElementById(tabName).style.display = "block";

  // Add 'active' class to the clicked tab button
  evt.currentTarget.className += " active";
}

/************************************************** */

// Get the number input element
const numberInput = document.getElementById("numberInput");
const check1 = document.getElementById("checkbox1");
const check2 = document.getElementById("checkbox2");

// Get the total display elements
const total1Display = document.querySelector(".total1");
const total2Display = document.querySelector(".total2");
const total3Display = document.querySelector(".total3");
const totalDisplay = document.querySelector(".total-total");

function calculateTotals() {
  let inputValue = parseFloat(numberInput.value);
  if (isNaN(inputValue)) {
    inputValue = 0;
  }

  console.log("Function is running", inputValue);

  let total1,
    total2,
    total3 = 0;
  let tier = 1;

  // Calculate the cost of the scan with no add-ons based on the square footage.
  if (inputValue >= 0 && inputValue <= 5000) {
    total1 = inputValue * 0.09;
    tier = 1;
  } else if (inputValue > 5000 && inputValue <= 10000) {
    total1 = inputValue * 0.08;
    tier = 2;
  } else if (inputValue > 10000) {
    total1 = inputValue * 0.075;
    tier = 3;
  }

  // Display the total for total1
  if (total1 < 419.99) {
    total1 = 419.99;
  }

  total1Display.textContent = "$ " + total1.toFixed(2);

  if (check1.checked) {
    if (inputValue === 0 || inputValue < 5000) {
      total2 = 49.99;
      total2Display.textContent = `$ ${total2.toFixed(2)}`;
    } else if (tier === 1 || tier === 2) {
      total2 = inputValue * 0.035;
      total2Display.textContent = `$ ${total2.toFixed(2)}`;
    } else if (tier === 3) {
      total2 = inputValue * 0.032;
      total2Display.textContent = `$ ${total2.toFixed(2)}`;
    }
  } else {
    total2 = 0;
    total2Display.textContent = `$ ${total2.toFixed(2)}`;
  }
  if (check2.checked) {
    if (inputValue === 0 || inputValue < 5000) {
      total3 = 49.99;
      total3Display.textContent = `$ ${total3.toFixed(2)}`;
    } else if (tier === 1 || tier === 2) {
      total3 = inputValue * 0.035;
      total3Display.textContent = `$ ${total3.toFixed(2)}`;
    } else if (tier === 3) {
      total3 = inputValue * 0.032;
      total3Display.textContent = `$ ${total3.toFixed(2)}`;
    }
  } else {
    total3 = 0;
    total3Display.textContent = `$ ${total3.toFixed(2)}`;
  }

  totalDisplay.textContent = `$ ${(total1 + total2 + total3).toFixed(2)}`;
}

numberInput.addEventListener("input", calculateTotals);
check1.addEventListener("change", calculateTotals);
check2.addEventListener("change", calculateTotals);
