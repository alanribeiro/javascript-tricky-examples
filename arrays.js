/**
 * JavaScript Array tricky examples
 */

 /* #1. What will be printed by console.log? */ 
    const array1 = [1, 2, 3];
    array1[-1] = -1;
    console.log(array1[array1.indexOf(10000)]);

    /**
     * ANSWER: -1.
     * 
     * The number 10000 doesn't exist in array1, so it gives -1 as result and array1[-1] is -1. Be careful when dealing with negative indexes!
     */

/* #2. What will be printed by console.log? */
    const array2 = [1, 2, 15, 30, 5, 45, 7];
    console.log(array2.sort());

    /**
     *  ANSWER: [1, 15, 2, 30, 45, 5, 7].
     * 
     * Wait... what?
     * .sort() method, when is not given a callback function to compare the values, sort the array as strings (unicode) even when its values are numbers.
     * Let's get it fixed...
     * */ 

        console.log(array2.sort((next, previous) => {
            if (next < previous) {
                return -1;
            }
            if (next > previous) {
                return 1;
            }
            return 0;
        }))

        // Now the answer is a sorted array2 = [1, 2, 5, 7, 15, 30, 45]

/* #3. What is the value of variable array3? */
    const array3 = [1, 2, 3] + [4, 5, 6];
    console.log(array3);

    /**
     * ANSWER: "1, 2, 3, 4, 5, 6".
     * 
     * The '+' are used both for sum and concatenation. If one of the values are not numeric then JavaScript will concatenate the values.
     * And what if we want to really join the two arrays?
     * We can easily do this using the following: 
     */
        const concatenatedArray3 = [1, 2, 3].concat([4, 5, 6]);
