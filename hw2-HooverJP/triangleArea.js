// Name: Joshua Hoover //
//  <triangleArea> // // Purpose: This program takes in the values of three sides of a triangle and calculates the area
// // Certification of Authenticity:  I certify that this program is entirely my own work.
// // Input: The inputs will be the values for the three sides of the triangle // Output: The program will display what the area is of that triangle

function calculateArea() {
    let sideA = parseFloat(document.getElementById("sideA").value);
    let sideB = parseFloat(document.getElementById("sideB").value);
    let sideC = parseFloat(document.getElementById("sideC").value);


    if (isNaN(sideA) || isNaN(sideB) || isNaN(sideC)) {
        document.getElementById("result").innerHTML = "<p>Error</p>";
        return;
    }


}

let p = (sideA + sideB + sideC) / 2;

let area = Math.sqrt(p * (p - sideA) * (p - sideB) * (p * sideC))

document.getElementById("result").innerHTML = "<p>The area of the triangle is: " + area + "</p>";