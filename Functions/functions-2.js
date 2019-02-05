//circle object with a getter function "area"

const circle = {
  radius: 2,
  get area() {
    return this.radius * this.radius * Math.PI
  }
};

console.log(circle.area);