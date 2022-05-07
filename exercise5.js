const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]


const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'  
  ]

//1. Declare an empty array;
let arr = Array();
let arr2 = [];

//2. Declare an array with more than 5 number of elements
let stationery = ["pen", "pencil", "ruler", "eraser", "book", "crayon", "compass"];

//3. Find the length of your array
console.log(stationery.length);

//4. Get the first item, the middle item and the last item of the array
console.log('first item:', stationery[0])

let middleItem = stationery.length/2;
let mid = stationery.slice(middleItem,middleItem+1);
console.log('middle item:',mid.toString());

let lastItem = stationery.length-1;
let last = stationery.slice(lastItem,lastItem+1);
console.log('last item :', last.toString());

//5. Declare an array called mixedDataTypes, put different data types in the array and 
//   find the length of the array. The array size should be greater than 5.
let mixedDataTypes = [1, "Obi", false, ["chalk", 5, "board"], {fname:'peter', age: 45}, true, 44, 100]
console.log(mixedDataTypes.length);

//6. Declare an array variable name it Companies and assign initial values 
//   Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon.
const company =['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

//7.  Print the array using console.log()
console.log(company);

//8. Print the number of companies in the array
console.log(company.length);

//9. Print the first company, middle and last company
console.log('first company:', company[0])

let middleCom = company.length/2;
let midC = company.slice(middleCom,middleCom+1);
console.log('middle company:',midC.toString());

let lastCom = company.length-1;
let lastC = company.slice(lastCom,lastCom+1);
console.log('last company :', lastC.toString());

//10. Print out each company
console.log(company.join(', ')); 

//11. Change each company name to uppercase one by one and print them out
console.log(company.join(', ').toUpperCase());

//12. Print the array like as a sentence: 
//    Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
console.log(company.join(', '), 'are big IT companies');

//13. Check if a certain company exists in the itCompanies array. 
//    If it exist return the company else return a company is not found
let compExist = company.indexOf("");
if (compExist !== -1){
    console.log((company.slice(compExist,compExist + 1)).toString());
}else {
    console.log('company not found');
}

//14. Filter out companies which have more than one 'o' without the filter method
let stringcom = company.slice(0,2);
console.log(stringcom)

//15. Sort the array using sort() method
console.log(company.sort());

//16. Reverse the array using reverse() method
console.log(company.reverse());

//17. Slice out the first 3 companies from the array
console.log(company.slice(0,3));

//18. Slice out the last 3 companies from the array
console.log(company.slice(company.length-3, company.length-0));

//19. Slice out the middle IT company or companies from the array
if (webTechs.length % 2 !== 0){
let an = webTechs.slice(webTechs.length/2, (webTechs.length/2)+1);
console.log(an);
}else {
    an= webTechs.slice((webTechs.length/2)-1, (webTechs.length/2)+1)
    console.log(an);
}

//20. Remove the first IT company from the array
console.log(webTechs.shift(webTechs[0]))
console.log(webTechs)

//21. Remove the middle IT company or companies from the array
if (webTechs.length % 2 !== 0){
console.log(webTechs.splice(webTechs.length/2,1))
}else{
    console.log(webTechs.splice(webTechs.length/2-1,2))
}

//22. Remove the last IT company from the array
console.log(webTechs)
console.log(webTechs.pop(webTechs.length-1))
console.log(webTechs)

//23. Remove all IT companies
console.log(webTechs.splice())

//exercise 2


//1. Create a separate countries.js file and store the countries array in to this file, 
// create a separate file web_techs.js and store the webTechs array in to this file. 
// Access both file in main.js file

/*2. First remove all the punctuations and 
 change the string to array and count the number of words in the array
 let text =
 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
 console.log(words)
 console.log(words.length)

 ["I", "love", "teaching", "and", "empowering", "people", "I", 
 "teach", "HTML", "CSS", "JS", "React", "Python"]
 13
*/
let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
let textArray = [text];
console.log(textArray)
let textString = textArray.toString()
let result = textString.split(" ")
console.log(result)
console.log(result.length)


//3. In the following shopping cart add, remove, edit items

// const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

//     add 'Meat' in the beginning of your shopping cart if it has not been already added
//     add Sugar at the end of you shopping cart if it has not been already added
//     remove 'Honey' if you are allergic to honey
//     modify Tea to 'Green Tea'

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
shoppingCart.unshift('Meat');
shoppingCart.push('Sugar');
shoppingCart.splice(4,1);
shoppingCart[3] = "Green Tea";
console.log(shoppingCart)

//4. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. 
// If it does not exist add to the countries list.
let searchCountry = "Ethiopia";
let ethiopiaMatch = countries.includes(searchCountry);
if (ethiopiaMatch === true){
    
    console.log(searchCountry.toUpperCase())
}else {
    countries.push(searchCountry);
    console.log(countries)

}

//5. In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. 
// If it does not exist add Sass to the array and print the array.
let checkTech = "Sass"
let techExist = webTechs.includes(checkTech);
if (techExist === true){
    console.log(`Sass is a CSS preprocess`)
}else {
    let addTech = webTechs.push(checkTech);
    console.log(webTechs);
}

//6. Concatenate the following two variables and store it in a fullStack variable.

 const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
 const backEnd = ['Node','Express', 'MongoDB']
let fullStack = frontEnd.concat(backEnd);
console.log(fullStack)

// console.log(fullStack)

// ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] 

//exercise3


//1. The following is an array of 10 students ages:

/*const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

Sort the array and find the min and max age
Find the median age(one middle item or two middle items divided by two)
Find the average age(all items divided by number of items)
Find the range of the ages(max minus min)
Compare the value of (min - average) and (max - average), use abs() method 1.

*/
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
console.log(ages.sort()); 
console.log('the min age:',ages[0], "and the max age:",ages[ages.length-1])

let midItem = ages.slice(ages.length/2,ages.length/2+1);
let midItem2 = ages.slice(ages.length/2-1,ages.length/2+1);
let sum = midItem2[0]+ midItem2[1];
if (ages.length % 2 === 0){
    
    console.log(`the numbers are: ${midItem2}`)
    console.log(`the median age = ${sum/2}`)
}else{
    console.log(`the number is: ${midItem}`)
    console.log(`the median age = ${midItem/2}`)
}

let ageSum = 0;

for (i=0; i < ages.length; i++){
    ageSum += ages[i]
}
let averageAge = Math.floor(ageSum/ages.length);
console.log('the average age:', averageAge) 

let min = ages[0];
let max = ages[ages.length-1];
let ageRange = max - min;
console.log('the range is :', ageRange)

let compareAge1 = Math.abs(min - averageAge);
let compareAge2 = Math.abs(max - averageAge);
console.log(compareAge1,',',compareAge2)

//Slice the first ten countries from the countries array
let countySlice = countries.slice(0,10)
console.log(countySlice)

//2. Find the middle country(ies) in the countries array

if ( countries.length % 2 !== 0){
 midCountry = countries.slice(Math.floor(countries.length/2),Math.floor( countries.length/2 +1))
 console.log(midCountry)
}else {
    midCountry = countries.slice(Math.floor(countries.length/2-1),Math.floor( countries.length/2 +1))
    console.log(midCountry)
}


//3. Divide the countries array into two equal arrays if it is even. If countries array is not even ,
// one more country for the first half.
let half = Math.floor(countries.length/2)
let countryDiv1 = countries.slice(0,half);
let countryDiv1of2 = countries.slice(0,half+1);
let countryDiv2 = countries.slice(half,countries.length-1+1)
let countryDiv2of2 = countries.slice(half+1,countries.length-1+1)

if (countries.length % 2 === 0){
console.log(countryDiv1)
console.log(countryDiv2)
}else {
    console.log(countryDiv1of2)
    console.log(countryDiv2of2)
}