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
document.getElementById("btnShout").addEventListener("click", function() {
   
    let inputText = document.getElementById("shoutInput").value;
    
    let shoutResult = inputText.toUpperCase() + "!";
    
    document.getElementById("outShout").innerHTML = shoutResult;
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

//   a) Get the selected size price:
//      Use document.getElementsByName("rg") to get all
//      size radio buttons. Loop through them to find the
//      one that is .checked, and read its .value.
//      Convert to a number with parseFloat().
document.getElementById("btnCalc").addEventListener("click", function() {
let sizePrice = 0;
    const sizeRadios = document.getElementsByName("rg");
    for (let i = 0; i < sizeRadios.length; i++) {
        if (sizeRadios[i].checked) {
            sizePrice = parseFloat(sizeRadios[i].value);
            break;
        }
    });

//   b) Count checked toppings:
//      Use document.getElementsByName("cb") to get all
//      topping checkboxes. Loop through and count how
//      many are .checked. Multiply count by 0.50.
let toppingCount = 0;
    const toppings = document.getElementsByName("cb");
    for (let i = 0; i < toppings.length; i++) {
        if (toppings[i].checked) {
            toppingCount++;
        }
    }
    let toppingsTotal = toppingCount * 0.50;

//   c) Get the service fee:
//      Use document.getElementById("serviceSelect").value
//      to get the selected option value ("dinein", "takeout",
//      or "delivery").
//      Use if/else if/else to set the fee:
//        "dinein"   → 0
//        "takeout"  → 1.50
//        "delivery" → 3.00
let serviceValue = document.getElementById("serviceSelect").value;
    let serviceFee = 0;
    
    if (serviceValue === "dinein") {
        serviceFee = 0;
    } else if (serviceValue === "takeout") {
        serviceFee = 1.50;
    } else if (serviceValue === "delivery") {
        serviceFee = 3.00;
    }

//   d) Calculate total: size + toppings + service fee
let total = sizePrice + toppingsTotal + serviceFee;

//   e) Get the customer name from the input with ID "myInput"
let customerName = document.getElementById("myInput").value.trim();
    if (customerName === "") {
        customerName = "Customer";
    }

//   f) Display the result in the element with ID "myPara":
//      "[name], your total is $[total]"
//      Use .toFixed(2) to format the total.
//      Example: "Alice, your total is $13.50"
//      If name is empty, use "Customer" as the default.
document.getElementById("myPara").textContent = customerName + ", your total is $" + total.toFixed(2);
});


// STEP 4: Get the "Clear" button by ID ("clearBtn")
//         Add a click event listener.
//         Inside the listener:
//         a) Set the name input value to ""
//         b) Set the Large radio (id "r3") to checked = true
//         c) Uncheck ALL topping checkboxes (loop through them)
//         d) Set the service dropdown value to "dinein"
//         e) Set the output paragraph innerHTML to ""
document.getElementById("clearBtn").addEventListener("click", function() {

    document.getElementById("myInput").value = "";

    document.getElementById("r3").checked = true;

    const toppings = document.getElementsByName("cb");
    for (let i = 0; i < toppings.length; i++) {
        toppings[i].checked = false;
    }

    document.getElementById("serviceSelect").value = "dinein";

    document.getElementById("myPara").innerHTML = "";
});
