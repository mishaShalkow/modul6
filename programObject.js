//Задание 1.
//
// Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль все ключи и значения только собственных свойств.
// Данная функция не должна возвращать значение.

const person = {
    city: "Moskou"
}

const obj = Object.create(person)
obj.name = "Ivan";
obj.age = 25;
obj.a = "";
// console.log(obj)
function getObj (obj) {
    for (let key in obj){
        if (obj.hasOwnProperty(key)){
            console.log(key, obj[key]);
        }
    }
}
getObj(obj)

//Написать функцию, которая принимает в качестве аргументов строку и объект, а затем проверяет есть ли у переданного объекта свойство с данным именем.
// Функция должна возвращать true или false.

const str = "Hello";
const manager = {
    name: "Ivan",
    surName: "Ivanow",
    age: 20
}
function getObject (string, object) {
    let res = "name" in obj;
    console.log(res);
}

getObject(str, manager);


//Написать функцию, которая создает пустой объект, но без прототипа.

function getObject () {
    const obj = {}
    console.log(obj)
}
getObject()


