//Inch to Feet Conversion
let inch = 42;
let feet = 12 * inch;
let res = 42 / 12;
console.log("42 inch = " + res + " feet");
//length and width in feet
let length = 60;
let width = 40;
console.log("length of rectangle : "+ length +" feet" + "\nwidth of rectangle :"+ width +" feet");
//Area of Rectangle in meter
let area = (length * 0.3048) * (width * 0.3048);
console.log("Area of rectangle is : "+ area + " in meter");
let numOfPlot = 25;
console.log("Number plots is : "+ numOfPlot);
let totalPlotArea = (area * 0.000247) * numOfPlot;
console.log("Total plots area is : "+ totalPlotArea + " acre");
