// Last updated: 6/8/2026, 11:50:48 AM
function createHelloWorld() {
    
    return function(...args): string {
        return "Hello World";
    };
};

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */