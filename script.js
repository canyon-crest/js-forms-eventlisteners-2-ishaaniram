
// ============================================
// Unit 8.7 – Forms & Event Listeners
// ============================================

// STEP 1 & 2: Shout It!
const btnShout = document.getElementById("btnShout");

btnShout.addEventListener("click", function() {
    const shoutText = document.getElementById("shoutInput").value;
    document.getElementById("outShout").innerHTML = shoutText.toUpperCase() + "!";
});


// STEP 3: Calculate Total
const btnCalc = document.getElementById("btnCalc");

btnCalc.addEventListener("click", function() {

    // a) Get selected size price
    const sizes = document.getElementsByName("rg");
    let sizePrice = 0;

    for (let i = 0; i < sizes.length; i++) {
        if (sizes[i].checked) {
            sizePrice = parseFloat(sizes[i].value);
            break;
        }
    }

    // b) Count checked toppings
    const toppings = document.getElementsByName("cb");
    let toppingCount = 0;

    for (let i = 0; i < toppings.length; i++) {
        if (toppings[i].checked) {
            toppingCount++;
        }
    }

    const toppingPrice = toppingCount * 0.50;

    // c) Get service fee
    const service = document.getElementById("serviceSelect").value;
    let serviceFee = 0;

    if (service === "dinein") {
        serviceFee = 0;
    } else if (service === "takeout") {
        serviceFee = 1.50;
    } else if (service === "delivery") {
        serviceFee = 3.00;
    }

    // d) Calculate total
    const total = sizePrice + toppingPrice + serviceFee;

    // e) Get customer name
    let name = document.getElementById("myInput").value.trim();

    if (name === "") {
        name = "Customer";
    }

    // f) Display result
    document.getElementById("myPara").innerHTML =
        name + ", your total is $" + total.toFixed(2);
});


// STEP 4: Clear
const clearBtn = document.getElementById("clearBtn");

clearBtn.addEventListener("click", function() {

    // a) Clear name
    document.getElementById("myInput").value = "";

    // b) Select Large
    document.getElementById("r3").checked = true;

    // c) Uncheck all toppings
    const toppings = document.getElementsByName("cb");

    for (let i = 0; i < toppings.length; i++) {
        toppings[i].checked = false;
    }

    // d) Reset service
    document.getElementById("serviceSelect").value = "dinein";

    // e) Clear output
    document.getElementById("myPara").innerHTML = "";
});
