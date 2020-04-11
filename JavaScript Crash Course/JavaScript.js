//Javascript Crash Course


// in-line comments

/* multi-line comment*/ 



/* Data Types and Variables */
// Data is anything that is meaningful to the computer. In Javascript there are 7 different data types
/* undefined , null , boolean, string, symbol, number and objects  */

var myName = "Beau"

myName = 8

let ourName = "freeCodeCamp"

const pi = 3.14

/* A "var" is gonna be used throughout your whole program
   "let" will only be used within the scope of where you declared that
   "const" is a variable that can never change */
   
   
// Storing Values with Assignment Operator

var a;  // This is declaring a variable
var b = 2;   // This is assigning a Variable

//console.log(a) // Output is Undefined

a = 7;

b = a;

//console.log(a) // Output is 7
//console.log(b) // Output is 7



// Uninitialized Variables

var a = 5;
var b = 10;
var c = "I am a"

a = a + 1;
b = b + 1;
c = c + " String !";

//console.log(a) //6
//console.log(b) //11
//console.log(c) // I am a String


// Case Sensitivity in Variables
var studylyCapVar;
var properCamelClass;

studylyCapVar = 10;
properCamelClass = "I am a Camel";



// Declare String Variables

var myFirstName = "Alan";
var myLastName = "Turing";

// Escaping Literals Quotes in Strings
var myStr = "I am a \"double quoted\" string inside \"double quotes\"";
// console.log(myStr);

// Quoting Strings with Singke Quotes
var myStr2 = '<a href="http://www.example.com target="_blank"Link</a>';
// console.log(myStr2);

//Escape Sequence in Strings
var myStr3 = "FirstLine\n\t\\SecondLine\nThirdLine";
// console.log(myStr3);

