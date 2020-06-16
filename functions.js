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
     * ANSWER: Alan and surname is not defined.
     * 
     * Variables declared with 'let' has block scope and variables declared with 'var' has function scope, so 'name' is reachable in the whole 'anyFunction' while 'surname' is only reachable
     * in the the IF block. 
     */