//Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
let phrase ="30 Days Of Javascript";
let phraseSlice = phrase.slice(3,21);
console.log(phraseSlice);

/* Using console.log() print out the following statement:\
The quote 'There is no exercise better for the heart than reaching down and lifting people up.\
' by John Holmes teaches us to help one another.*/
let quote = `'There is no exercise better for the heart than reaching down and lifting people up.\
' by John Holmes teaches us to help one another.`;
console.log(quote);




// Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
let num = 9.8;
console.log(parseFloat(num));
console.log(Math.round(num));


//Check if 'on' is found in both python and jargon
let py = "python";
let ja = "jargon";
console.log(py.includes("on"));
console.log(ja.includes("on"));


// I hope this course is not full of jargon. Check if jargon is in the sentence.
let word = "I hope this course is not full of jargon.";
console.log(word.includes("jargon"));


// Generate a random number between 0 and 100 inclusively.
let numbers = Math.random() * 101;
let result = Math.floor(numbers);
console.log(result);


// Generate a random number between 50 and 100 inclusively.
let rand = Math.random() * 51;
console.log(Math.floor(rand + 50));


// Access the 'JavaScript' string characters using a random number.
let name1 = "JavaScript";
let charNum = name1.length;
let charRand = Math.floor(Math.random() * charNum);
console.log(name1[charRand]);


// What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
let char = '30 Days Of JavaScript';
console.log(char.charCodeAt(11));


// Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
let char2 = "30 Days Of JavaScript";
console.log(char.indexOf("a"))

// 'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.
let word2 = 'Love is the best thing in this world. Some found their love and some are still looking for their love.';
let answer = /love/gi;
console.log(word2.match(answer));