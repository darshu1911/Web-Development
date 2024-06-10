/*let num = prompt("Enter a number");

if(num % 5 ==0){
    console.log(num, " is a multiple of 5")
}else{
    console.log(" is not a multiple of 5")
}*/

let score = prompt("Enter the score");
let grade;


if(score >= 90 && score <=100) {
    grade = "A";
}else if(score >= 70 && score <=89){
    grade = "B";
}else if(score >= 60 && score <=69){
    grade = "C";
}else if(score >= 50 && score <=59){
    grade = "D";
}

console.log("According to your, your grade is ",grade)