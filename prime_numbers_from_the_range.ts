// Задача 3. Написать функцию/метод, которая возвращает массив простых чисел в диапазоне
// (2 числа - минимальное и максимальное) заданных чисел. Например, на вход переданы 2 числа:
// от 11 до 20  (диапазон считается включая граничные значения).
// На выходе программа должна выдать [11, 13 , 17, 19].
//
// ================================================================================================

/**
 * Найти простые числа в диапазоне
 * @param min нижний порог
 * @param max верхний порог
 */
function findPrimeNumbers(min: number, max: number): number[] {
    if (max < min) {
        const tmp = min;
        min = max;
        max = tmp;
    }

    const primeNumbers: number[] = [];

    for (let i = min; i <= max; i++) {
        if (isPrimeNumber(i)) {
            primeNumbers.push(i);
        }
    }

    return primeNumbers;
}

/**
 * Определить простое число
 * @param number число
 */
function isPrimeNumber(number: number): boolean {
    let isPrime = true;

    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            isPrime = false;
            break;
        }
    }

    return isPrime;
}

console.log(findPrimeNumbers(11, 20));
