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
    
    //!sic я допустила ошкибку он мутируется, поэтому лучше заюзаю спред 
    // (он сделает поверхностную копию)
    const reversedStr = [...regexArr].reverse().join("")
    
    //и теперь сравниваем обе строки, если они равны - строка палиндром, если нет - не палиндром
    return regexStr === reversedStr


}

 console.log(palindrome(stroka))


 /*
 Написать функцию, которая принимает массив и возвращает массив только с уникальными значениями.
 Например: [1,2,2,3,1,4] → [1,2,3,4]

 */

 //первое решение

 const test2 = [1,2,2,3,1,4]

 function isVasya(arr) {
    let newArr = [];
    let counterMax = arr.length
    for (let i = 0; i < counterMax; i++) {
        let counterNewArr = newArr.length
        let u;
        for (u = 0; u < counterNewArr; u++) {
            if (newArr[u] === arr[i]) {
                break 
            }
        }
        if (u === counterNewArr) {
            newArr.push(arr[i])
        }

    }

    return newArr

 }

console.log(isVasya(test2))

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
//когда нибудь решу кхм
function myownrecursion(obj) {
    if (obj === null || typeof obj !== 'object') {
        return obj
    }
}


/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

*/


const nums = [3, 2, 4];
const target = 6;

var twoSum = function(nums, target) {
    let firstIndex = undefined; //ну чисто на всякий
    let secondIndex = undefined;
    
    for (let i = 0; i < nums.length; i++) {

        let toFind = target - nums[i];
        console.log(toFind)
        let findedIndex = nums.indexOf(toFind);
        //окей оно может быть и отрицательным
        //но нам ведь надо плюсовать, т.е условно 6 - 11 даст -5 (т.е нам надо искать -5) но ведь -5 + 6 даст -1 что делать?
        //ну или я просто не умею в матиматику что вероятнее
        if (findedIndex !== -1 && i !== findedIndex) {
            console.log("нашли совпадение")
            firstIndex = i
            secondIndex = findedIndex
            break
        }

       

    }

    let arr = [firstIndex, secondIndex]
    return arr
};

console.log(twoSum(nums, target))
//да мое решение работает, но литкод говорит про его не оптимальность по скорости, и очевидно правильное будет map его и разберем

var twoSum = function(nums, target) {
    const newmap = new Map()
    //создаем новый мап (обьект хранящий пару ключ-значение)
    let firstIndex
    let secondIndex
    for (let i = 0; i < nums.length; i++) {
        //находим то что должны найти
        let toFind = target - nums[i];
        //с помощью встроенной фукнции получаем true or false есть ли уже в нашем обьекте подходящее значение
        if (newmap.has(toFind)) {
            //если нашли то получаем индекс который мы же сохранили
            firstIndex = newmap.get(toFind)
            //и индекс того айтема на котором и нашли совпадение
            secondIndex = i;
        } else {
            //если нет совпадения то как раз таки созраняем в соотношении ключ-значение, где ключ - это число а значение индекс, чтобы сверху его получить
            newmap.set(nums[i], i)
        }
    }
    //и вуаля собираем в аррей и выдаем
    return [firstIndex, secondIndex]
}

//еще палиндром, но уже для работы только циферок
// Given an integer x, return true if x is a palindrome, and false otherwise.

const someTextToTest = 121;

function palindromeForNumbers(x) {
   const toArray = Array.from(String(x))
   const reversedArray = [...toArray].reverse().join('');
   const toArrayJoin = toArray.join('')
   return toArrayJoin === reversedArray
}

console.log(palindromeForNumbers(someTextToTest))

//уже по классике мое решение не оптимальное, поэтому я спросила а как было бы по нормальному

function palindromeForNumbers2(x) {
    const toString = String(x);
    let i;
    for (i = 0; i < Math.floor(toString.length / 2); i++) {
        //сразу проверка на минус чтобы даже не думал дальше идти
        if (x < 0) {return false}

        if (toString[i] !== toString[toString.length - 1 - i]) { //мы сравниваем если число конкретное которое у нас щас не равно противоположного с конца
            //минус 1 нужен потому что отчет идет всегда с 0, а минус i чтобыпроверить не последнее число, а число которое ровно противоложно тому что сейчас
            //т.е например 1234321 сейчас проверяем 2 индекс [1], если удалим из длинны только единичку то это будет [6] - соответственно число 1 и так всегда
            //поэтому если сделать - 1 - i индекс в данном примере будет 1 т.е он будет показывать на число под индексом [5] - это твойка с конца
            return false
        }

    }
    return true
}

console.log(palindromeForNumbers2(someTextToTest))


