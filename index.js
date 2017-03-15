/*This function should accept an array of dwarf names, for instance:
["Doc", "Dopey", "Bashful", "Grumpy"]
It should then return a string with the numbered dwarves. The string should look
like this:
"1. Doc 2. Dopey 3. Bashful 4. Grumpy"*/

function dwarfRollCall(dwarfArray) {
  var dwarfNames = []; //creating a var [type array] to store mutated elements of for loop.
    for (let i = 0; i < dwarfArray.length; i++) { //setting counter to 0, loops over it the number/length of entire array; counter increments by 1 each time.
      dwarfNames.push(`${i+1}. ${dwarfArray[i]} `); //for each element in array, add number before item, add space after item.
    }
  return dwarfNames.join('');//joins all elements of an array into a string; ('') "smushes" together but spacing in interpolation separates.
}

/*This function should accept an array of planeteer calls, like this:
planeteerCalls = ["earth", "wind", "fire", "water", "heart"]
It should then convert each element to uppercase and add an exclamation point at
the end. The return value of this method should be an array, in this example:
summonCaptainPlanet(planeteerCalls)
#=> ["EARTH!", "WIND!", "FIRE!", "WATER!", "HEART!"]*/

function summonCaptainPlanet(arrayCalls){
  var planeteerCalls = [];
    for (let i = 0; i < arrayCalls.length; i++) {
      planeteerCalls.push(`${arrayCalls[i].toUpperCase()}!`);
    }
  return planeteerCalls;
}


/*The longPlaneteerCalls method should accept an array of calls. The function
should tell us if any of the calls are longer than four characters. Notice the
return value of this method is either false or true, depending on the
array it was given as an argument.*/

function longPlaneteerCalls(calls) {
  for (let i = 0; i < calls.length; i++) {
    if (calls[i].length > 4){//i accesses individual elements in words array
      return true;//Here, the function ends as soon as the condition is true.
    }//In the solution code below, it has to run through the entire before returning true.
  }//This version is more efficient/less looping.
  return false;
}

/*ALTERNATIVE CODE:
function longPlaneteerCalls(words) {
	var longWords = false;//set var default to false so "> 4" is exception that changes default.
  for (var i = 0; i < words.length; i++) {
    if (words[i].length > 4){
      longWords = true;//changes default.
    }
  };
  return longWords;
}*/


/*The "findTheCheese" function should accept an array of strings. It should then
look through these strings and return the first string the is a type of cheese.
The types of cheese that appear are cheddar, gouda, and camembert.
If, sadly, a list of ingredients does not include cheese, return "no cheese!":
You can assume that all strings will be lower-case.*/

function findTheCheese (snacks) {
  var cheese = ["cheddar", "gouda", "camembert"];
  for (let i = 0; i < snacks.length; i++) {
    if (cheese.indexOf(snacks[i]) !== -1 ){//if the element of snacks exists in the array cheese; if it equals anything other than -1, it must be there.
      return snacks[i];//if it is there (where .indexOf([i]) 1== -1 is like multipling two negatives to get a positive), return matching snack element.
    }
  }
  return "no cheese!";
}


/*ALTERNATIVE CODE:
function findTheCheese (snacks) {
	var cheeses = ["cheddar", "gouda", "camembert"];
	for (var i = 0; i < snacks.length; i++) {
		for (var j = 0; j < cheeses.length; j++) {
			if (cheeses[j] === snacks[i]) {
				return snacks[i];
			}
		}
	}
	return "no cheese!";
}*/