//Concating Strings with plus Operator
 var ourStr = "I come First " + "I came Second";
 //console.log(ourStr);
 
 var myStr4 = "This is the first Sentence. "; 
 myStr4 += "This is the second sentence";
 // console.log(myStr4);
 
 // Concatinating Strings with Variables
  var OurName = "FreeCodeCamp";
  var ourStr = "Hello, our name is " + OurName + ", how are you ?";
  // console.log(ourStr)
  
  //Appending variables to Strings
  var anAdjective  = "is awesome !";
  var ourOrg = "freeCodeCamp ";
  ourOrg += anAdjective;
  
  // console.log(ourOrg);
  
  // Find Length of a String
  var FirstNameLength = 0;
  var FirstName = "Ada";
  FirstNameLength = FirstName.length;
  
  // console.log(FirstNameLength) // 3
  
  
  // Bracket Notation to Find the first Character in the String
  var FirstLetterOfFirstName = "";
  var FirstName = "Pablu";
  FirstLetterOfFirstName = FirstName[3];
  
  // console.log(FirstLetterOfFirstName)
  
  //Bracket Notation to find the nth character in the String
  
  var firstName = "Pablu"
   var LastLetterOfFirstName = firstName[firstName.length - 1]
   
   // console.log(LastLetterOfFirstName)
   
   
   // Word Blanks
   function wordBlanks(myNoun, myAdjective, myVerb, myAdverb)
   {
       var result = "";
       result += "The " + myAdjective + " " + myNoun + " " + myVerb + " to the store " + myAdverb;
       return result;
   }
   // console.log(wordBlanks("dog", "big", "ran", "quickly"));
   

   //Store multiple values with Arrays
   var myArray = ["Quincy", 1];
   
   
   
   //Nested Arrays
   var myArray = [["Bulls", 23], ["White Sox", 45]];
   
   
   // Access Array Data with Indexes
   var myArray = [50,60,70]; 
   var myData = myArray[0];
  //  console.log(myData);  // 50
  
  
  
  // Modify Array Data with Indexes
  var myArray = [18,64,99];
  myArray[0] = 45;
  // console.log(myArray) // [45,64,99]
  
  
  
  //Accessing Multidimensional Arrsy with Indexes
  var myArray = [[1,2,3],[4,5,6],[7,8,9],[[10,11,12],13,14]];
  var myData = myArray[2][1];
  //console.log(myData) // 8
  
  
  //Manipulate Array with push
  var myArray = [["John", 23], ["Cat", 2]];
  myArray.push(["Pablu", 87]);
  //console.log(myArray); // [["John",2],["Cat",2],["Pablu",87]]
  
  
  
  // Manipulate Array with pop()
  var myArray = [["John",23],["Cat",2]];
  var removedFromMyArray = myArray.pop();
  // console.log(myArray); // [["John",23]]
  
  
  // Manipulate Array with shift()
  var myArray = [["John",23],["Cat",2]];
  var removedFromMyArray = myArray.shift();
  // console.log(myArray); // [["Cat",2]]
  
  
  // Manipulates Array with Unshift()
  var myArray = [["John", 23], ["Cat",2]];
  myArray.shift();
  myArray.unshift(["Paul", 35]);
  // console.log(myArray); // [["Paul", 35], ["Cat", 2]]
  
  
  // Shopping List
  var myList = [["cerial", 3], ["milk", 2], ["banana", 3], ["juice", 2], ["eggs", 12]];
  
  
  
  // Write reusable code with functions
  function ourReusableFunction()
  {
     // console.log("Heyya World");
  }
  // ourReusableFunction(); // Heyya World
  // ourReusableFunction(); // Heyya World
  // ourReusableFunction(); // Heyya World
  // ourReusableFunction(); // Heyya World

  
  
  
  // Passing Value to Values with Arguments
  function ourFunctionWithArgs(a, b){
     // console.log(a - b);
  }
  // ourFunctionWithArgs(10, 5); // 5
  
  
  
  
  // Global Scope with Functions
  /* Scope refers to the visibility of Variables
     Varables which are defined outside of function block are called Global Scope */
  
     var myGlobal = 10;    // Declared as Global Variable
     function fun1(){
          oppsGlobal = 5;  // not used var means Global
     }
       function fun2(){
         var output = "";
         if( typeof myGlobal != "undefined"){
             //output = "myGlobal: " + myGlobal;
         }
         if( typeof oopsGlobal != "undefined"){
             //output = "oopsGlobal: " + oopsGlobal;
         }
       }
          //fun1();
     //fun2();
     
     
     
     
     // Local Scope with Functions
     /* Variables which are declared within a function as well as in function parameter will have a    a local scope that means they are only visible within the function */
      function myLocalScope(){
         var myVal = 5;
         console.log(myVal);
     }
     // myLocalScope(); // 5
    // console.log(myVal); //error
    
    
    
    
    // Global vs Local Function in Scope
    var outerWear = "T-Shirt";  // Global Declaraction 
    function myOutfit(){
        var outerWear = "Sweater"; // local scope takes precedence over global 
        return outerWear;
    }
    // console.log(myOutfit()); // Swater
    // console.log(outerWear); // T-Shirt
    
    
    
    // Return a Value from a Function with return
    function minusSeven(num){
        return num - 7;
    } 
    // console.log(minusSeven(10)); // 3
    
    
    
    // Understanding Undefined Value returned from a function
    var sum = 0;
    function addFive(){
        sum += 5;
    } // No return statement will provide Undefined Value
    
    
    
    //Assigned to a returned Value
    var changed = 0;
    function  change(num){
        return (num + 5)/ 3;
    }
     // changed = change(10); // Now changed = 5
     
     
     
     // Stand in line
     function nextInLine(arr, item){
         arr.push(item);
         return arr.shift();
     }
     var testArr = [1,2,3,4,5];
     //console.log("Before: " + JSON.stringify(testArr));  //[1,2,3,4,5]
     //console.log(nextInLine(testArr, 6));               // 1
     //console.log("After: " + JSON.stringify(testArr));   //[2,3,4,5,6]
     
     
     
     //Boolean Values
     function welcomeToBooleans(){
         return true;
     }
     
     
     
     // Use Conditional Statments with if Statments
     function ourTrueOrFalse(isItTrue){
         if(isItTrue){
            // return "Yes, it is true";
         }
       //  return "No it is false";
     }
     
     
     
     // Comparision with Strict Equality Opeartor
     function testStrict(val){
         if (val === '7') {
             return "Equal";
         }
         return "Not Equal";
     }
    // console.log(testStrict(7)); // Not Equal
     // Checking with Eqality Oparator
        function equalityOpeartor(a, b){
         if (a === b) {
             return "Equal";
         }
         return "Not Equal";
     }
     // console.log(equalityOpeartor(10, "10")); // Not Equal
     
     
     
     
     // function test logical OR
     function testLogicalOR(val){
         if(val  < 10 || val > 20){
             return "Outside";
         }
         
         return "Inside";
     }
    //  console.log(testLogicalOR(15));  // Inside
    
    
    
    
    // Golf Code
    var names = ["Hold-in-One!", "Eagle", "Birdie", "Par", "Bogie", "Double-Bogie"]
    function golfScorer(par, strokes)
    {
        if(strokes == 1){
            return names[0];
        }
        else if(strokes == 2){
            return names[1];
        }
        else if(atrokes >= par + 3){
            names[6];
        } 
    }
   // console.log(golfScorer(5, 2)); // Eagle
    
    
    // Returning Boolean Using Function
    function isLess(a, b){
        return a < b
    }
    // console.log(isLess(2, 14)); // true
    
    
  
  
  
    // JavaScript Objects
    /* Objects have Properties Eg: name, legs and Value of Properties are Camper,4 */
     var ourDog = {
         "name" : "Camper",
         "legs" : 4,
         "tails" : 1,
         "friends" : ["Everything!"]  
     };
     
     
     
     //Accessing Object Properties with dot notation
     var testObj = {
         "hat" : "ballcap",
         "shirt" : "jersey",
         "shoes" : "cleats"
     };
     var hatValue = testObj.hat;
     var shirtValue = testObj.shirt;
     // console.log(hatValue);  // ballcap
     // console.log(shirtValue);   // jersey
     
     
     
     //Accesing Object Properties with Bracket Notation
      var testObj = {
         "an entree" : "hamburger",
         "my side" : "veggies",
         "the drink" : "water"
     };
     var entreeValue = testObj["an entree"];
     var drinkValue = testObj["the drink"];
     //console.log(entreeValue);  // hamburger
     //console.log(drinkValue);   // water
     
     
     // Accessing object properties with Variables
      var testObj = {
         12 : "Namath",
         16 : "Montana",
         19 : "Unitas"
     };
     var playerNumber = 16;
     var player = testObj[playerNumber];
     // console.log(player);  // Montana
     
     
     //Updating Object properties
       var ourDog = {
         "name" : "Camper",
         "legs" : 4,
         "tails" : 1,
         "friends" : ["Everything!"]  
     };
     ourDog.name = "Happy Camper";
     
     
     
     // Adding new propertires to an object
       var ourDog = {
         "name" : "Camper",
         "legs" : 4,
         "tails" : 1,
         "friends" : ["Everything!"]  
     };
     ourDog.bark = "bow-bow";
     
     
     
     //Delete properties from an object
       var ourDog = {
         "name" : "Camper",
         "legs" : 4,
         "tails" : 1,
         "friends" : ["Everything!"] ,
         "bark" : "bow-bow"
     };
     delete ourDog.bark;
     
     
     
     // Testing objects for properties
     var myObj = {
         "gift" : "pony",
         "pet" : "kitten",
         "bed" : "sleigh"
     }
     function checkObj(checkProp){
         if(myObj.hasOwnProperty(checkProp)){
             return myObj[checkProp];
         }
         else {
              return "Not Found";
         }
     }
     // console.log(checkObj("gift")); // pony
     
     
     
     //Manipulating Complex Objects
     var myMusic = [
         {
             "artist" : "Billy Joel",
             "title" : "Piano Man",
             "release_year" : 1973,
             "formats" : [
                 "CD",
                 "8T",
                 "LP"
             ],
            "gold": true
         }
     ];
     
     
     
     
     // Accessing Nested Object
     var myStorage = {
         "car": {
             "inside": {
                 "glove box": "maps",
                 "passenger seats": "crumbs"
             },
               "outside": {
                 "trunk": "jack"
             }
         }
     };
      var gloveBoxContents = myStorage.car.inside["golve box"];
     // console.log(gloveBoxContents); // maps
     
     
     
     
     // Accessing nested Arrays
     var myPlants = [
         {
             type : "flowers",
             list : [
                 "rose",
                 "tulip",
                 "dandelion"
             ] 
         },
         {
             type: "trees",
             list: [
                 "fir",
                 "pine",
                 "branch"
             ]
         }
     ];
      var secondTree = myPlants[1].list[1];
    // console.log(secondTree);  // pine
    
    
    
    // CHALLENGE!!!
    // Record Collection
    var collection = {
        "2548": {
            "album": "Slippery When Wet",
            "artist": "Bon Jovi",
            "tracks": [
                "Let it Rock",
                "You give Love a Bad Name"
            ]
        },
        "2468": {
            "album": "1999",
            "artist": "Prince",
            "tracks": [
                "1999",
                "Little Red Corvette"
            ]
        },
        "1245": {
            "artist": "Robert Palmer",
            "tracks": []
        },
        "5439": {
            "album": "ABBA Gold"
        }     
    };
    // Keep a copy of the collections for tests
    var collectionCopy  = JSON.parse(JSON.stringify(collection)); // Copy of Objects
    
    function updateRecords(id, prop, value){
        if(value === ""){
            delete collection[id][prop];
        } else if(prop === "tracks"){
            collection[id][prop] = collection[id][prop] || [];
            collection[id][prop].push(value);
        } else {
            collection[id][prop] = value;
        }
        
     return collection;   
    }
   // updateRecords(2468, "tracks", "tests");
   // console.log(updateRecords(5439, "artist", "ABBA"));
   
   
   
   
   
   // Iterate with while loops
   var myArray = [];
   var i = 0;
   while(i < 5){
       myArray.push(i);
       i++;
   }
   // console.log(myArray); // [0,1,2,3,4]
   
   
   
   
   //Difference between var and let keyword
   let catName = "Quincy";
   let quote;
    catName = "Beau";
   
   
   
   //Use aArrow functions to use concise anonymous functions
   const magic = () => new Data();
   
   // with parameters
   const myConcat = function(arr1, arr2){           var myConcat = (arr1, arr2) => arr1.concat(arr2)
       return arr1.concat(arr2);
   };
   
   
   
   
     