//Declare a function fullName and it print out your full name.
function fullName1(){
    let name = "Onyinye Vivian";
    return name;
}
console.log(fullName1());

//Declare a function fullName and now it takes firstName, lastName as a parameter and it returns 
//your full - name.
function fullName(){
    let firstName = "Onyinye";
    let lastName = "Vivian";
    let fullName = `My fullname is ${firstName} ${lastName}`;
    return fullName;
}
console.log(fullName());

//Declare a function addNumbers and it takes two two parameters and it returns sum.
function addNumbers(num1,num2){
    let sum = num1 + num2;
    return sum;
}
console.log(`sum of 2 numbers = `,addNumbers(1,2))

//An area of a rectangle is calculated as follows: area = length x width. 
//Write a function which calculates areaOfRectangle.
function areaOfRectangle(length,width){
    let areaOfRectangle = length * width;
    return areaOfRectangle;
}
console.log(`area of rectangle = `,areaOfRectangle(3,4))

//A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). 
//Write a function which calculates perimeterOfRectangle.
function perimeterOfRectangle(length,width){
    let perimeterOfRectangle = (length + width) * 2;
    return perimeterOfRectangle;
}
console.log(`perimeter of rectangle = `,perimeterOfRectangle(7,6))

//A volume of a rectangular prism is calculated as follows: volume = length x width x height. 
//Write a function which calculates volumeOfRectPrism.
function volumeOfRectPrism(length,width,height){
    let volumeOfRectPrism = length * width * height;
    return volumeOfRectPrism;
}
console.log(`volume of a rectprism = `,volumeOfRectPrism(4,8,5));

//Area of a circle is calculated as follows: area = π x r x r. 
//Write a function which calculates areaOfCircle
function areaOfCircle(radius){
    const pi = 3.14;
    let areaOfCircle = pi * radius * radius;
    return areaOfCircle;
}
console.log(`area of a circle = `,areaOfCircle(9));

//Circumference of a circle is calculated as follows: circumference = 2πr. 
//Write a function which calculates circumOfCircle
function circumOfCircle(radius){
    const pi = 3.14;
    let circumOfCircle = 2* pi * radius;
    return circumOfCircle;
}
console.log(`circumference of a circle = `,circumOfCircle(7))

//Density of a substance is calculated as follows:density= mass/volume. 
//Write a function which calculates density.
function density(mass,volume){
    let density = mass/volume;
    return density;
}
console.log(`density of a substance = `,density(40,8))

//Speed is calculated by dividing the total distance covered by a moving object divided by the 
//total amount of time taken. Write a function which calculates a speed of a moving object, speed.
function speed(distance,time){
    let speed = distance/time;
    return speed;
}
console.log(`speed of a moving object= `,speed(50,2) + "km/hr")

//Weight of a substance is calculated as follows: weight = mass x gravity. 
//Write a function which calculates weight.
function weight(mass){
    const gravity = 9.81;
    let weight = mass * gravity;
    return weight;
}
console.log(`weight of a substance = `,weight(34) + "kg")

//Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. 
//Write a function which convert oC to oF convertCelsiusToFahrenheit.
let cel;
function convertCelsiusToFahrenheit(celsius){
    let fahrenheit = (celsius * (9/5)) +32;
    return fahrenheit;
}
console.log(`the fahrenheit of oC = `,convertCelsiusToFahrenheit(4))

