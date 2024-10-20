const myobject = {
    property1 : "value",
    property2 : 77,
    "obnoxious property" : () => {
        console.log("ayo chill")
    }
}



//there are two types of object retrieval procedure


//dot notation
myobject.property1;

//bracket notation 
myobject["obnoxious property"];

//even though dot notation is clearer but sometimes we
//must need to use bracket notation because string can't be used
//with bracket notation

const v = "property";

//variable can be used directly with bracket notation
myobject[v]; //this is valid


//creating a basic object
const player1 = {
    name: "Tushar",
    age : 21
}

const player2 = {
    name: "Koushik",
    age: 18
}

//takes the player as param and then constructs it as a object reference
function printname(player) {
    console.log(player.name)
}

printname(player1)

//I just realised I could have made the whole object at once

const players = {
    player1: {
        name: "Tushar",
        age: 21
    },
    player2: {
        name: "koushik",
        age: 18
    }
}

console.log (players.player1.name)

//or I can do this
//I could use the param to make a dot notation because I was passing the full object
//but in this case I am passing string
function print1(playerkey) {
    console.log(players[playerkey].name)
}

// Still I need to take a deeper look into it

print1("player1")

console.log("New notes")
//new codes


// this is called object constructor or something like this I guess
function Player (name, marker) {
    this.name = name;
    this.marker = marker;
}

// then it can be called by using the new keyword
const player = new Player('steve', 'x');
console.log(player.name)

console.log("..........................")
//exercise

function Book (title, author, nop, read ) {
    this.title = title;
    this.author = author;
    this.nop = nop;
    this.read = read;
    this.info = () => {
        return (
            `title = ${this.title} \n
            author = ${this.author}\n
            number of pages = ${this.nop}\n
            read = ${this.read}`
        )
        
    }
}



const bestBook = new Book ("the best of ruskin bond", "ruskin bond", "400", "partially")

console.log(bestBook.info());

//

console.log(Object.getPrototypeOf(Player.prototype) === Object.prototype);

//test