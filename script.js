// ============================================
//  Unit 8.7 – Forms & Event Listeners
// ============================================
//  Complete each section below by following
//  the STEP comments.
//
//  IMPORTANT: Use addEventListener() to wire your
//  buttons — do NOT add onclick in the HTML.
// ============================================

// ============================================
//  WARM-UP: Shout It!
// ============================================
// When the user types text and clicks "Shout",
// display the text in ALL CAPS with "!" at the end.

// STEP 1: Get the "Shout" button by its ID ("btnShout")
//         using document.getElementById()
const btnShout = document.getElementById("btnShout");

// STEP 2: Add a click event listener to the button.
//         Inside the listener function:
//         a) Get the text from the input with ID "shoutInput"
//            using .value
//         b) Convert the text to uppercase using .toUpperCase()
//         c) Add "!" to the end
//         d) Display the result in the element with ID "outShout"
//            using .innerHTML
//
//         Example: "hello" → "HELLO!"
btnShout.addEventListener("click", function() {
  const userInput = document.getElementById("shoutInput").value;
  const shoutedText = userInput.toUpperCase() + "!";
  document.getElementById("outShout").innerHTML = shoutedText;
});


// ============================================
//  MAIN: Pizza Builder
// ============================================
// Calculate the total price of a pizza based on:
//   - Size (radio buttons): Small $7.50, Medium $10.00,
//     Large $12.50, XL $15.00
//   - Toppings (checkboxes): $0.50 each
//   - Service (dropdown): Dine In $0, Take Out $1.50,
//     Delivery $3.00

// STEP 3: Get the "Calculate Total" button by ID ("btnCalc")
//         Add a click event listener.
//         Inside the listener:
const btnCalc = document.getElementById("btnCalc");

btnCalc.addEventListener("click", function() {
  
  // a) Get the selected size price
  const sizeRadios = document.getElementsByName("rg");
  let sizePrice = 0;
  
  for (let i = 0; i < sizeRadios.length; i++) {
    if (sizeRadios[i].checked) {
      sizePrice = parseFloat(sizeRadios[i].value);
      break;
    }
  }

  // b) Count checked toppings
  const toppingCheckboxes = document.getElementsByName("cb");
  let toppingCount = 0;
  
  for (let i = 0; i < toppingCheckboxes.length; i++) {
    if (toppingCheckboxes[i].checked) {
      toppingCount++;
    }
  }
  const toppingsPrice = toppingCount * 0.50;
  
  // c) Get the service fee
  const serviceType = document.getElementById("serviceSelect").value;
  let serviceFee = 0;
  
  if (serviceType === "dinein") {
    serviceFee = 0;
  } else if (serviceType === "takeout") {
    serviceFee = 1.50;
  } else if (serviceType === "delivery") {
    serviceFee = 3.00;
  }

  // d) Calculate total: size + toppings + service fee
  const totalPrice = sizePrice + toppingsPrice + serviceFee;
  document.getElementById("outTotal").innerHTML = "$" + totalPrice.toFixed(2);

  // e) Get the customer name from the input with ID "myInput"
  const customerName = document.getElementById("myInput").value;

  // f) Display the result in the element with ID "myPara"
  let displayName = customerName;
  if (customerName === "") {
    displayName = "Customer";
  }
  
  document.getElementById("myPara").innerHTML = displayName + ", your total is $" + totalPrice.toFixed(2);

});


// STEP 4: Get the "Clear" button by ID ("clearBtn")
const clearBtn = document.getElementById("clearBtn");

clearBtn.addEventListener("click", function() {
  document.getElementById("myInput").value = "";
  document.getElementById("r3").checked = true;
  
  const toppingCheckboxes = document.getElementsByName("cb");
  for (let i = 0; i < toppingCheckboxes.length; i++) {
    toppingCheckboxes[i].checked = false;
  }
  
  document.getElementById("serviceSelect").value = "dinein";
  document.getElementById("myPara").innerHTML = "";
  document.getElementById("outTotal").innerHTML = ""; // Optional: clear out the total display too!
});