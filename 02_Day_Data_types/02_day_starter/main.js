// this is your main.js script
let challenge = '30 Days Of Javascript'
let companies = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
let challenge_17 = 'You cannot end a sentence with because because because is a conjunction'
let challenge_20 = ' 30 Days Of Javascript '
let challenge_24 = '30 Days of'
console.log(challenge)

// Length of string
console.log(challenge.length)

// Change all string characters capital
console.log(challenge.toUpperCase())

// Change all string caharacters lowercase
console.log(challenge.toLowerCase())

// Cut out the first word of the string using substring()
console.log(challenge.substring(3))

// Check if string contains the word Script 
// ! Case sensitive
console.log(challenge.includes('Script'))

// Split the string into an array
console.log(challenge.split())

// Split the string to an array at the space
console.log(challenge.split(' '))

// split the string companies at the comma and change it to an array.
console.log(companies.split(','))

// Change the word javascript into python 
console.log(challenge.replace('Javascript', 'Python'))

// What is character at index 15 in '30 Days Of JavaScript' string?
console.log(challenge.charAt(15))

// What is the character code of J in '30 Days Of Javascript' 
console.log(challenge.charCodeAt('J'))

// determine the position of the first occurrence of a in 30 Days Of JavaScript
console.log(challenge.indexOf('a'))

// determine the position of the last occurrence of a in 30 Days Of JavaScript.
console.log(challenge.lastIndexOf('a'))

// find the position of the last occurrence of the word because
console.log(challenge_17.lastIndexOf('because'))

// find the position of the first occurrence of the word because
console.log(challenge_17.search('because'))

// remove any trailing whitespace at the beginning and the end of the string
console.log(challenge_20.trim())

// Use startsWith() method with the string 30 Days Of JavaScript and make the result true
// ! Case sensitive
console.log(challenge.startsWith('30'))

// Use endsWith() method with the string 30 Days Of JavaScript and make the result true
// ! Case sensitive
console.log(challenge.endsWith('Javascript'))

// find all the a’s in 30 Days Of JavaScript
console.log(challenge.match('a'))

// '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
console.log(challenge_24.concat(' Javascript'))

// print 30 Days Of JavaScript 2 times
console.log(challenge.repeat(2))




// * Level 2

console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.")
console.log(`"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."`)

// ?Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
let num1 = '10'
let numInt1 = parseInt(num1)
console.log(typeof numInt1 )

// Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
let num2 = '9.8'
let numFloat = parseFloat(num2)
console.log(parseFloat(Math.ceil(numFloat)))

// Check if 'on' is found in both python and jargon
let challenge_l2_q5 = 'python and jargon'
console.log(challenge_l2_q5.includes('on'))

// Check if jargon is in the sentence.
let challenge_l2_q6 = 'I hope this course is not full of jargon'
console.log(challenge_l2_q5.includes('jargon'))

// Generate a random number between 0 and 100 inclusively.
console.log(Math.floor(Math.random () *101))

// Generate a random number between 50 and 100 inclusively.
console.log(Math.floor(Math.random() *51) +50)

// Generate a random number between 0 and 255 inclusively.
console.log(Math.floor(Math.random() *256))



// *! Level 3 

// Count the number of word love in this sentence.
let challenge_l3_q1 = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
console.log(challenge_l3_q1.match('Love'))