/* 
Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. 
Write a function which calculates bmi. BMI is used to broadly define different weight 
groups in adults 20 years old or older.
Check if a person is underweight, normal, overweight or obese based the information given below.

    The same groups apply to both men and women.
    Underweight: BMI is less than 18.5
    Normal weight: BMI is 18.5 to 24.9
    Overweight: BMI is 25 to 29.9
    Obese: BMI is 30 or more

*/
function calcBMI(weight, height){
    let bmi = weight / height**2
    if(bmi < 18.5){
        console.log(`BMI = ${bmi} `,'The patient is underweight')
    }
    if(bmi >=18.5 && bmi < 25){
        console.log(`BMI = ${bmi} `,'The patient is of normal weight')
    }
    if(bmi >=25 && bmi < 30){
        console.log(`BMI = ${bmi} `,'The patient is overweight')
    }
    if(bmi >=30){
        console.log(`BMI = ${bmi} `,'The patient is obese')
    }
}
calcBMI(78,1)
//Write a function called checkSeason, it takes a month parameter and returns the 
//season:Autumn, Winter, Spring or Summer.
function checkSeason(month){
    if (month=='January' || month=='February' || month=='March' || month=='April'){
        return "The seson is Summer or Spring"
    }
    else if(month=='May' || month=='June' || month=='July' || month=='August'){
        return "The season is Winter"
    }
    else if (month=='September' || month=='October' || month=='November' || month=='December'){
        return "The season is Autumn"
    }
    else{
        return "Enter the correct month"
    }
}
console.log(checkSeason('May'))
/*
Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.

console.log(findMax(0, 10, 5))
10
console.log(findMax(0, -10, -2))
0
*/
function findMax(a,b,c){
    let high;
    if (a>=b && a>=c){
        return high=a;
    }
    else if(b>=a && b>=c){
        return high =b;
    }
    else{
        return high=c;
    }
    
}
console.log(findMax(10,2,5));

let isPrime = true
function prime(num){
    if (num==1 || num == 2 || num ==3){
        return `${num} is prime`
    }
    
    for (let a=2; a < num; a++){
    if(num%a==0){
        isPrime =false;
    }
    if(isPrime){
        return `${num} is a prime number`
    }
    else{
        return `${num} is not a prime number`
    }
}
}
console.log(prime(7))

//exercise2 

//1. Linear equation is calculated as follows: ax + by + c = 0.
// Write a function which calculates value of a linear equation, solveLinEquation.
function solveLinEquation(a,b,c,x,y){
    let equatn = (a*x) + (b*y) + c;
    return equatn;
}
console.log(solveLinEquation(2,3,-2,1,2));

//2. Quadratic equation is calculated as follows: ax2 + bx + c = 0. 
//Write a function which calculates value or values of a quadratic equation, solveQuadEquation.
let root1, root2;
function solveQuadEquation(a,b,c){
    let quadratic = b*b - 4 *a *c;
    if (quadratic > 0){
        root1 = (-b + Math.sqrt(quadratic))/2;
        root2 = (-b - Math.sqrt(quadratic))/2;
        return {root1, root2};
    }
    else if(quadratic == 0){
        root1 = root2 = -b / (2 * a);
        return root1;
    }

    else{
        root1 = -b/2*a;
        root2 = (Math.sqrt(-quadratic)/(2*a));
        return {root1,root2};
    }
    
}
console.log(solveQuadEquation(1,0,-4));

// console.log(solveQuadratic()) // {0}
// console.log(solveQuadratic(1, 4, 4)) // {-2}
// console.log(solveQuadratic(1, -1, -2)) // {2, -1}
// console.log(solveQuadratic(1, 7, 12)) // {-3, -4}
// console.log(solveQuadratic(1, 0, -4)) //{2, -2}
// console.log(solveQuadratic(1, -1, 0)) //{1, 0}

//3. Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.
let output, arr2=[];
function printArray(arr){
    for (let a=0; a<arr.length; a++){
        output = arr[a];
        arr2.push(output);
    }
    return arr2;
}
console.log(printArray([1,2,3,4]));

//4. Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.
// showDateTime()
// 08/01/2020 04:08
function showDateTime(){
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let dateTime = `${day}/${month}/${year} ${hours}:${minutes}`;
    return dateTime;

}
console.log(showDateTime());

//5. Declare a function name swapValues. This function swaps value of x to y.
// swapValues(3, 4) // x => 4, y=>3
// swapValues(4, 5) // x = 5, y = 4
function swapValues(x,y){
    let n=x;
    let a = x=y;
    let b = y=n;
    
    return `x => `+ a + `, y => ` + b ;
}
console.log(swapValues(88,99));

//6. Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).
// console.log(reverseArray([1, 2, 3, 4, 5])) [5, 4, 3, 2, 1]
// console.log(reverseArray(['A', 'B', 'C'])) ['C', 'B', 'A']
let revArr = [];
function reverseArray(arr){
    for (let b = arr.length-1; b >= 0; b--){
        revArr.push(arr[b]);
    }
    return revArr;
}
console.log(reverseArray(["a","b","c"]));