/* 
Given an array of positive integers nums, return an array answer that consists of the digits of each integer in nums after separating them in the same order they appear in nums.

To separate the digits of an integer is to get all the digits it has in the same order.

For example, for the integer 10921, the separation of its digits is [1,0,9,2,1].


*/

const numss = [12, 1337, 12]

var separateDigits = function(nums) {
    const test1 = nums.join('').split('').map(Number)
    return test1
};


/* еее я кодер самую простую штуку даже смогла написать без мам пап и интернетов
Runtime
1
ms
Beats
98.89%
*/
console.log(separateDigits(numss))



/*
You are given a string moves of length n consisting only of characters 'L', 'R', and '_'. The string represents your movement on a number line starting from the origin 0.

In the ith move, you can choose one of the following directions:

move to the left if moves[i] = 'L' or moves[i] = '_'
move to the right if moves[i] = 'R' or moves[i] = '_'
Return the distance from the origin of the furthest point you can get to after n moves.



*/

//я ненавижу математику
//я тут сделала все САМА !!!!!!!! я даже решила побыть fancy заюзала switch и += :3
const moves1 = "RRLL__LL";
var furthestDistanceFromOrigin = function(moves) {
    let letterR = 0;
    let letterL = 0;
    let wildCard = 0;
    for (let i = 0; i < moves.length; i++) {
        switch (moves[i]) {
            case "R":
            letterR += 1;
            console.log(letterR)
            break;
            case "L":
            letterL += 1;
            break;
            case "_":
            wildCard += 1;
            break;
        }
    }

    let answer = Math.abs(letterR - letterL) + wildCard
    return answer
};

console.log(furthestDistanceFromOrigin(moves1))


/*
You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.

*/
/*
Итак что мы имеем вводное надо сравнить их размеры и одинаковые части ровно друг к другу приклеить а ту часть которая больше добавить в конце отдельно
 т.е ..a  b  c  d  e
         q  w  e  t  y u r i
*/


//ну по классике как это решила я
const firstWord = "ada";
const secondWord = "qwerty";
var mergeAlternately = function(word1, word2) {
    let toTake;
    if (word1.length >= word2.length) {
        toTake = word1
    } else {
       toTake = word2 
    }
    let newArr = [];
    let filterUndefined = [];
    for (let i = 0; i < toTake.length; i++) {
        if (word1 !== undefined && word2 !== undefined) {
            newArr.push(word1[i], word2[i])
            filterUndefined = newArr.filter(function (el) {
                return el !== undefined
            })
        }
        
    }
   
    filterUndefined = filterUndefined.join('')
    return filterUndefined
};

console.log(mergeAlternately(firstWord, secondWord ))
//а вот как правильно с подсказками
//Math.max - ну да, довольно логично что уже есть встроенная функция которая берет максимальную цифру...


let mergeAlternately2 = function(word1, word2) {
    let newArr = [];
    let constanta = Math.max(word1.length, word2.length)
    //забавно, я просто вынесла за скобки max и это типа оч повысило результаты на литкоде за счет того что оно не высчитывается каждую итерацию, надо запомнить, это важно
    for (let i = 0; i < constanta; i++) {
        if (i < word1.length) {
            newArr.push(word1[i])
        } 

        if (i < word2.length) {
            newArr.push(word2[i])
        }
    }
    return newArr.join('')
}

console.log(mergeAlternately2(firstWord, secondWord))


/*
For two strings s and t, we say "t divides s" if and only if s = t + t + t + ... + t + t (i.e., t is concatenated with itself one or more times).

Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.

Example 1:

Input: str1 = "ABCABC", str2 = "ABC"

Output: "ABC"

Example 2:

Input: str1 = "ABABAB", str2 = "ABAB"

Output: "AB"



 */
 //как я думаю первое условно как-то разделить этот массив на равные части и их проверять? но нет, не то.. или то?
        //типа решать как палиндром? сделать гекесом вот str2 и по нему отрезать?
        //const reg = str1.match(/[ABC$]/g).join('') //ну да оно нашло, но как это теперь разделить, split? а можно ли сплит регексом лол
        //const reg2 = reg.split('') //да это сработало но не так как я хотела оно их убрало хпхпхп
        //может быть trim не не сработает я хз крч
        //console.log(reg2)
        //или надо как-то отфильтрова это искомое с помощью filter ? но у меня не получилось
        //ладно я сдаюсь я посмотрю в подсказки


 let str1 = "ABABABABABABAB"; 
 let str2 = "ABABABAB";



