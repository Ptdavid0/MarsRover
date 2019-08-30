// Rover Object Goes Here
// ======================
let rover1 = {
  name: "LunarRover",
  direction: "N",
  x: 0,
  y: 0,
  travelLog: [{ x: 0, y: 0 }]
};
let rover2 = {
  name: "MarsRover",
  direction: "N",
  x: 9,
  y: 9,
  travelLog: [{ x: 9, y: 9 }]
};

// ======================
console.log(`Commands:
 l or L --> Turn Left
 r or R --> Turn Right
 f or F --> Go Forward
 b or B --> Go Backward
 d or D --> Rover Direction`);

let board = [
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, "x", null, null, null, null, null],
  [null, "x", null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, "x", null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, "x", null, null, null, null, "x", null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, "x", null, null, "x", null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null]
];

function turn(rover, command) {
  for (let i = 0; i < command.length; i++) {
    let comand = command[i];
    //verificar o codigo errado antes de rodar
    switch (comand) {
      case "l" || "L":
        console.log(`(${i})----------------------------`);
        turnLeft(rover);
        break;
      case "r" || "R":
        console.log(`(${i})----------------------------`);
        turnRight(rover);
        break;
      case "f" || "F":
        console.log(`(${i})----------------------------`);
        moveForward(rover);
        break;
      case "b" || "B":
        console.log(`(${i})----------------------------`);
        moveBackwords(rover);
        break;
      case "d" || "D":
        console.log(`(${i})----------------------------`);
        console.log(`The rover direction = ${rover.direction}`);
        break;
      case "c" || "C":
        console.log(`(${i})----------------------------`);
        console.log(`You have just changed for another Rover`);
        let counts = command.split("c").length;
        let lastCommand = command.split("c")[counts - 1];
        if (rover.name === "LunarRover") {
          turn(rover2, lastCommand);
          return;
        } else if (rover.name === "MarsRover") {
          turn(rover1, lastCommand);
          return;
        }
        break;

      default:
        console.log(`(${i})----------------------------`);
        console.log(`Wrong command = ${comand}`);
    }
  }
}
// Function responsavel por rotacionar o Rover para a direita quando requisitado
function turnRight(rover) {
  if (rover.direction === "N") {
    rover.direction = "E";
    console.log("Rover direction : East");
  } else if (rover.direction === "E") {
    rover.direction = "S";
    console.log("Rover direction : South");
  } else if (rover.direction === "S") {
    rover.direction = "W";
    console.log("Rover direction : West");
  } else {
    rover.direction = "N";
    console.log("Rover direction : North");
  }
  console.log("turnRight was called!");
}
// Function responsavel por rotacionar o Rover para a esquerda quando requisitado
function turnLeft(rover) {
  if (rover.direction === "N") {
    rover.direction = "W";
    console.log("Rover direction : West");
  } else if (rover.direction === "W") {
    rover.direction = "S";
    console.log("Rover direction : South");
  } else if (rover.direction === "S") {
    rover.direction = "E";
    console.log("Rover direction : East");
  } else {
    rover.direction = "N";
    console.log("Rover direction : North");
  }
  console.log("turnLeft was called!");
}
// Function responsavel por mover o Rover para frente quando requisitado
function moveForward(rover) {
  if (rover.direction === "N" && rover.y !== 0) {
    if (board[rover.y - 1][rover.x] === "x") {
      return console.log("Warning!!! Obstacle ahead, change your direction");
    } else {
      rover.y--;
      console.log(`The rover position is x=${rover.x}, y=${rover.y}`);
    }
  } else if (rover.direction === "W" && rover.x !== 0) {
    if (board[rover.y][rover.x - 1] === "x") {
      return console.log("Warning!!! Obstacle ahead, change your direction");
    } else {
      rover.x--;
      console.log(`The rover position is x=${rover.x}, y=${rover.y}`);
    }
  } else if (rover.direction === "S" && rover.y !== 9) {
    if (board[rover.y + 1][rover.x] === "x") {
      return console.log("Warning!!! Obstacle ahead, change your direction");
    } else {
      rover.y++;
      console.log(`The rover position is x=${rover.x}, y=${rover.y}`);
    }
  } else if (rover.direction === "E" && rover.x !== 9) {
    if (board[rover.y][rover.x + 1] === "x") {
      return console.log("Warning!!! Obstacle ahead, change your direction");
    } else {
      rover.x++;
      console.log(`The rover position is x=${rover.x}, y=${rover.y}`);
    }
  } else {
    console.log("The rover can`t go this way");
  }
  console.log("moveForward was called");

  let newPosition = {
    x: rover.x,
    y: rover.y
  };
  rover.travelLog.push(newPosition);
  console.log(rover.travelLog);
}
// Function responsavel por mover o Rover para tras quando requisitado
function moveBackwords(rover) {
  if (rover.direction === "N" && rover.y !== 9) {
    if (board[rover.y + 1][rover.x] === "x") {
      return console.log("Warning!!! Obstacle ahead, change your direction");
    } else {
      rover.y++;
      console.log(`The rover position is x=${rover.x}, y=${rover.y}`);
    }
  } else if (rover.direction === "W" && rover.x !== 9) {
    if (board[rover.y][rover.x + 1] === "x") {
      return console.log("Warning!!! Obstacle ahead, change your direction");
    } else {
      rover.x++;
      console.log(`The rover position is x=${rover.x}, y=${rover.y}`);
    }
  } else if (rover.direction === "S" && rover.y !== 0) {
    if (board[rover.y - 1][rover.x] === "x") {
      return console.log("Warning!!! Obstacle ahead, change your direction");
    } else {
      rover.y--;
      console.log(`The rover position is x=${rover.x}, y=${rover.y}`);
    }
  } else if (rover.direction === "E" && rover.x !== 0) {
    if (board[rover.y][rover.x - 1] === "x") {
      return console.log("Warning!!! Obstacle ahead, change your direction");
    } else {
      rover.x--;
      console.log(`The rover position is x=${rover.x}, y=${rover.y}`);
    }
  } else {
    console.log("The rover can`t go this way");
  }
  console.log("moveForward was called");

  let newPosition = {
    x: rover.x,
    y: rover.y
  };
  rover.travelLog.push(newPosition);
  console.log(rover.travelLog);
}

turn(rover1, "rcff");
