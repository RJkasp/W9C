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
    `I hace 'Matthew Perry Syndrome'- I'm a sarcastic loser with a giant head.`,
    `Oh, look at me...I'm Ryan Gosling, I have perfect bone structure and kind eyes. Go **** yourself Ryan Gosling`,
    `russel crowe is delightfully paradoxical in that he is a huge d**k with a small penis`
]
console.log(tweetStrings)

// Creates a loop that iterates through the array, and for each element in the array prints the tweet to the console
var tweets = tweetStrings.length;
for (i = 0; i < tweets; i ++){
    console.log(tweetStrings[i])
}











