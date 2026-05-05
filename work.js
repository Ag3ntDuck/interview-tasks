/**
 является ли строка палиндромом, 
 то есть читается одинаково слева направо и справа налево. 
 Нужно игнорировать регистр, пробелы и знаки препинания (т.е. учитывать только буквы и цифры).


 */

 const stroka = "11AA@@11"

 function palindrome(p) {
    //сначала мы уравняли все к нижнему регистру
    const stroka = p.toLowerCase()
    //теперь мы нашли с помощью регекса все буквы и цифры и сохранили их в массиве
    const regexArr = stroka.match(/[a-z0-9]/g)
    const regexStr = regexArr.join("") //теперь мы объединили все элементы массива в одну строку
    //дальше смотри оказывается есть reverse чтобы ее перевернуть
    //для понятности я тебе это отдельными степами
    //так как у нас уже есть массивом изначальная строчка можно скипнуть этап split
    const step1 = regexArr.reverse() //теперь мы перевернули массив
    console.log(step1)
    //теперь склеиваем его обратно в строку
    const step2 = step1.join("")
    //и теперь сравниваем обе строки, если они равны - строка палиндром, если нет - не палиндром
    return regexStr === step2


}

 console.log(palindrome(stroka))


 /*
 Написать функцию, которая принимает массив и возвращает массив только с уникальными значениями.
 Например: [1,2,2,3,1,4] → [1,2,3,4]

 */

 //первое решение

 const test2 = [1,2,2,3,1,4]

 function isUnique(arr) {
    const counter = arr.length;
    const newArr = [];
    for (let i = 0; i < counter; i++) {
        if (!newArr.includes(arr[i])) {
            newArr.push(arr[i])
        }

    }

    return newArr
 } 
 
console.log(isUnique(test2))

//второе решение через set
//работает за счет свойств самого сет - он не может держать в себе дупликаты
const testNew = new Set(test2);
console.log(testNew)
/**

// Вывести числа от 1 до 100. Если число делится на 3 — вывести "Fizz", на 5 — "Buzz", на 15 — "FizzBuzz".

 */


function FizzBuzz() {
    for (let i = 1; i <= 100; i++) {
       
      if (i % 15 === 0) {
        console.log("FizzBuzz")
      } else if (i % 5 === 0) {
        console.log("Fizz")
      } else if (i % 3 === 0) {
        console.log("Buzz")
      }
      else {
         console.log(i)
      }
    }
}

FizzBuzz()

/*
// Написать функцию sum(arr), которая возвращает сумму всех элементов.
// Дополнительно: обработать случай, если в массиве не только числа.


*/ 

const test4 = [1, 22, 3, "ff15", 3, 4];

function summmm(arr) {
    let newArr = 0;
    for (let i = 0; i < arr.length; i++) {
       
     
        //если не только число можно по разному, допустим первый вариант кривой в духе if (typof(i) !== number)
        /**
        вторым же вариантом, допустим нам надо цифыра доставать еще и и из строчек const num = Number(arr[i]); 


         */
        if (typeof arr[i] === 'number') {
            
            newArr = newArr + arr[i]
            //более адекватная запись newArr += parseI
        }
    }
    console.log(newArr)
    return newArr;
}

console.log(summmm(test4))

/*
// Написать функцию, которая делает глубокую копию объекта (без вложенных функций и дат — только простые типы, массивы, объекты).

мы начинаем узнавать реально новое
собственная функция копирования;
глобальная функция structuredClone();
преобразование с помощью функций JSON.stringify() и JSON.parse();
сторонние библиотечные функции, например cloneDeep() из библиотеки lodash.
*/

//это поверхностное копирование 
const aaa = 123
const bbb = aaa

//а теперь примеры глубогого
//первый - json.pasrse + json.stringify, гланый минус, он не сохранит функции, undefined null и даты 

const test5 = {name: "anna", surname: "duck"}
const test6 = {function() {console.log("hello")}, date: Date()}

console.log(test6)
const arrStringify = JSON.stringify(test5) 
console.log(typeof(arrStringify)) //стринга
const arrParse = JSON.parse(arrStringify)
console.log(typeof(arrParse)) //обьект

//ну и да это можно сделать красивше - в 1 строку
const arrNew = JSON.parse(JSON.stringify(test5))
console.log(arrNew)

console.log(test5.surname = "not a duck")
console.log(test5) //тут ты увидишь что оно изменилось! теперь  surname: "not a duck"
console.log(arrParse) //а вот тут нет - это теперь другой обьект

const arrWithFunction = JSON.parse(JSON.stringify(test6));
console.log(arrWithFunction) //время теперь стрингой, а не временем, а фукнция вообще исчезла

//теперь про крутую штуку добавленную в node 17 structuredClone()
//подерживает копировку всего кроме, дом узлов и функций
//ну и в старых браузерах к сожалению не работает
const test7 = {name: "Anna", surname: "duck"}
const clone = structuredClone(test7);
console.log(test7.name = "Janna")
console.log(test7)

console.log(clone)

//третий способ - ВеЕеЕЕлоСипеЕд

