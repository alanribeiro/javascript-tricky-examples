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


