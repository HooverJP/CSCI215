// Name: Joshua Hoover //
//  <changeMaker> // // Purpose: This program is supposed to calculate what change is due after a purchase
// // Certification of Authenticity: I certify that this program is entirely my own work.
// // Input: The inputs for this program are the cost of the goods and what the customer paid // Output: The output will be the change that is due and how to give that change back, in dollars and what coins

function calculateChange() {
    let cost = document.getElementById("cost").value;
    let paid = document.getElementById("paid").value;

    let costNum = parseFloat(cost);
    let paidNum = parseFloat(paid);

    if (isNaN(costNum) || isNaN(paidNum)) {
        document.getElementById("result").innerHTML = "<p>Error.</p>";
        return;
    }
}

if (paidNum < costNum) {
    document.getElementById("result").innerHTML = "<p> Error. </p>";
    return;
}

let change = paidNum - costNum;
let changeDecimal = change.toFixed(2);

let remainingChange = change * 100;
let dollars = Math.floor(remainingChange / 100);
remainingChange = remainingChange % 100;

let quarters = Math.floor(remainingChange / 25);
remainingChange = remainingChange % 25;

let dimes = Math.floor(remainingChange / 10);
remainingChange = remainingChange % 10;

let nickels = Math.floor(remainingChange / 5);
remainingChange = remainingChange % 5;

let pennies = Math.round(remainingChange);

let msg = "Change: $" + changeDecimal + "<br>";
msg += dollars + " dollar(s), ";
msg += quarters + " quarter(s), ";
msg += dimes + " dime(s), ";
msg += nickels + " nickel(s), ";
msg += pennies + " pennie(s), ";

document.getElementById("result").innerHTML = "<p>" + msg + "</p>";
