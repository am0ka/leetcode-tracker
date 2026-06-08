// Last updated: 6/8/2026, 11:50:37 AM
class Calculator {
    private result = 0;
    constructor(value: number) {
        this.result = value;
    }
    
    add(value: number): Calculator {
        this.result += value;
        return this;
    }
    
    subtract(value: number): Calculator {
        this.result -= value;
        return this;
    }
    
    multiply(value: number): Calculator {
        this.result *= value;
        return this;
    }
    
    divide(value: number): Calculator {
        if (!value) throw new Error("Division by zero is not allowed");
        this.result /= value;
        return this;
    }
    
    power(value: number): Calculator {
        this.result = this.result ** value;
        return this;
    }
    
    getResult(): number {
        return this.result;
    }
}