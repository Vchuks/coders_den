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

const mernStack = ['MongoDB', 'Express', 'React', 'Node']

//1. Iterate 0 to 10 using for loop, do the same using while and do while loop
let lup = 0;
for (let i = 0; i <= 10; i++){
    console.log(i);
}
 while(lup <=10){
     console.log(lup)
     lup ++;
 }

 let aa = 0;
 do{
     console.log(aa)
     aa ++;
 }while(aa <= 10);

//2. Iterate 10 to 0 using for loop, do the same using while and do while loop

lup = 10;
for (let i = 10; i >= 0; i--){
    console.log(i);
}
 while(lup >= 0){
     console.log(lup)
     lup --;
 }

 aa = 10;
 do{
     console.log(aa)
     aa --;
 }while(aa >= 0);

//3. Iterate 0 to n using for loop
let n = 8;
 for (let i = 0; i <= n; i++){
     console.log(i);
 }


/*4. Write a loop that makes the following pattern using console.log():

#
##
###
####
#####
######
#######
*/

let i=1;

while(i <= 7){
    let larr = Array(i).fill('#');
    console.log(larr.join(''));
    i++;
}

let sumi = "";
for (ii = 0; ii <7; ii++){ 
    sumi += '#';
    console.log(sumi);
}

/*5. Use loop to print the following pattern:

0 x 0 = 0
1 x 1 = 1
2 x 2 = 4
3 x 3 = 9
4 x 4 = 16
5 x 5 = 25
6 x 6 = 36
7 x 7 = 49
8 x 8 = 64
9 x 9 = 81
10 x 10 = 100
*/
let nu = 10;
for (let inum = 0; inum <= nu; inum++){
    console.log(`${inum} x ${inum} = ${inum*inum}`)
}


/*6. Using loop print the following pattern

 i    i^2   i^3
 0    0     0
 1    1     1
 2    4     8
 3    9     27
 4    16    64
 5    25    125
 6    36    216
 7    49    343
 8    64    512
 9    81    729
 10   100   1000
 */

 
for (let i = 0; i<=10; i++){
    let nom = i;
    let nomTwo = i**2;
    let nomThree = i**3;
    console.log(nom,nomTwo,nomThree);
}

//7. Use for loop to iterate from 0 to 100 and print only even numbers
for (let n = 0; n <=100; n++){
    if (n % 2 === 0 && n != 0){
        console.log(n);
    }
}

//8. Use for loop to iterate from 0 to 100 and print only odd numbers
for (let n = 0; n <=100; n++){
    if (n % 2 !== 0 && n != 0){
        console.log(n);
    }
}

//9. Use for loop to iterate from 0 to 100 and print only prime numbers

        for (let n = 2; n <= 100; n++){
            let flag = 0;
             for (let m =2; m <n; m++){
                 if (n % m == 0 ){
                 flag = 1;
                 }
             }
        if ( n > 1 && flag == 0){
            console.log(n)
        }
    }
    


//10. Use for loop to iterate from 0 to 100 and print the sum of all numbers.
//  The sum of all numbers from 0 to 100 is 5050.
let sum = 0;
let total;

for (let n = 0; n <= 100; n++){
     total = sum += n;
}
console.log("The sum of all numbers from 0 to 100 is ",total)


//11. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
// The sum of all evens from 0 to 100 is 2550. And the sum of all odds from 0 to 100 is 2500
let s = 0 ;
let h = 0;
let evenSum, oddSum;
for (let n = 0; n <= 100; n++){
    
    if(n % 2 === 0){
         evenSum = s += n

    }else if ( n % 2 !== 0){
        oddSum = h += n
    }
    
}
console.log(`sum of all even numbers from 0 to 100: ${evenSum}\nand sum of all odd numbers from 0 to 100: ${oddSum}`);


//12. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
//  Print sum of evens and sum of odds as array [2550, 2500]

let a = evenSum.toString();
let b = oddSum.toString();
let aArr = a.split(' ');
let aArr2 = b.split(' ');
console.log(aArr.concat(aArr2));

//13. Develop a small script which generate array of 5 random numbers

let num =Math.random() * 10;
for (let i = num; i < num  + 5; i++){
        console.log(i)
   
}

