// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();


// ; this is very important

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')