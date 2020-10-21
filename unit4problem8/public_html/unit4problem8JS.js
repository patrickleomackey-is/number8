/*Patrick Leo Mackey CIS 119 Prof. K. Miller unit4 problem8 */
let numbers = [];
for (let i = 0; i <= 19; i++ ){
    numbers.push(Number(prompt("Enter an integer")));
    
}
numbers.sort((a, b) => a - b);
document.write(numbers.join("<br>"));

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

