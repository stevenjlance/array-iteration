//1. Make a list called favoriteFoods and store at least six of your favorite foods in the list
var favoriteFoods = ["Pizza", "Macaroni", "Steak", "Apple Pie", "Chicken", "Cookies", "Oxtails", "Rice"];

//2. Using a for loop, print out each of your favorite foods in the console saying "My favorite food is ________"
for(var i = 0; i < favoriteFoods.length; i++){
  console.log(favoriteFoods[i])

}


// 3. Let's expand the dialogue either by adding the the for loop above or writing a new for loop - For each food in the list, print out three lines.
//     "Have you ever tried ___?"
//     "I really recommend that you try _____."
//     "_____ is delicious."

for(var i = 0; i < favoriteFoods.length; i++){
	console.log(`Have you tried ${favoriteFoods[i]}`)
	console.log(`I really like ${favoriteFoods[i]}`)
	console.log(`${favoriteFoods[i]} is delicious`)
}




//  4. Now for each food in that list, let's be specific about how MUCH you likes them each. Think about how you can use a for loop to modify the array item AND the number that is printing out!
//  For example, print out "Steven's #1 favorite food is Sushi" and then "Steven's #2 favorite food is Pizza" and so on until you've made an ordered list.
counter = 1

for(var i = 0; i < favoriteFoods.length; i++){
	console.log(`${favoriteFoods[i]} is my #${counter} favorite food`)
	counter++
}





// # 5. Below is a massive list of numbers. Iterate over the list and print out only the numbers less than 100. Put all these in a lessThanOneHundred list.
var lessThanOneHundred = [];
var manyNumbers = [109, 141, 44, 51, 133, 366, 339, 248, 226, 321, 97, 195, 245, 252, 238, 1, 366, 47, 189, 91, 148, 88, 194, 106, 5, 128, 165, 337, 380, 181, 143, 95];
for(var i = 0; i < manyNumbers.length; i++){
  if(manyNumbers[i] < 100){
    lessThanOneHundred.push(manyNumbers[i])
  }
}
console.log(lessThanOneHundred);



// # 6. Now iterate over the list but print out only the even ones. Put all of these in an evenNumbers list
// HINT TO FIND EVEN NUMBERS: https://www.programiz.com/javascript/examples/even-odd
var evenNumbers = []
for(var i = 0; i < manyNumbers.length; i++){
	if(manyNumbers[i] % 2 == 0){
		evenNumbers.push(manyNumbers[i])
	}
}
console.log(evenNumbers)


// # 7. Below is a list of 99 names. Iterate over them all and print out only the names that include the letter "a". Store these names in a list called namesWithA
var manyNames = ["Alexa","Burke","Kasimir","Baxter","Carissa","Vielka","Derek","Jemima","Jackson","Keegan","Graham","Melissa","Jeanette","Grant","Kirsten","Naida","Brody","Ishmael","Kane","Seth","Rae","Eagan","Camille","Alana","Vance","Melinda","Tarik","Risa","Jordan","Camilla","Karly","Baker","Adena","Calvin","Kendall","Nasim","Kellie","Dana","Rhoda","Linus","Tyler","Ahmed","Dante","Shay","Lael","Tana","Claudia","Chadwick","Tara","Fulton","Justine","Malcolm","Rowan","Christopher","Ciaran","Ivan","Hiram","Blake","Colton","Nathaniel","Moses","Cynthia","George","Ignacia","Chanda","Wyatt","Amethyst","Vladimir","Adam","Boris","Joseph","Scarlett","Kieran","Curran","Dalton","Paul","Phillip","Plato","Renee","Natalie","Barbara","Keiko","Oleg","Xerxes","Caesar","Kareem","Ahmed","Charles","Cyrus","Adria","Winifred","Pandora","Wynne","Simon","Wanda","Coby","Nolan","Marsden","Courtney"]
namesWithA = []
for(var i = 0; i < manyNames.length; i++){
	word = manyNames[i].toLowerCase()
	if(word.includes("a")){
		namesWithA.push(word)
	}
}
console.log(namesWithA)


// 8. Now iterate over the list and print out only the names which have more than 6 letters in them. Store these names in a list called longNames
var longNames = []
for(var i = 0; i < manyNames.length; i++){
	if(manyNames[i].length > 6){
		longNames.push(manyNames[i])
	}
}
console.log(longNames)


// 9. Iterate over the list and find the longest name in the whole thing. 
// Then print out "The longest name in the list is ______. It has ___ letters in it."
longestName = ''
for(var i = 0; i < longNames.length; i++){
	if(longNames[i].length > longestName.length){
		longestName = longNames[i]
	}
}
console.log(`The longest name in the list is ${longestName}. It has ${longestName.length} letters in it.`)



// 10. Make a second list called shortNames that contains all names that are 6 letters or shorter
var shortNames = []
for(var i = 0; i < manyNames.length; i++){
	if(manyNames[i].length <= 6){
		shortNames.push(manyNames[i])
	}
}
console.log(shortNames)






// 11. Print out the longNames and shortNames lists.
var shortestName = longestName
for(var i = 0; i < shortNames.length; i++){
	
	if(shortNames[i].length < shortestName.length){
		shortestName = shortNames[i]
	}
}
console.log(`The shortest name in the list is ${shortestName}. It has ${shortestName.length} letters in it.`)




// 12. Are there more long names or short names? Write code to figure that out.
if(longNames.length > shortNames.length){
	console.log("more long than short")
}
else {
	console.log("more short than long")
}




// CHALLENGE: Iterate over the list of numbers to find the average of them all.
total = 0
for(var i = 0; i < manyNumbers.length; i++){
	total += manyNumbers[i]
}
console.log(`AVERAGE: ${total/manyNumbers.length}`)



//DOUBLE TRIPPLE BONUS CHALLENGE: Find all duplicated names on the list and return the number of times each name is duplicated in the manyNames list.