// Initializes an array of  at least 10 tweets (strings)
// These tweets can just be gathered from the internet or made up.
// Creates a loop that iterates through the array, and for each element in the array prints the tweet to the console

//intitialize an array of tweets
var tweetStrings = [
    `Micheal Strahan's teeth are having a middle school dance, where the boys stand on one sid e and the girls stand on the other`,
    'Wiz Khalifa looks like a homeless woman',
    `Whatever. Tom Hanks is a whiner. Oh boo hoo, so you have a tropical islad all to yourself. F**k. You. I have a turtle sandbox, b**tch.`,
    `Some people ask me who has the biggest penis in Hollywood. Easy. Bette Midler`,
    `I hope you have a great weekend! Except you, Lisa Kudrow. F**k you`,
    `David Blaine looks like his voice is putting his face to sleep.`,
    `Bryan Cranston looks like Jim Carey impersonating Matthew McConaughey`,
    `I hate 'Matthew Perry Syndrome'- I'm a sarcastic loser with a giant head.`,
    `Oh, look at me...I'm Ryan Gosling, I have perfect bone structure and kind eyes. Go **** yourself Ryan Gosling`,
    `russel crowe is delightfully paradoxical in that he is a huge d**k with a small penis`
]
// console.log(tweetStrings)

// Creates a loop that iterates through the array, and for each element in the array prints the tweet to the console
var tweets = tweetStrings.length;
for (i = 0; i < tweets; i ++){
    console.log(tweetStrings[i])
}
// Create an array  JavaScript Objects instead of an array of strings. Inside each object, create the following key-value pairs:
// tweet - the tweet content (string)
// username - the author (string)
// created_at - the date of creation, format MM-DD-YYYY (string)
// age - the age of the user (integer)
// Fill this array with at least 10 random "user tweets"
// NOTE This is just the bonus from W9C without the printing
var jsObjects = [ // key value pairs inside the array of objects. 
    {
        tweet : `Micheal Strahan's teeth are having a middle school dance, where the boys stand on one sid e and the girls stand on the other`,
        username : `Ricky Bobby`,
        created_at : `04-18-2020`,
        age : 21
    },
    {
        tweet : `Wiz Khalifa looks like a homeless woman`,  //tweet content(string)
        username : `Randy Travis`,                          //author(string)
        created_at : `04-19-2020`,                          //date created(string)
        age : 91                                            //age of user(integar) integars dont need back tics or quotation marks,
    },
    {
        tweet : `Whatever. Tom Hanks is a whiner. Oh boo hoo, so you have a tropical islad all to yourself. F**k. You. I have a turtle sandbox, b**tch.`,
        username : `Wade Wilson`,
        created_at : `04-20-2020`,
        age : 55
    },
    {
        tweet : `Some people ask me who has the biggest penis in Hollywood. Easy. Bette Midler`,
        username : `Stan Lee`,
        created_at : `04-21-2020`,
        age : 12
    },
    {
        tweet : `I hope you have a great weekend! Except you, Lisa Kudrow. F**k you`,
        username : `Marshall Mathers`,
        created_at : `04-22-2020`,
        age : 41
    },
    {
        tweet : `David Blaine looks like his voice is putting his face to sleep.`,
        username : `Wilson Fisk`,
        created_at : `04-23-2020`,
        age : 19
    },
    {
        tweet : `Bryan Cranston looks like Jim Carey impersonating Matthew McConaughey`,
        username : `Ace Venture`,
        created_at : `04-24-2020`,
        age : 29
    },
    {
        tweet :  `I hate 'Matthew Perry Syndrome'- I'm a sarcastic loser with a giant head.`,
        username : `Peter Parker`,
        created_at : `04-25-2020`,
        age : 18
    },
    {
        tweet : `Oh, look at me...I'm Ryan Gosling, I have perfect bone structure and kind eyes. Go **** yourself Ryan Gosling`,
        username : `Brock Lesnar`,
        created_at : `04-25-2020`,
        age : 39
    },
    {
        tweet : `russel crowe is delightfully paradoxical in that he is a huge d**k with a small penis`,
        username : `Jesse Jackson`,
        created_at : `04-26-2020`,
        age : 18
    },
]
// console.log(jsObjects);

// Create a function that expects one argument
// This argument should be JavaScript Object
// The function will return true if the "age" key-value pair of the object is >= 18 and false otherwise

// not sure if i did this right was expecting all key value pairs to print true or false to console for each user.
function checkAge(jsObj){
    for(i = 0; i < jsObj.length; i ++){    //loops through array of objects
        if(jsObj[i].age >= 18){            //checks to see if age is greater to or equal to 18
            return true                    //prints true to console if 18 or older
        }else if(jsObj[i].age < 18){       //checks to see if user is younger than 18
            return false                   //if younger than 18 prints to console false 
        }
    }
}
var jsObj = checkAge(jsObjects);           // loades up jsObjects into function
console.log(jsObj);                        // prints return to console wether true or false


// Use the filter built in function to create a new array of tweets of only tweets who's user was older than 18
// Hint: use the function you just created




