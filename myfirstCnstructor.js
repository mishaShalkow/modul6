//Определить родительскую функцию с методами, которые включают/выключают прибор из розетки;
// Создать делегирующую связь [[Prototype]] для двух конкретных приборов;
// У каждого из приборов должны быть собственные свойства и, желательно, методы, отличные от родительских методов;
// Создать экземпляры каждого прибора;
// Вывести в консоль и посмотреть результаты работы, гордиться собой :)



// function Condition (){
//     this.temperature = 91
//     this.time = "morning"
//     this.condition = "on"
//     this.endCondition = "off"
// }
//
// Condition.prototype.swithOn = function () {
//     if (this.time === "morning") {
//         console.log(`Режим состояния оборудования ${this.condition}`)
//     }
// }
//
// Condition.prototype.swithOff = function () {
//     if (this.temperature > 90) {
//         console.log(`Отключите оборудование от сети, режим состояния:  ${this.endCondition}`)
//     }
// }
//
//
// function Computer (){
//     this.timeWork = 20
//     this.maxTimeWork = function () {
//         if (this.timeWork === 20){
//             console.log("Вам следует отдохнуть")
//         }
//     }
// }
//
// function Laptop () {
//     this.type = "MacBook"
//     this.workLaptop = function (){
//         if(this.type === "MacBook") {
//             console.log("Ваш ноутбук подходит для работы")
//         }
//     }
// }
//
// Computer.prototype = new Condition()
// Laptop.prototype = new Condition()
//
// const Asus = new Computer()
// const MacBook = new Laptop()
//
// Asus.maxTimeWork()
// Asus.swithOff()
//
// MacBook.swithOn()
// MacBook.workLaptop()


///Имена классов, свойств и методов должны быть информативными;
// Соблюдать best practices;
// Использовать синтаксис ES6.

class Condition {
    constructor(temperature, time) {
        this.temperature = 90
        this.time = 2
        this.condition = "on"
        this.endCondition = "off"
    }
    On(){
        if (this.time >= 2){
            console.log(`Устройство только начаало рабоать - Устройство:  ${this.condition}`)
        }
    }
    Off() {
        if (this.temperature >= 90) {
            console.log(`Отключите оборудование от сети, режим состояния:  ${this.endCondition}`)
        }
    }
}

class Computer extends Condition {
    constructor(time) {
        super(time);
        this.maxTimeWork = function () {
            if (this.time === 2){
                console.log(`Время работы устройства боллее ${time} часов`)
            }
        }
    }
}

class Laptop extends Condition {
    constructor (temperature) {
        super(temperature);
        this.workLaptop = function () {
            if(this.temperature >= 10) {
                console.log(`Температура работы устройства ${this.temperature} С`)
            }
        }
    }
}


const Asus = new Computer()
const MacBook = new Laptop()

Asus.maxTimeWork(2)
Asus.On()
MacBook.workLaptop(95)
MacBook.Off()