var gcdOfStrings = function(str1, str2) {
    
    let a = str1.length;
    let b = str2.length;  

        if (str1 + str2 === str2 + str1) {
            //Я НЕ ЗНАЮ МАТЕМАТИКУ 7 КЛАСС Я НЕ МОГЛА ПОНЯТЬ 2 ЧАСА КАК СДЕЛАТЬ НАИБОЛЬШИЙ ОБЩИЙ ДЕЛИТЕЛЬ ЭТО КОШМАР
          while (b !== 0) {
                let remain = b; 
                b = a % b;
                a = remain;
            }

        } else if (str1 + str2 !== str2 + str1) {
            return ""
        }

        
        
    return str1.slice(0, a)
};


console.log(gcdOfStrings(str1, str2))

console.log (str1.split('').join(''))


/* 
короче чо я позакрепила на данный моумент
regex - /abc$/g - для поиска конкретного фрагмента с флагом g - все совпадения $ - только в самом конце
Math.abs - делает всегда положительным число
Math.max - берет большее
split() разделяем строку и делаем массивом если с '' то разделит каждый элемент запятой и скобками ''
join() соединяет массив в строку если с '' то уберет запятые
reverse() реверсит массив т.е ABC станет CBA
Array.from() - делает массив из строки или чисел
String() превращает то что в скобках с трингу и Number()  превращает то что в скобках в цифры если в нем не цифры то выдаст NaN
indexOf() ищет в массиве совпадение с штукой которую ищем в скобках если есть выдаст ее индекс, если нет выдаст -1
includes() ищет есть ли этот предмет в массиве если да -true если нет false 

дальше то что изучила но наверное в будущем надо дозакрепить
map()
делает через new Map() создает обьект в котором можно хранить ключ-значение, он типа псевдомассива, у него можно проверить has get set 
Set()
делается через new Set() создает новый массив, в котором не может быть повторений 
оператор спред ...
по идее он типа делает новый массив не связанный с предыдщуим типа 
const newArr = [...arr] 
newArr === arr будет false 
как защита от мутаций например для reverse
А еще его можно передать функции чтобы взять элементы массива как переменные
splice() мутирует изначальный массив, и выдает массив вырезанных элементов если условно задать его переменной const newArr = arr.splice(1, 2, "qwerty")
ну и соотвественно параметры первое - с какого индекса начинаем резать, второе - сколько элементов вырезать, третье - на что заменить вырезанные элементы 
filter() нууу он может включать в себе фукнцию...и если в этой функции написать что-то в духе el !== 123 то он сделает массив без 123

*/

/*
Minimum Initial Energy to Finish Tasks
You are given an array tasks where tasks[i] = [actuali, minimumi]:

actuali is the actual amount of energy you spend to finish the ith task.
minimumi is the minimum amount of energy you require to begin the ith task.
For example, if the task is [10, 12] and your current energy is 11, you cannot start this task. However, if your current energy is 13, you can complete this task, and your energy will be 3 after finishing it.

You can finish the tasks in any order you like.

Return the minimum initial amount of energy you will need to finish all the tasks.

 

*/

let tasksEnergy = [[1, 16],[2, 4], [10, 17]]


/*
var minimumEffort = function(tasks) {
    let newArr = []
    let mmap = new Map()
    for (let i = 0; i < tasks.length; i++) {
            let raznitsa = tasks[i][0] - tasks[i][1]
            mmap.set(Math.abs(raznitsa), tasks[i])
            newArr.push(Math.abs(raznitsa))
            console.log(raznitsa)
    
    }
    let sorted = newArr.toSorted((a, b) => a - b);
    let sortedMap = mmap.sort()
    console.log(sortedMap)
};

minimumEffort(tasksEnergy)
ну по крайней мере sort сто проц понадобится
ну и мы поняли что нужна разница для так называемого greed sort 
*/


tasksEnergy = [[1,3],[2,4],[10,11],[10,12],[8,9]]

var minimumEffort = function(tasks) {
    //окей, не без помощи я догадалась как отсортить сразу по разности
    //условно 1-16 = -15
    //2 - 4 = -2 
    //-15 - -2 = -17; -7;
    let newArr = tasks.sort((a,b) => (b[1]-b[0]) - (a[1]-a[0]))
    let currentEnergy = 0;
    let neededEnergy = 0;
    
    for (let i = 0; i < tasks.length; i++) {
        let a = tasks[i][0] //1
        let b = tasks[i][1] //16

        if (currentEnergy < b) {
            //0 < 2 значит нам надо прибавить необходимую энергию
            neededEnergy += (b-currentEnergy) // 2 - 0 = 2
            //и теперь мы приравниванием энергию чтобы мочь вычесть 
            // затрату энергии 
            currentEnergy = b; //2
        }
        //ну и теперь логично вычитаем затрату из current
        currentEnergy -= a
    }

    return neededEnergy
};

console.log(minimumEffort(tasksEnergy))