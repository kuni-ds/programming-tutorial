"use strict";
function taskA() {
    console.log(`taskA at ${new Date().toISOString()}`);
}
function taskB() {
    console.log(`taskB at ${new Date().toISOString()}`);
}
function taskAsync() {
    console.log(`taskAsync at ${new Date().toISOString()}`);
}
taskA();
setTimeout(() => taskAsync(), 1000);
taskB();
