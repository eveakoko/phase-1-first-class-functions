function receivesAFunction(callback) {
    // Call the callback function
    callback();
}

// returnsANamedFunction function
function returnsANamedFunction() {
    // Define a named function and return it
    function namedFunction() {
        // You can add some functionality here if needed
    }
    return namedFunction;
}

// returnsAnAnonymousFunction function
function returnsAnAnonymousFunction() {
    // Return an anonymous function
    return function() {
        // You can add some functionality here if needed
    };
}
