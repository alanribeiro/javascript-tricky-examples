/**
 * JavaScript Object tricky examples
*/

/* #1. How to prevent someone to add a new value to the object below? */
    let obj1 = {
        name: 'Alan',
    }
    /* We have to prevent something like this -> obj1.age = 24 */

    /**
     * ANSWER: By using Object.freeze method
     * 
     * To prevent adding some new property to an object (and change some existing value) we can do:
     */

     Object.freeze(obj1);

/* #2. How to prevent someone to add a new value to an object but allows an existing value to be modified? */
    let obj2 = {
        name: 'Alan',
    }

    /**
     * We have to prevent something like this -> obj2.age = 24;
     * But we have to allow something like this -> obj2.name = 'Alan Ribeiro';
     */

    /**
     * ANSWER: By using Object.seal method
     * 
     * Object.seal prevents a new value to be added but allows an existing value to be modified
     */

/* #3. How to prevent sometone to change an specific value from an object */
    let obj3 = {
        name: 'Alan',
        country: 'Brazil'
    }

    /* Let's supose we gonna have the property age in the object above and someone can change any property but age*/

    /**
     * ANSWER: By using Object.defineProperty method
     * 
     * With this method you can define any property you want and set a specific configuration to it.
     * We can do something like this:
     */

     Object.defineProperty(obj3, 'age', {
         value: 24,
         writable: false, // the tricky is here!
     });

    /**
     * Note: If you console.log(obj3) the property 'age' may not be displayed but if you 
     * console.log(obj3.age) you get the value 24
     */