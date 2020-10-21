/*Patrick Leo Mackey CIS 119 Prof. K. Miller unit4 problem8 
 * 
 * I understand once I had this array sorted I could've just used numbers[x]
 * 
 * to indicate the least and maximum numbers in the array but I honestly need work
 * 
 * on writing the loops*/

let numbers = [];
for (let i = 0; i <= 19; i++ ){
    numbers.push(Number(prompt("Enter an integer")));
    
}
numbers.sort((a, b) => a - b);
//document.write(numbers.join("<br>"));

let least = numbers[0];

for (i = 0; i < numbers.length; i++){
    if (numbers[i] < least){
        least = numbers[i];
    }
    
}
document.write("<br>" + least+ " is the least");

let most = numbers[19];

for (i = 0; i < numbers.length; i++){
    if (numbers[i]> most){
        most =numbers[i];
    }
}
document.write("<br>"+ most + " is the most");

let total = 0;

for (i in numbers){ total += numbers[i];}

document.write('<br>' + total + " is the sum of your integers");

let aberage = (total / numbers.length);

document.write("<br>"+ aberage + " is the average");