/**
 * JavaScript trick examples
*/

/* #1. What the heck the variable 'i' is? */
    // Imagine we have let i = ? 

    console.log(i * i); // result is 0;
    console.log(i + 1) // result is 1;
    console.log(i - 1) // result is -1;
    console.log(i / i) // result is 1;

    /**
     * ANSWER: let i = Number.MIN_VALUE;
     * 
     * Which is equal to 5e-324 and is the lowest number is JavaScript.
     */

/* #2. What will be printed by console.log?  */
    console.log(555555555555555555);

    /**
     * ANSWER: 555555555555555600.
     * 
     * That is because JavaScript has a maximum safe value for integers, which is Number.MAX_SAFE_INTEGER (9007199254740991).
     * Any number that goes beyond MAX_SAFE_INTEGER length will lose precision.
     */

/* #3. What will be the output of the comparison?  */
    console.log(NaN === NaN);

    /**
     * ANSWER: false.
     * 
     * In JavaScript, NaN always returns false when compared with itself.
     * You may check this link > https://medium.com/@ntgard/why-nan-nan-3d41af988d30 for an explanation but keep in mind that NaN === NaN returns false.
     */

/* #4. What will be printed by console.log? */
    console.log('2' + '2' - '2');

    /**
     * ANSWER: 20
     * 
     * In JavaScript the plus operator performs both sum and concatenation. First, JavaScrit will concatenate
     * 2 + 2 since at least one of the values are a string so the operation results in '22'.
     * The minus operator is used only for math operations and if there's any value not numeric JavaScript
     * uses type coercion to convert the string value to numeric. So '22' - '2' becomes 22 - 2 that results in 20.
     */

/* #5. What will be printed by console.log? */
    console.log(7 > 6 > 5);

    /**
     * ANSWER: false
     * 
     * When performing 7 > 6 we get the value true because 7 is greater than 6 and the next operation becomes true > 5 which is false.
     * The result is false because when using the operator '>' true becomes the number 1 which is not greater than 5.
     */