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
      var validDirections = ["north", "south", "east", "west"];
      if (!validDirections.includes(direction)) {
        throw Error("Invalid Robot Bearing");
      } else {
        return this.bearing = direction;
      }
    }

    place() { return {x: this.coordinates[0], y: this.coordinates[1], bearing: this.bearing};}

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
      var listCopy = list.slice();
      var finalInstructions = [];

      var splitCopy = listCopy.split('');
      var finalInstructions = splitCopy.map(letter){
        if (letter === "R") {
          finalInstructions.push("turnRight");
        } else if (letter ==="L") {
          finalInstructions.push("turnLeft");
        } else if (letter === "A") {
          finalInstructions.push("advance");
        } else {
          return "Bad directions"
        }
      }
      return finalInstructions;
    }

    //var new_Array = arr.map(callback)
    evaluate(list){
      var instructions = list.slice();
      var instructions = instructions(instructions);

      for (var i = 0; i < instructions.length; i++) {
        if (instructions[i] === "turnRight") {
          this.turnRight();
        } else if (instructions[i] ==="turnLeft") {
          this.turnLeft();
        } else if (instructions[i] === "advance") {
          this.advance();
        } else {
          return "Bad directions"
        }
      }
    }

}
