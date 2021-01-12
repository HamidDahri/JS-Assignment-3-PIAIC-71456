var colorNames = ["blue", "purple", "white" , "magenda"];
document.write(colorNames + "<br>");

var NewcolorAtStart = prompt("Enter the color you want to add at the beginning");
colorNames.unshift(NewcolorAtStart);
document.write(colorNames + "<br>");

var newColorAtEnd = prompt("Enter the color you want to add at the end");
colorNames.push(newColorAtEnd);
document.write(colorNames + "<br>");

colorNames.unshift("black", "green");
document.write(colorNames + "<br>");

colorNames.shift();
document.write(colorNames + "<br>");

colorNames.pop();
document.write(colorNames + "<br>");

var addIndex = prompt("Enter the index you want to add new color");
var addColor = prompt("Enter the color name");

colorNames.splice(addIndex, 0, addColor);
document.write(colorNames + "<br>");

var deleteIndex = prompt("At which index you want to delete colors?");
var noOfIndex = prompt("How many colors you want to delete?");

colorNames.splice(deleteIndex, noOfIndex);
document.write(colorNames + "<br>");