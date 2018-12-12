// 1 Interpolation is when the process of one working on a string literal containing one or multiple placeholder you may work with.
// Concatenation, if youlook up the definition it tells you it is literally telling you to merge two things together. The action of joining two strings.

// 2 The acronym DRY stands for "Don't Repeat Yourself". It is important basicaly to work smart not harder, you want to just have the necessary code without having to repeat yourself.
// You would likr to use any practice that can help you like while loops or for loops. You do not want Wet code.

// 3 So, declaration with a variable is not physically doing anything to the computer except for telling it would need a variable in the future.
//Depending on the data type defining a variable basically is telling a compiler that you would need a specific amount of memory of to create what your working on.

// 4 Using both let and const and great tools to help with prevention of buggy issues if you can use them for better variable hosting. Const helps with variables not being assigned to wrong locations.

// 5 A parent directory is a folder that contains other files or folders with in it. If it itself belongs to another folder then that is it's own parent directory.

// 6 The way to get aide with unix commands is by using man stands for manual

// 7 Tab completion is awesome because it can speed up any coders work by pressing tab it completes words you were going to use.

const a = 4;
  const b = 53;
  const c = 57;
  const d = 16;
  const e = 'Kevin';

  console.log( a < b);
  console.log(c > d);
  console.log('Name' === 'Name');
  console.log(a < b < c);
  console.log(a > a < d);
  console.log(e == 'Kevin');
  console.log(48 == '48');

  // Part 3
   // My guess is that it is.

   //2 Infinite loop
   //Infinite loop will not stop and can run some programs to freeze it is a loop without an exit, while not infinite
   //would continously run sequences until its designated outcome.

   //Part 3

   // Not sure what "A" is
   let letters = "A";
   // i = 0 which most likely would be lower than it would be compared to.
let i = 0;
// i is less than 20.
while (i < 20) {
  //
	letters += "A";
	i++;
}
// I can only guess this is a indefinite loop.
console.log(letters);

// Part 4 Loops
// 1 I would like to start with the similarities since I believe that list is shorter and this seems to only be that they tell a program to do a repetitive action.
// As for differences a whileLoop can run forever if the conditions it has are true and it is evluated with every loop while
// the for loops has 3 parameters to meet for a loop in a certain order as well as not being able to run indefinitely.

// 2
for (let i = 0; i < 999; i += 1) {
  // Sold merchandise in a week
  console.log('Sales!');
}

// 3
//The first part of the control statement is: initialization
//The second part of the control statement is: the condition
//The third part of the control statement is: the finalization

// 4

for (let i = 999; i > 0; i--) {
  // Sold merchandise in a week
  console.log('Sales!');
}

//5

for (let i = 0; i <= 10; i ++) {
  // Greet each student by name
  console.log(`The value of i is ${i} of 10`);
}
