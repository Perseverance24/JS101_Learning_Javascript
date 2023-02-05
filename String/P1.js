 // Given a string count the number of words in that string

 let count = 0;

 let a = "My name is Tony. How are you?";
 
 for (let i = 0; i < a.length; i++) {
   if (a[i] == " ") {
     count++
   }
 }
 console.log("There are", count + 1, "words in the sentence.")
 