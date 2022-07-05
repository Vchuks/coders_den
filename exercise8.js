// const countries = [{
//     email: 'paul@paul.com',
//     skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
//     age: 20,
//     isLoggedIn: false,
//     points: 40
//   }]
//   let newc = countries[0]
//   console.log(newc)
//   let c = newc.email
//   console.log(c);

const users = {
  Alex: {
    email: "alex@alex.com",
    skills: ["HTML", "CSS", "JavaScript"],
    age: 20,
    isLoggedIn: false,
    points: 30,
  },
  Asab: {
    email: "asab@asab.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Redux",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 25,
    isLoggedIn: false,
    points: 50,
  },
  Brook: {
    email: "daniel@daniel.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    age: 30,
    isLoggedIn: true,
    points: 50,
  },
  Daniel: {
    email: "daniel@alex.com",
    skills: ["HTML", "CSS", "JavaScript", "Python"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  John: {
    email: "john@john.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
    age: 20,
    isLoggedIn: true,
    points: 50,
  },
  Thomas: {
    email: "thomas@thomas.com",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  Paul: {
    email: "paul@paul.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
};

const countries = [
  {
    name: "Afghanistan",
    capital: "Kabul",
    languages: ["Pashto", "Uzbek", "Turkmen"],
    population: 27657145,
    flag: "https://restcountries.eu/data/afg.svg",
    currency: "Afghan afghani",
  },
  {
    name: "Åland Islands",
    capital: "Mariehamn",
    languages: ["Swedish"],
    population: 28875,
    flag: "https://restcountries.eu/data/ala.svg",
    currency: "Euro",
  },
  {
    name: "Albania",
    capital: "Tirana",
    languages: ["Albanian"],
    population: 2886026,
    flag: "https://restcountries.eu/data/alb.svg",
    currency: "Albanian lek",
  },
  {
    name: "Algeria",
    capital: "Algiers",
    languages: ["Arabic"],
    population: 40400000,
    flag: "https://restcountries.eu/data/dza.svg",
    currency: "Algerian dinar",
  },
  {
    name: "American Samoa",
    capital: "Pago Pago",
    languages: ["English", "Samoan"],
    population: 57100,
    flag: "https://restcountries.eu/data/asm.svg",
    currency: "United State Dollar",
  },
];

//1. Create an empty object called dog
const dog = {};

//2. Print the the dog object on the console
console.log(dog);

//3. Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof
dog.name = "Billy";
dog.legs = 4;
dog.color = "brown";
dog.age = 3;
dog.bark = function () {
  return "woof woof";
};
//4. Get name, legs, color, age and bark value from the dog object
console.log(dog.name, dog.legs, dog.color, dog.age, dog.bark());

//5. Set new properties the dog object: breed, getDogInfo
dog.breed = "American Eskimo dog";
dog.getDogInfo = function () {
  return `${this.name} is a ${this.color} ${this.breed} with ${
    this.legs
  } legs. He is ${this.age} years old and goes ${this.bark()} when threatened.`;
};
console.log(dog.getDogInfo());

//level2

//1. Find the person who has many skills in the users object.
let objUser;
let newUsers = Object.entries(users);
let a = [];
let b;
for (i = 0; i < newUsers.length; i++) {
  a.push(newUsers[i][1]["skills"].length);
  objUser = a.indexOf(Math.max.apply(Math, a));
  if (newUsers[i] === newUsers[objUser] && newUsers[i] != newUsers[0]) {
    b = newUsers[i][0];
  }
}
console.log(b);

//2. Count logged in users, count users having greater than equal to 50 points from the following object.
let newUsers2 = Object.entries(users);
let aa = [];
for (i = 0; i < newUsers2.length; i++) {
  aa.push(newUsers2[i][1]["isLoggedIn"]);
  if (aa[i] === true) {
    if (newUsers2[i][1]["points"] >= 50) {
      console.log(newUsers[i][0]);
    }
  }
}

//3. Find people who are MERN stack developer from the users object
let mern = Object.entries(users);
let mernArr = [];
for (let n = 0; n < mern.length; n++) {
  mernArr.push(mern[n][1]["skills"]);
  let a = mernArr[n].includes("MongoDB");
  let b = mernArr[n].includes("Express");
  let c = mernArr[n].includes("React");
  let d = mernArr[n].includes("Node");

  if (a && b && c && d) {
    console.log(mern[n][0]);
  }
}

//4. Set your name in the users object without modifying the original users object
let myName = Object.assign({}, users);
myName.Onyii = {
  email: "vchuks4all@yahoo.com",
  skills: ["Html", "Css", "JavaScript", "ReactJs"],
  age: 20,
  isLoggedIn: true,
  points: 100,
};
console.log(myName.Onyii);
console.log(myName);

//5. Get all keys or properties of users object
console.log(Object.entries(users));

//6. Get all the values of users object
console.log(Object.values(users));

//7. Use the countries object to print a country name, capital, populations and languages.
let newCount;
let countArr = [];
function getCountries(arr, index) {
  for (let a = 0; a < arr.length; a++) {
    newCount = `country name: ${arr[a]["name"]}, capital: ${arr[a]["capital"]}, population: ${arr[a]["population"]}, language: ${arr[a]["languages"]}`;
    countArr.push(newCount);
  }
  return countArr[index];
}
console.log(getCountries(countries, 1));

//   level3

//1.   Create an object literal called personAccount. It has firstName, lastName, incomes, expenses properties and
// it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods.
// Incomes is a set of incomes and its description and expenses is a set of incomes and its description.
const personAccount = {
  firstname: "Peter",
  lastname: "John",
  incomes: {
    shop: 300,
    flat: 500,
    factory: 60000,
  },
  expenses: {
    food: 500,
    fees: 600,
    others: 1200,
  },
  totalIncome() {
    let sum = 0;
    let inc = Object.entries(this["incomes"]);
    for (let c = 0; c < inc.length; c++) {
      let incomeAmount = inc[c][1];
      sum += incomeAmount;
    }
    return sum;
  },
  totalExpense() {
    let sum = 0;
    let inc = Object.entries(this["expenses"]);
    for (let c = 0; c < inc.length; c++) {
      let expAount = inc[c][1];
      sum += expAount;
    }
    return sum;
  },
  accountInfo() {
    return `${this.firstname} ${
      this.lastname
    } ${this.totalExpense()} ${this.totalIncome()}`;
  },
  addIncome(n) {
    let newI = Object.entries(this.incomes);
    newI.push(n);
    this.incomes = Object.fromEntries(newI);
    return this.incomes;
    //add as an array [key,value]
  },
  addExpense(ex) {
    let newE = Object.entries(this.expenses);
    newE.push(ex);
    this.expenses = Object.fromEntries(newE);
    return this.expenses;
    // add as an array [key,value]
  },
  accountBalance() {
    let accB = this.totalIncome() - this.totalExpense();
    return `Your account balance is $${accB}`;
  },
};
console.log(personAccount.addIncome(["land", 900]));
console.log(personAccount.addExpense(["drinks", 400]));
console.log(personAccount.accountBalance());

//2.   **** Questions:2, 3 and 4 are based on the following two arrays:users and products ()

const users2 = [
  {
    _id: "ab12ex",
    username: "Alex",
    email: "alex@alex.com",
    password: "123123",
    createdAt: "08/01/2020 9:00 AM",
    isLoggedIn: false,
  },
  {
    _id: "fg12cy",
    username: "Asab",
    email: "asab@asab.com",
    password: "123456",
    createdAt: "08/01/2020 9:30 AM",
    isLoggedIn: true,
  },
  {
    _id: "zwf8md",
    username: "Brook",
    email: "brook@brook.com",
    password: "123111",
    createdAt: "08/01/2020 9:45 AM",
    isLoggedIn: true,
  },
  {
    _id: "eefamr",
    username: "Martha",
    email: "martha@martha.com",
    password: "123222",
    createdAt: "08/01/2020 9:50 AM",
    isLoggedIn: false,
  },
  {
    _id: "ghderc",
    username: "Thomas",
    email: "thomas@thomas.com",
    password: "123333",
    createdAt: "08/01/2020 10:00 AM",
    isLoggedIn: false,
  },
];


// Imagine you are getting the above users collection from a MongoDB database.
// a. Create a function called signUp which allows user to add to the collection.
//If user exists, inform the user that he has already an account.

function signUp(usrnm, eml, psw) {
  let idArr = [];
  let alphanum = "0123456789abcdefgh";
  for (let a = 0; a < 6; a++) {
    id = alphanum.charAt(Math.floor(Math.random() * alphanum.length));
    idArr.push(id);
  }
  id = idArr.join("");
  time = new Date();
  log = false;
  let newUsr = {
    _id: id,
    username: usrnm,
    email: eml,
    password: psw,
    createdAt: time,
    isLoggedIn: log,
  };
  for (let a = 0; a < users2.length; a++) {
    if (
      users2[a]["username"] === newUsr["username"] &&
      users2[a]["email"] === newUsr["email"]
    ) {
      return `User already exists`;
    }
  }
  users2.push(newUsr);
  return users2;
}
console.log(signUp("Brook", "brook@brook.com", "ruyjjyu"));

// b. Create a function called signIn which allows user to sign in to the application
function signIn(userN, psw) {
  let signUser = {
    username: userN,
    password: psw,
  };
  for (let n = 0; n < users2.length; n++) {
    if (
      users2[n]["username"] === signUser["username"] &&
      users2[n]["password"] === signUser["password"]
    ) {
      users2[n]["isLoggedIn"] = true;
      return users2;
    }
  }
  return "Username or password is incorrect";
}

console.log(signIn("Thoas", "123333"));

const products = [
  {
    _id: "eedfcf",
    name: "mobile phone",
    description: "Huawei Honor",
    price: 200,
    ratings: [
      { userId: "fg12cy", rate: 5 },
      { userId: "zwf8md", rate: 4.5 },
    ],
    likes: [],
  },
  {
    _id: "aegfal",
    name: "Laptop",
    description: "MacPro: System Darwin",
    price: 2500,
    ratings: [],
    likes: ["fg12cy"],
  },
  {
    _id: "hedfcg",
    name: "TV",
    description: "Smart TV:Procaster",
    price: 400,
    ratings: [{ userId: "fg12cy", rate: 5 }],
    likes: ["fg12cy"],
  },
];

//3.  The products array has three elements and each of them has six properties.
//a. Create a function called rateProduct which rates the product
function rateProduct(productName,rate){
  let char= '13450abcde';
  let id, idd ;
  let idArr2=[];
  for (let y=0; y<6; y++){
    id = char.charAt(Math.floor(Math.random()* char.length))
    idArr2.push(id);
    idd = idArr2.join("")
  }
  for (let rt = 0; rt < products.length; rt++){
    if (products[rt]["name"].includes(productName)){
     let usId = {userId: idd, rate: rate}
     products[rt]["ratings"].push(usId)

    }
    
  }
  return products;
}
console.log(rateProduct("mobile phone",3))

//b. Create a function called averageRating which calculate the average rating of a product

function averageRating(pName){
  let pr, avg;
  let sum = 0;
for (let n = 0; n < products.length; n++){
  if (products[n]["ratings"].length>0 && products[n]["name"] === pName){
    for (let j =0; j< products[n]["ratings"].length; j++){
    pr = products[n]["ratings"][j]["rate"];
    sum += pr;
    avg = sum/(products[n]["ratings"].length);
    }
  }
  else{
    return `no rating`
  }
}
return `The average rating of ${pName} is ${avg}`;
}
//input the product name
console.log(averageRating("TV"));

// 4.  Create a function called likeProduct. This function will help to like to the product if it is not liked and remove like if it was liked.

function likeProduct(prName){
  for (let b=0; b <products.length; b++){
    if (products[b]["name"] === prName && (products[b]["likes"].length) > 0){
      products[b]["likes"].pop()
    }
    else if (products[b]["name"] === prName && (products[b]["likes"].length) === 0){
      products[b]["likes"].push(id)
    }
    
  }
  return products;
}
console.log(likeProduct("mobile phone"))