//7. Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.
capArr = [];
function capitalizeArray(arr){
    for (let a = 0; a<arr.length; a++){
        capArr.push(arr[a].toUpperCase())
    }
    return capArr;
}
console.log(capitalizeArray(['hello', 'hi', 'friend']))

//8. Declare a function name addItem. It takes an item parameter and it returns an array after adding the item
addArr =["orange"];
function addItem(item){
    addArr.push(item);
    return addArr;
}
console.log(addItem("apple"))

//9. Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item
let removeArr = ["dad","people","pal"];
function removeItem(index){
    removeArr.splice(index,1);
    return removeArr;
}
console.log(removeItem(2))
//10. Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.
let sum = 0;
function sumOfNumbers(num){
    for (let aa = 0; aa < num.length; aa++)
    sum += num[aa];
    return sum;
}
console.log(sumOfNumbers([1,2,4,7]))

//11. Declare a function name sumOfOdds. It takes a number parameter and it adds all the odd numbers in that - range.
let odd = 0;
function sumOfOdds(num){
    for (let bb=0; bb < num.length; bb++){
        if (num[bb] % 2 !== 0){
            odd += num[bb]
        }
    }
    return odd;
}
console.log(sumOfOdds([1,3,4,6,8,9]))

//12. Declare a function name sumOfEven. It takes a number parameter and it adds all the even numbers in that - range.
let even = 0;
function sumOfEven(num){
    for (let bb=0; bb < num.length; bb++){
        if (num[bb] % 2 === 0){
            even += num[bb]
        }
    }
    return even;
}
console.log(sumOfEven([1,3,4,6,8,9]))

//13. Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.
// evensAndOdds(100);
// The number of odds are 50.
// The number of evens are 51.
let evenOdd =[] ;
let evenNum = [];
let oddNum = [];
function evensAndOdds(num){
    for (let i =1; i <= num; i++){
        evenOdd.push(i);
    }
    for (let a = 0; a<num; a++){
        if (evenOdd[a] % 2 === 0){
            evenNum.push(evenOdd[a]);
        }
        else if (evenOdd[a] % 2 !== 0){
            oddNum.push(evenOdd[a]);
        }
        
    }
    return `The number of odds are ${oddNum.length}\nThe number of evens are ${evenNum.length}`;
}
console.log(evensAndOdds(100))

//14. Write a function which takes any number of arguments and return the sum of the arguments

// sum(1, 2, 3) // -> 6
// sum(1, 2, 3, 4) // -> 10
let sumy =0;
function sumArg(){
    for (let i = 0; i < arguments.length; i++)
    sumy += arguments[i];
    return sumy;
}
console.log(sumArg(1,2,3,8,9))

//15. Writ a function which generates a randomUserIp.
function userIp(){
    let ip = Math.floor(Math.random()*255)+0;
    let ip2 = Math.floor(Math.random()*255)+0;

    return `${ip}.${ip2}.${ip2}.${ip2}`;
}
console.log(userIp())

//16. Write a function which generates a randomMacAddress
function macAddress(){
    let mac = Math.floor(Math.random()*99)+0;
    let mac2 = Math.floor(Math.random()*99)+0;

    return `${mac}.${mac2}.${mac2}.${mac}.${mac}.${mac}`;
}
console.log(macAddress())

//17. Declare a function name randomHexaNumberGenerator. When this function is called it generates a random hexadecimal number. The function return the hexadecimal number.
// console.log(randomHexaNumberGenerator());
// '#ee33df'
let hex ='0123456789ABCDEF';
let chr;
let chrArr=[]
function randomHex(){
    for (let i=0; i < 7; i++){
        chr= hex.charAt(Math.floor(Math.random()*hex.length));
        chrArr.push(chr)
    }
    return chrArr.join("");

}
console.log(randomHex());
//18. Declare a function name userIdGenerator. When this function is called it generates seven character id. The function return the id.
// console.log(userIdGenerator());
// 41XTDbE
let hexx ='ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
let chrr;
let idArr=[]
function userIdGen(){
    for (let i=0; i < 7; i++){
        chrr= hexx.charAt(Math.floor(Math.random()*hexx.length));
        idArr.push(chrr)
    }
    return chrArr.join("");

}
console.log(userIdGen());