"use strict";
// задание 1
function objFunction(obj) {
    for (let key in obj) {
        console.log(`${key} -> ${obj[key]}`);
    }
}

const obj = {
    a: 1,
    b: 2
};

objFunction(obj);

// задание 2
function keysObject(obj, str) {
    let array = Object.keys(obj);
    let res = false;
    let len = array.length;
    for (let i = 0; i < len; i++) {
        if (array[i] == str) {
            res = true;
            break;
        }
    }
    return res;
}

const obj2 = {
    a: 1,
    b: 2,
    c: 3,
    d: 4
};
const str = "a";
console.log(Object.keys(obj2).length);

console.log(keysObject(obj2, str));

// задание 3
const emptyObj = Object.create(null);
console.log(emptyObj);

function EmptyObj() {
    const emptyObj = Object.create(null);
    return emptyObj;
}
const emptyObj2 = EmptyObj();
console.log(emptyObj2);

// задание 4
function Lamp(name) {
    this.Switch = false,
    this.name = name;
    this.displayInfo = function() {
        if (this.Switch) {
            console.log(`Устройство ${this.name} работает`);
        } else {
            console.log(`Устройство ${this.name} не работает`);
        }
    };
}

const Computer = new Lamp("Acer Nitro");
const WiFi = new Lamp("Beeline");
Computer.Switch = true;
WiFi.Switch = true;
Computer.displayInfo();
WiFi.displayInfo();

// задание 5
class LampC {
    constructor (name, Switch) {
        this.Switch = Switch;
        this.name = name;
    }

    displayInfo() {
        if (this.Switch) {
            return `Устройство ${this.name} работает`;
        } else {
            return `Устройство ${this.name} не работает`;
        }
    }
}

const Computer2 = new LampC("Acer nitro", true);
const WiFi2 = new LampC("Beeline", true);


console.log(Computer2.displayInfo());
console.log(WiFi2.displayInfo());