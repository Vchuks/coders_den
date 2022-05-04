/*1)Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it 
and use the typeof operator to check different data types.*/

let firstName = "Onyinye";
let lastName = "Vivian";
let country = "Nigeria";
let city = "Onitsha";
let age = 50;
let isMarried = false;
let year = new Date();
console.log(firstName, lastName, country, city, age, isMarried, year.getFullYear());
console.log(typeof firstName, typeof lastName, typeof country, typeof city, typeof age, typeof isMarried, typeof year);

//2)Check if type of '10' is equal to 10
let ab = 10;
let bc = '10';
console.log(ab===bc);

//3)Check if parseInt('9.8') is equal to 10
let c = parseInt('9.8');
console.log(c == 10);

/*4)Boolean value is either true or false.
    Write three JavaScript statement which provide truthy value.
    Write three JavaScript statement which provide falsy value.
*/
let num1 = 1;
let age2 = 3 > 2;
let isRainySeason = true;

let num2 = 0;
let age3 = 7 < 3;
let isDrySeason = false;

/*5)Figure out the result of the following comparison expression first without using console.log().
    After you decide the result confirm it using console.log()
    4 > 3
    4 >= 3
    4 < 3
    4 <= 3
    4 == 4
    4 === 4
    4 != 4
    4 !== 4
    4 != '4'
    4 == '4'
    4 === '4'
    Find the length of python and jargon and make a falsy comparison statement.
    */
true
true
false
false
true
true
false
false
false
true
false
console.log('answer')
console.log(4>3);
console.log(4 >= 3)
console.log(4 < 3)
console.log(4 <= 3)
console.log(4 == 4)
console.log(4 === 4)
console.log(4 != 4)
console.log(4 !== 4)
console.log(4 != '4')
console.log(4 == '4')
console.log(4 === '4')
let py = 'python';
let ja = 'jargon';
let pyLength = py.length;
let jaLength = ja.length;
console.log(pyLength != jaLength);


/*6)Figure out the result of the following expressions first without using console.log(). 
After you decide the result confirm it by using console.log()
    4 > 3 && 10 < 12
    4 > 3 && 10 > 12
    4 > 3 || 10 < 12
    4 > 3 || 10 > 12
    !(4 > 3)
    !(4 < 3)
    !(false)
    !(4 > 3 && 10 < 12)
    !(4 > 3 && 10 > 12)
    !(4 === '4')
    There is no 'on' in both dragon and python
    */
   true
   false
   true
   true
   false
   true
   true
   false
   true
   true
   console.log('answer')
    console.log(4 > 3 && 10 < 12)
    console.log(4 > 3 && 10 > 12)
    console.log(4 > 3 || 10 < 12)
    console.log(4 > 3 || 10 > 12)
    console.log(!(4 > 3))
    console.log(!(4 < 3))
    console.log(!(false))
    console.log(!(4 > 3 && 10 < 12))
    console.log(!(4 > 3 && 10 > 12))
    console.log(!(4 === '4'))
   let answer = /on/gi;
   let pyMatch = py.search(answer);
   let jaMatch = ja.search(answer);
  console.log(pyMatch !== jaMatch);


/*7)Use the Date object to do the following activities

    What is the year today?
    What is the month today as a number?
    What is the date today?
    What is the day today as a number?
    What is the hours now?
    What is the minutes now?
    Find out the numbers of seconds elapsed from January 1, 1970 to now.
*/
let date = new Date();
console.log(date);
console.log(date.getFullYear());
console.log(date.getMonth()+1);
console.log(date.getDate());
console.log(date.getDay());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getTime());

/*level 2, 1) Write a script that prompt the user to enter base and height of the triangle and 
calculate an area of a triangle (area = 0.5 x b x h).

Enter base: 20
Enter height: 10
The area of the triangle is 100 */
let numone = prompt("Enter base of a triangle",'type here');
let numtwo = prompt('Enter height of a triangle', 'type here');
let area = 0.5 * numone * numtwo;
console.log(area);


/*2)Write a script that prompt the user to enter side a, side b, 
and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)

Enter side a: 5
Enter side b: 4
Enter side c: 3
The perimeter of the triangle is 12*/
let sidea = prompt("Enter side a");
let sideb =prompt("Enter side b");
let sidec = prompt('Enter side c');
let perimeter = parseInt(sidea) + parseInt(sideb) + parseInt(sidec);
console.log(perimeter);

//3)Get length and width using prompt and calculate an area of rectangle 
// (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))
let lengthOfRectangle = prompt('Enter length of a rectangle');
let widthOfRectangle = prompt('Enter width of a rectangle');
let areaOfRetangle = lengthOfRectangle * widthOfRectangle;
let perimeterOfRectangle = 2 * (parseInt(lengthOfRectangle) + parseInt(widthOfRectangle));
console.log(`the area of a rectangle = ${areaOfRetangle} and perimeter = ${perimeterOfRectangle}`);

