//Assignment
//Try the following exercises (and don’t forget to use console.log()!):
    
//1.  Add 2 numbers together! (just type console.log(23 + 97) into your HTML file or the browser console)
                                                                                                                            

//2. Add a sequence of 6 different numbers together.
   
/*3. Print the value of the following expression: (4 + 6 + 9) / 77
        Answer should be approximately 0.24675*/

  /*4. Let’s use variables!
        Type this statement at the top of the script tag: let a = 10
        In the console console.log(a) should print 10
        Try the following in the console: 9 * a
        Now try typing this in the console: let b = 7 * a (returns undefined *) and then console.log(b)
    */
        
        
   /* 5.  Try this sequence:
       Declare a constant variable max with the value 57
        Set another variable actual to max - 13
        Set another variable percentage to actual / max
        If you type percentage in the console and press Enter you should see a value like 0.7719
    */

/*6 Take a few minutes to keep playing around with various things in your script tag. Eventually, 
    we will learn how to actually make those numbers and things show up on the webpage, but all of this logic
    will remain the same, so make sure you’re comfortable with it before moving on.*/


    // I get it, you're curious, 
// but it's OK if you don't understand what's going on in here, you'll learn it in time.

const abTroubleshoot = require("./troubleshooting");

const result = abTroubleshoot();

if(result === 2) {
	console.log("Congrats! You got the correct answer");
} else if(typeof result === 'number') {
	console.log(`You returned the number ${result}, the result should be the number 2`);
} else {
	console.log(`You returned string "${result}", the result should be the number 2`);
}

/**
 * ===== Troubleshooting =====
 * The function below should log the number 2, however it does not, 
 * see if you can fix it!
 * Be sure to fix it in the spirit of the code, do not hard code the result.
 */

function troubleshooting() {
	const a = 1;
	const b = 1;

	let result;

	// Edit between these lines
	// =================================
	result = "a" + "b";

	// =================================

	return result;
}

// Do not change this 
module.exports = troubleshooting;

