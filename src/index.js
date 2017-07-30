import test from "./test";

test("ånonymous");

class Test {
    foo() {
        console.log("TESTING ES6");
    }
};

let bar = new Test();
bar.foo();