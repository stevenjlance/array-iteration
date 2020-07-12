ARRAY ITERATION
=================

Iterate literally means 'to perform repeatedly'. While human beings get bored of doing something repeatedly, machines excel at it.

![](https://media.giphy.com/media/J342sjcgjiqRLoFnQS/giphy.gif)

To "iterate over a list" (or an array in JavaScript) means to perform the same task over and over again, once for each item in the list.

To iterate over an array, we use a for loop in additon with the `.length` propery for JavaScript arrays. An example transveral can be seen below.
```javascript
var myList = ["item 1", "item 2", "item 3", "item 4", "item 5", "item 6"]
for(var i = 0; i < myList.length; i++){
  console.log(myList[i])
}
```
The for loop iterates for the entire length of the list. The value of i (which can be any word you want) is the position in the list where you are at. So the console will log each item in the list for the example shown above

TASK
------------
To complete today's task, open the script.js file and follow the directions to print various statements to the console.