//14. Develop a small script which generate array of 5 random numbers and the numbers must be unique
let num2 =Math.floor(Math.random() * 20);
for (let i = num2; i < num2  + 5; i++){
        console.log(i)
   
}

//15. Develop a small script which generate a six characters random id: 5j2khz
let char = "ffkjvhkygufrcy3446776"
let charSix =Math.floor(Math.random()* char.length);
for (let i = charSix; i < charSix  + 6; i++){
    if (charSix < char.length -5){
        console.log(char.charAt(i))
    }
}

//exercise2
/*1. Develop a small script which generate any number of characters random id:
  fe3jo1gl124g
  xkqci4utda1lmbelpkm03rba
*/
let char2 ="bbchbhdlsjhjofkh"
let numOfChar =Math.floor(Math.random()*20);
console.log(numOfChar)
for (let i=numOfChar; i < char2.length; i++ ){ 
    console.log(char2.charAt(i))
}
 
//2. Write a script which generates a random hexadecimal number.'#ee33df'
let hexStrng ="yugg874889eghlfeq"
let numHex =Math.floor(Math.random()*hexStrng.length);

console.log('hexadecimal',numHex)
console.log(hexStrng.length-7)
for (let i=numHex; i < numHex+7; i++ ){
    if (numHex < hexStrng.length-6 ){
        console.log(hexStrng.charAt(i))
    }
}

//3. Write a script which generates a random rgb color number.rgb(240,180,80)
let red = Math.floor(Math.random()* 256)
let green = Math.floor(Math.random()* 256)
let blue = Math.floor(Math.random()* 256)
console.log(`rgb(${red},${green},${blue})`)

//4. Using the above countries array, create the following new array.

//["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]
let countUpper = countries.toString()
let countarr= countUpper.toUpperCase();
console.log(countarr.split(','))

//5.Using the above countries array, create an array for countries length'.

//[7, 7, 6, 7, 8, 7, 7, 7, 7, 5, 5]
let countLen; 
let countLenArr = [];
for (let a = 0; a < countries.length; a++){
    countLen = countries[a].length;  
      countLenArr.push(countLen)
}

console.log(countLenArr)


/*6. Use the countries array to create the following array of arrays:

[
['Albania', 'ALB', 7],
['Bolivia', 'BOL', 7],
['Canada', 'CAN', 6],
['Denmark', 'DEN', 7],
['Ethiopia', 'ETH', 8],
['Finland', 'FIN', 7],
['Germany', 'GER', 7],
['Hungary', 'HUN', 7],
['Ireland', 'IRE', 7],
['Iceland', 'ICE', 7],
['Japan', 'JAP', 5],
['Kenya', 'KEN', 5]
]
*/
let countThree, countThreeUpper, countThreeUpperArr = [];
let arrayAll =[]
let threeArray = [];


    for (const each of countries){
        countThree = each.slice(0,3);
        countThreeUpper = countThree.toUpperCase();
        countThreeUpperArr.push(countThreeUpper)
        }
        
        for (let i = 0; i < countries.length; i++){
            arrayAll = [countries[i], countThreeUpperArr[i], countLenArr[i]];
            threeArray.push(arrayAll)
        }
        console.log(threeArray)
       

//7.In above countries array, check if there is a country or countries containing the word 'land'. 
//If there are countries containing 'land', print it as array. 
//If there is no country containing the word 'land', print 'All these countries are without land'.
//['Finland','Ireland', 'Iceland']

let countLand, landTrue;
for (i =0; i < countries.length; i++){
countLand = countries[i].slice(countries[i].length-4,countries[i].length-0)

if (countLand == 'land'){
    console.log(countries[i])
}
}

//8. In above countries array, check if there is a country or countries end with a substring 'ia'. 
//If there are countries end with, print it as array. If there is no country containing the word 
//'ai', print 'These are countries ends without ia'.
//['Albania', 'Bolivia','Ethiopia']
let countai, aiTrue;
let result =true;
for (i =0; i < countries.length; i++){
countai = countries[i].slice(countries[i].length-2,countries[i].length-0)

if (countai == 'ia'){
    console.log(countries[i])
}
}
//9. Using the above countries array, find the country containing the biggest number of characters.
// Ethiopia
let larg = [0]
let bc;
for (let a = 0; a< countries.length; a++){
    if (larg < countries[a].length){
        larg = countries[a].length
        if (countries[a].length==larg){
            bc= countries[a]
        }
    }
}console.log(bc)
//10. Using the above countries array, find the country containing only 5 characters.