//4)Get radius using prompt and calculate the area of a circle (area = pi x r x r) and 
//circumference of a circle(c = 2 x pi x r) where pi = 3.14.
const PI = 3.14;
let radiusOfCircle = prompt('Enter radius of a circle');
let areaOfCircle = PI * radiusOfCircle * radiusOfCircle;
let circumference = 2 * PI * radiusOfCircle;
console.log(`area of a circle = ${areaOfCircle} and circumference = ${circumference}`);

//5)Calculate the slope, x-intercept and y-intercept of y = 2x -2
let x = 4;
let y = 2 * x - 2;
console.log(y);


//6)Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)
let x1 = 2;
let x2 = 6;
let y1 = 2;
let y2 = 10;
let m = (y2 - y1) / (x2-x1);
console.log(m);

//7)Compare the slope of above two questions.
console.log(y>m && y!=m);


//8)Calculate the value of y (y = x2 + 6x + 9). 
// Try to use different x values and figure out at what x value y is 0.

let numx =Math.random() * -2;

let numy = (numx * 2) + (6 * numx) + 9;
if (numy === 0){
    console.log(numx)
}else {
console.log(numx, numy);}



/*9)Write a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?

Enter hours: 40
Enter rate per hour: 28
Your weekly earning is 1120*/
let hours = prompt('Enter hours');
let rate = prompt('Enter rate');
let weeklyEarn = hours * rate;
console.log(weeklyEarn);


//10)If the length of your name is greater than 7 say, your name is long else say your name is short.
let myName = "Onyinye";
let nameLgt = myName.length;
if(nameLgt > 7){
    console.log('your name is long');
}else {
    console.log('your name is short');
}

/*11)Compare your first name length and your family name length and you should get this output.

let firstName = 'Asabeneh'
let lastName = 'Yetayeh'

Your first name, Asabeneh is longer than your family name, Yetayeh*/

let fullName1 = firstName.length;
let fullName2 = lastName.length;
//firstname and lastname already assigned at the top
if (fullName1 > fullName2){
    console.log(`Your firstname, ${firstName} is longer than your family name, ${lastName}`)
}else {
    console.log(`Your firstname, ${firstName} is not longer than your family name, ${lastName}`)
}

/*12)Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.

let myAge = 250
let yourAge = 25

I am 225 years older than you.*/

let myAge1 = 45;
let yourAge1 = 60;
let diff = myAge1 - yourAge1;
let diff2 = yourAge1 - myAge1;
if (myAge1 > yourAge1){
    console.log(`I am ${diff} years older than you`)
}else {
    console.log(`I am ${diff2} years younger than you`)
}

/*13)Using prompt get the year the user was born and if the user is 18 or above 
allow the user to drive if not tell the user to wait a certain amount of years.

Enter birth year: 1995
You are 25. You are old enough to drive

Enter birth year: 2005
You are 15. You will be allowed to drive after 3 years.*/
let nyear = new Date();
let nowYear = nyear.getFullYear();
let userYear = prompt('Enter year');
let theYear = nowYear - parseInt(userYear);
let yearDiff = 18 - theYear;
if (theYear >= 18){
    console.log(`You are ${theYear}. You will be allowed to drive`)
}else if(theYear < 18){
    console.log(`you are ${theYear}. You will be allowed to drive after ${yearDiff}year(s)`)
}


/*14)Write a script that prompt the user to enter number of years. 
Calculate the number of seconds a person can live. Assume some one lives just hundred years

Enter number of years you live: 100
You lived 3153600000 seconds.*/
let numOfYears1 = prompt('Enter your number of years');
let t = new Date();
let tsecs = t.getTime();
let totalNum = tsecs * numOfYears1;
console.log(totalNum);

/*15)Create a human readable time format using the Date time object

    YYYY-MM-DD HH:mm
    DD-MM-YYYY HH:mm
    DD/MM/YYYY HH:mm
*/
let yr = t.getFullYear()
let mth = ("0" + (t.getMonth()+ 1)).slice (-2);
let dy = ('0' + t.getDay()).slice (-2);
let hr = ('0' + t.getHours()).slice (-2);
let mint = ('0' + t.getMinutes()).slice (-2);
console.log(`${yr}-${mth}-${dy} ${hr}:${mint}`);


/*Level 3

    Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )
        YYY-MM-DD HH:mm eg. 20120-01-02 07:05
*/

console.log(`${yr}-${mth}-${dy} ${hr}:${mint}`);
// the variables have been declared at the top