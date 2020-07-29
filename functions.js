/**
 * JavaScript functions tricky examples
*/

/* #1. What will be the ouput of the code below? */
    (function() {
        let a = b = 100;
    })();

    console.log(a);
    console.log(b);

    /**
     * ANSWER: The code will produce an error in the first console (ReferenceError because a is not defined).
     * 
     * Watch that the code above is using an IIFE (Immediately Invoked Function Expression) so it creates a block scope and the variable 'a' is only reachable inside the function.
     * The variable 'b' in this case becomes global because there's no 'let', 'const' or even 'var' in the declaration.
     * If you try to console.log(b) before console.log(a) you'll see the output 100 and Reference Error, because as mentioned above 'b' became global.
     * To fix it we can do the following:
     */

        (function() {
            let b = 100;
            let a = b;

            console.log(a);
            console.log(b);
        })()

/* #2. What will be the output of the code below? */
    let anyFunction = function() {
        if (true) {
            var name = "Alan";
            let surname = "Ribeiro"
        }

        console.log(name);
        console.log(surname)
    }

    anyFunction();

    /**
     * ANSWER: First console -> 'Alan' and second console -> surname is not defined.
     * 
     * Variables declared with 'let' has block scope and variables declared with 'var' has function scope, so 'name' is reachable in the whole 'anyFunction' while 'surname' is only reachable
     * in the the IF block. 
     */

/* #3. Explain why the code above doesn't show the given arguments */
    const arrowFunction1 = () => arguments;
    console.log(arrowFunction1(1, 2));

    /**
     * ANSWER: Arrow functions doesn't have the object 'arguments', it's not binded to it.
     * 
     * To get the given arguments you can do like this:
     */

    const arrowFunction1 = (...args) => args; // or use regular functions like function(){ return arguments }

/* #4. What is returned by the function below? */
    const anyFunction = function() {
        return 
        {
            message: 'hi',
        }
    }

    /**
     * ANSWER: undefined
     * 
     * The reason the function above returns undefined is because there's nothing after the 'return' so JavaScript
     * reads the code like 'return;' which returns undefined.
     * To fix it simply do:
     */

     const anyFunction = function() {
         return {
             message: 'hi',
          }
     }