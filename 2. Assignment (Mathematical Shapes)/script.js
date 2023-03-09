// 2. Assignment (Mathematical Shapes):
// a. 

function diagonal() {
let side = 9;
return Math.sqrt(2)*side;
}
console.log("The diagonal of the square is " + diagonal())

// b.
function area() {
  const side1 = 5;
  const side2 = 6;
  const side3 = 7;

  const perimeter = (side1 + side2 + side3)/2;
  return Math.sqrt(perimeter*(perimeter-side1)*(perimeter-side2)*(perimeter-side2))

}
console.log("The area of the triangle is " + area())

// c.
function circle(){
  const pi = 3.14159265358979323846;
  let r = 4;
  const circumference = 2*pi*r;
  const surface = pi*(r*r);

  return {
    'The circumference is': circumference, 'The surface is': surface
  }
}
console.log(circle());

