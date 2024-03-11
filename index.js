// function createShape() {
//   var shape = document.getElementById("shape").value;
//   var color = document.getElementById("color").value;
//   var width = document.getElementById("width").value;
//   var height = document.getElementById("height").value;

//   var canvas = document.getElementById("canvas");
//   var shapeElement = document.createElement("div");
//   shapeElement.className = "shape";
//   shapeElement.style.backgroundColor = color;
//   shapeElement.style.width = width + "px";
//   shapeElement.style.height = height + "px";

//   if (shape === "square") {
//     shapeElement.style.borderRadius = "0";
//   } else if (shape === "circle") {
//     shapeElement.style.borderRadius = "50%";
//   }

//   canvas.appendChild(shapeElement);
// }
let input = 500;
let uzb = 15000;
result = 0;

function money(amount) {
  result = amount * uzb;

  return result;
}

money(input);
console.log(`Siz kiritgan ${input}$ o'zbek so'mida ${result} so'mni tashkil etadi`);
