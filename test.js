// answer 1
const newArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
let currentArray ;
let reverseArray =[]
let sumOfArray = 0;
let sumOfArray2 = 0;
let secondHalf = "";
let multplyBy ;
let arrayMultiple = [];
let newSecondArray;


   if (newArray.length < 10 && newArray.length % 2 !==0){
    for (let i= newArray.length-1; i >= 0; i--){
     currentArray = newArray[i];
     reverseArray.push(currentArray)
     sumOfArray += sumOfArray
     
}
console.log('the reversed array elements:',reverseArray)

for (ii = 0; ii < reverseArray.length; ii++){
    sumOfArray += reverseArray[ii];
    
}
console.log('sum of array elements:',sumOfArray)
   }


 else{
    for (let i= newArray.length-1; i >= 0; i--){
        currentArray = newArray[i];
        reverseArray.push(currentArray)
    }
     secondHalf = reverseArray.slice((reverseArray.length/2),reverseArray.length-0 )
     console.log("second half: ",secondHalf);
     for (ii = 0; ii < secondHalf.length; ii++){
     sumOfArray2 += secondHalf[ii]
     }
     console.log('sum of second half',sumOfArray2)
     for (a = 0; a < secondHalf.length; a++){
        multplyBy = secondHalf[a] *2
        newSecondArray =arrayMultiple.push(multplyBy)
    
    }console.log('new array: ', arrayMultiple)
     
     
 }



// answer 2
let text = "    school ";
console.log(text.toUpperCase());
let okText = text.trim();
console.log(okText) 
if(okText.length >= 4){
console.log(okText.substring(0,4))
} else{
    console.log('error')
}

//answer 3
let yesterdayDate = new Date();
let weekday = yesterdayDate.getDay()-1;
weekday= "wednesday"
let year = yesterdayDate.getFullYear();
let month = yesterdayDate.getMonth()+1;
let dateOfyesterday = yesterdayDate.getDate()-1;
console.log(`${weekday},${dateOfyesterday}-${month}-${year}`)