// ['Japan', 'Kenya']

for (let a = 0; a< countries.length; a++){
    if (countries[a].length == 5){
        console.log(countries[a])
    }
}

//11. Find the longest word in the webTechs array
let long =[0], bcc;
for (let c=0; c < webTechs.length; c++){
    if (long < webTechs[c].length){
        long = webTechs[c].length
        bcc =webTechs[c]
    }
}console.log(bcc)

//12. Use the webTechs array to create the following array of arrays:

// [["HTML", 4], ["CSS", 3],["JavaScript", 10],["React", 5],["Redux", 5],["Node", 4],["MongoDB", 7]]
let art=[]
let arrayOfWeb, ab, bm, arrayWeb=[];
for (a in webTechs){
    ab =webTechs[a].length
    arrayOfWeb=webTechs[a]
    abb = arrayOfWeb.split(" ")
    arrayWeb =[abb.concat(ab)]
    art.push(arrayWeb)
}
console.log(art)

//13. An application created using MongoDB, Express, React and Node is called a MERN stack app. 
//Create the acronym MERN by using the array mernStack
for (let i=0; i<mernStack.length; i++){
let merns= mernStack[i];
console.log(merns.charAt(0))
}
//14. Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] using a for loop or for of loop and print out the items.
const lan=["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]
for (let a of lan){
    console.log(a)
}

//15. This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.
const fru=['banana', 'orange', 'mango', 'lemon'] 
for (a=fru.length; a >= 0; a--){
    console.log(fru[a])
}

/*16. Print all the elements of array as shown below.

  const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
  ]

  HTML
  CSS
  JS
  REACT
  NODE
  EXPRESS
  MONGODB
  */

  const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
  ]
for (let a =0; a<fullStack.length; a++){
 let full = fullStack[a]
 for ( let b =0; b < full.length; b++){
 console.log(full[b])
 }
}
  //exercise3
  
  //1. Copy countries array(Avoid mutation)
  const cou =[]
  for (let i=0; i<countries.length; i++){
  cou.push(countries[i])
}console.log(cou)


  //2. Arrays are mutable. Create a copy of array which does not modify the original. 
  //Sort the copied array and store in a variable sortedCountries
  
  //from the first copy cou
let sortedCountries = cou.sort()
console.log(sortedCountries)

  //3. Sort the webTechs array and mernStack array
  let web = webTechs.sort()
  let mern = mernStack.sort()
  console.log(web)
  console.log(mern)

  //4. Extract all the countries contain the word 'land' from the countries array and print it as array
  let ln, lnArr =[];
  for (let a in countries){
      let lmatch = countries[a].includes('land')
  if(lmatch==true){
    ln = countries[a]
    lnArr.push(ln)
    
  }
}
console.log(lnArr)

  //5. Find the country containing the hightest number of characters in the countries array
  let high=[0];
  for(let a in countries){
      if(high < countries[a].length){
          high=countries[a].length
          f=countries[a]
      }
      
  }console.log(f)

  //6. Extract all the countries contain the word 'land' from the countries array and print it as array
  let ln1, lnArr1 =[];
  for (let a in countries){
      let lmatch = countries[a].includes('land')
  if(lmatch==true){
    ln1 = countries[a]
    lnArr1.push(ln1)
    
  }
}
console.log(lnArr1)

  //7. Extract all the countries containing only four characters from the countries array and 
  //print it as array
  let countFour = []
  for(let b =0; b < countries.length; b++){
      if (countries[b].length== 4){
          
          countFour.push(countries[b])
      }
  }console.log(countFour)

  //8. Extract all the countries containing two or more words from the countries array and 
  //print it as array
  let countTwo = []
  for(let b =0; b < countries.length; b++){
      if (countries[b].length >= 2){
          
          countTwo.push(countries[b])
      }
  }console.log(countTwo)

  //9. Reverse the countries array and capitalize each country and stored it as an array
  let counReverse = countries.reverse()
  let g=counReverse.join(' ')
  let gUpper=g.toUpperCase()
  console.log(gUpper.split(' '))

