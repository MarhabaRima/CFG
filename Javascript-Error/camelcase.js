// Have the function CamelCase (str) 
// take the str parameter being passed and return it in proper camel case format where the first letter of each word is capitalized 
// (excluding the first letter). The string will only]Eontain letters and some combination of delimiter punctuation characters separating each word.
// For example: if str is "BOB loves-coding" then your program should return the string bobLovesCoding.
//Examples
//Input: "cats AND*Dogs-are Awesome"
//Output: catsAndDogsAreAwesome
//Input: "a b c d-e-f%g"
//Output: aBCDEFG

const camelCase1 = (value) => { //function to convert a string to camel case
    //each word, except the first, starts with a capital letter
    if(!value) return false; //return false if the value is empty

    let words = value.split(/[^a-zA-Z]/); //split the string into words
    let result = words[0].toLowerCase(); //convert the first word to lowercase
    for(let i = 1; i < words.length; i++) { //loop through the words
        result += words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase(); //capitalize the first letter of each word
    }
    return result; //return the result
}

console.log(camelCase1("cats AND*Dogs-are Awesome")); //catsAndDogsAreAwesome
console.log(camelCase1("a b c d-e-f%g")); //aBCDEFG
console.log(camelCase1("BOB loves-coding")); //bobLovesCoding
console.log(camelCase1("")); //false

const camelCase = (value) => {
    // each word except the first shouldd be capitalizedd
  
    if (!value) return false; // if its an empty string return false
  
    let words = value.toLowerCase().split(/[^a-zA-Z]+/)
    console.log(words, "WORDS")
  
    // Capitalize each word except the first one 
    for (let i = 1; i < words.length; i++) {
      //world -> w->W and orld
      words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    console.log(words, "WORDS 2")
  // Join the words back together, with the first word in lowercase 
    console.log(words.join(''), "CAMELCASE")
    return words.join('');
  
  }
  camelCase("Hello world here")