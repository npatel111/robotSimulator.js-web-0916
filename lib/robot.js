'use strict';
class Robot {

  // implement your solution here!
  constructor( bearing) {
    // this.x = x;
    // this.y = y;
    this.bearing = bearing;
    this.coordinates = [];
  }
    orient(direction) {
      const validDirections = ["north", "south", "east", "west"];
      if (!validDirections.includes(direction)) {
        throw Error("Invalid Robot Bearing");
      } else {
        return this.bearing = direction;
      }
    }

    place() {return Object.assign({}, {x: this.x, y: this.y, bearing: this.bearing})}

    turnRight() {
      switch(this.bearing) {
          case "west":
              this.bearing = "north"
              break;
          case "north":
              this.bearing = "east"
              break;
          case "east":
              this.bearing = "south"
              break;
          case "south":
              this.bearing = "west"
              break;
          default:
              return "Please enter a valid bearing"
      }
    }

    turnLeft() {
      switch(this.bearing) {
          case "west":
              this.bearing = "south"
              break;
          case "north":
              this.bearing = "west"
              break;
          case "east":
              this.bearing = "north"
              break;
          case "south":
              this.bearing = "east"
              break;
          default:
              return "Please enter a valid bearing"
      }
    }

    advance() {
      if (this.bearing === "north") {
        this.coordinates[1] += 1;
      }
      else if (this.bearing === "east") {
        this.coordinates[0] += 1;
      }
      else if (this.bearing === "south") {
        this.coordinates[1] -= 1;
      }
      else if (this.bearing === "west") {
        this.coordinates[0] -= 1;
      }
      else {return "invalid"}
    }

    at(x,y) { this.coordinates = [x, y];}

    instructions(list){
      let listCopy = list.slice();
      let finalInstructions = [];

      let splitCopy = listCopy.split('');
      for (var i = 0; i < splitCopy.length; i++) {
        if (splitCopy[i] === "R") {
          this.turnRight();
          finalInstructions.push("turnRight");
        } else if (splitCopy[i] ==="L") {
          this.turnLeft();
          finalInstructions.push("turnLeft");
        } else if (splitCopy[i] === "A") {
          this.advance();
          finalInstructions.push("advance");
        } else {
          return "Bad directions"
        }
      }
      return finalInstructions;
    }

    //var new_Array = arr.map(callback)
    evaluate(list){
      let listCopy = list.slice();
      let finalInstructions = [];

      let splitCopy = listCopy.split('');
      for (var i = 0; i < splitCopy.length; i++) {
        if (splitCopy[i] === "R") {
          this.turnRight();
          finalInstructions.push("turnRight");
        } else if (splitCopy[i] ==="L") {
          this.turnLeft();
          finalInstructions.push("turnLeft");
        } else if (splitCopy[i] === "A") {
          this.advance();
          finalInstructions.push("advance");
        } else {
          return "Bad directions"
        }
      }
      return finalInstructions;
    }

}
