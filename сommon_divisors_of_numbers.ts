// Задача 2. Написать функцию/метод, которая на вход получает массив положительных целых чисел
// произвольной длины. Например [42, 12, 18]. На выходе возвращает массив чисел,
// которые являются общими делителями для всех указанных чисел. В примере это будет [2, 3, 6].
//
// ================================================================================================

/**
 * Найти общие делители массива чисел
 * @param numbers массив чисел
 */
function findCommonDivisors(numbers: number[]): number[] | string {
    if (!isArrayOfPositiveIntegers(numbers)) {
        return "массив должен содержать только целые положительные числа";
    }

    let commonDivisors: number[] = [];

    numbers.forEach((number, index) => {
        if (index === 0) {
            commonDivisors = findDivisorsOfNumber(number);
        }

        commonDivisors = findCommonValuesInArrays(commonDivisors, findDivisorsOfNumber(number));
    });

    return commonDivisors;
}

/**
 * Проверить массив на целые положительные числа
 * @param array массив чисел
 */
function isArrayOfPositiveIntegers(array: number[]): boolean {
    return array.every(number => {
        if (number >= 0 && number % 1 === 0) {
            return true;
        } else {
            return false;
        }
    });
}

/**
 * Найти делители числа
 * @param number число
 */
function findDivisorsOfNumber(number: number): number[] {
    const divisors: number[] = [];

    for (let i = 2; i <= number; i++) {
        if (!(number % i)) {
            divisors.push(i);
        }
    }

    return divisors;
}

/**
 * Найти общие значения в двух массивах чисел
 * @param firstArray первый массив чисел
 * @param secondArray второй массив чисел
 */
function findCommonValuesInArrays(firstArray: number[], secondArray: number[]): number[] {
    return firstArray.filter(value => secondArray.includes(value));
}

console.log(findCommonDivisors([42, 12, 18]));
