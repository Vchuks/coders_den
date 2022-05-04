/*Get user input using prompt(“Enter your age:”). 
If user is 18 or older , give feedback:'You are old enough to drive' 
but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.

Enter your age: 30
You are old enough to drive.

Enter your age:15
You are left with 3 years to drive.*/

let userInput = prompt("Enter your age");
let user = userInput.toLowerCase();
let numOfYears = 18-userInput;
let response;
if (user >= 18){
    response = "You are old enough to drive";
} else {
    response = `You are left with ${numOfYears} year(s) to drive`;
}
console.log(`Enter your age: ${user}`);
console.log(response);

/*2.Compare the values of myAge and yourAge using if … else.
 Based on the comparison and log the result to console stating who is older (me or you). 
 Use prompt(“Enter your age:”) to get the age as input.

Enter your age: 30
You are 5 years older than me.*/
let userInput2 = prompt("Enter your age");
let myAge = 20;
let yourAge = userInput2;
let ageDiff = userInput2 - 20;
if (myAge < yourAge){
    console.log(`Enter your age: ${yourAge}`);
    console.log(`You are ${ageDiff} year(s) older than me`);
}else {
    console.log(`You are ${yourAge} years old`);
}

/*3.If a is greater than b return 'a is greater than b' else 'a is less than b'. 
Try to implement it in to ways

    using if else
    ternary operator.

  let a = 4
  let b = 3

  4 is greater than 3*/
  let a = 4;
  let b = 3;
  if (a > b){
      console.log(`${a} is greater than ${b}`);
    }
      else {
          console.log(`${a} is less than ${b}`);
      }
//ternary
      a ? console.log(`${a} is greater than ${b}`)
      : console.log(`${a} is less than ${b}`);


/*Even numbers are divisible by 2 and the remainder is zero.
 How do you check, if a number is even or not using JavaScript?

Enter a number: 2
2 is an even number

Enter a number: 9
9 is is an odd number.*/
let num = 8;
let mod = num % 2; 
if(mod == 0 ){
    console.log(`Enter a number: ${num}`);
    console.log(`${num} is an even number`)
}else {
    console.log(`Enter a number: ${num}`);
    console.log(`${num} is an odd number`)
}

/*level 2:1.
Write a code which can give grades to students according to theirs scores:

    80-100, A
    70-89, B
    60-69, C
    50-59, D
    0-49, F

*/

let grades = 65 ;
if (grades >=80 && grades <=100){
    console.log(`A`);
}
else if (grades >=70 && grades <=89){
    console.log(`B`);
}
else if(grades >=60 && grades <= 69){
    console.log(`C`);
}
else if(grades >=50 && grades <=59){
    console.log(`D`);
}
else if(grades >=0 && grades <=49){
    console.log("F");
    }

/*2.Check if the season is Autumn, Winter, Spring or Summer. If the user input is :

    September, October or November, the season is Autumn.
    December, January or February, the season is Winter.
    March, April or May, the season is Spring
    June, July or August, the season is Summer
*/
let season = "October";
switch(season){
    case "September":
        case "October":
            case "November":
                console.log("season is autumn");
                break;
    case "December":
        case "January":
            case "February":
                console.log("season is winter");
                break;
    case "March":
        case "April":
            case "May":
                console.log("season is spring");
                break;
    case "June":
        case "July":
            case "August":
                console.log("season is summer");
                break;

} 

/*3.    Check if a day is weekend day or a working day. Your script will take day as an input.

    What is the day  today? Saturday
    Saturday is a weekend.

    What is the day today? saturDaY
    Saturday is a weekend.

    What is the day today? Friday
    Friday is a working day.

    What is the day today? FrIDAy
    Friday is a working day.
    */
   let currentDay = prompt("enter day");
   let day = currentDay.toLowerCase();
   switch(day){
       case `sunday`:
           case `saturday`:
          
           console.log(` ${day} is a weekend.`);
           break;
        case "monday":
            case "tuesday":
                case 'wednesday':
                    case "thursday":
                        case "friday":
    
                            console.log(` ${day} is a working day.`);
                            break;
                            default:
                                console.log('not a day');
   }

   /*level3.1. Write a program which tells the number of days in a month, now consider leap year.
   Enter a month: January
  January has 31 days.
  */
 let currentMonth = prompt('Enter a month');
 let month = currentMonth.toLowerCase();
 
 if (month == 'january' || month =='march' || month =='july' || month =='may' || month =='august' || month =='october' || month =='december'){
     console.log(`${month} has 31 days`);
 }else if (month =='february'){
     console.log(`${month} has 28 days and 29 days in a leap year`);
 }else if(month =='september' || month =='april' || month =='june'|| month =='november'){
    console.log(`${month} has 30 days`);
 }else{
     console.log('not a month')
 }