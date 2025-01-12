// Задача 1.
// Разработайте функцию, которая принимает целое число в качестве аргумента и возвращает строку,
// содержащую это число и слово "компьютер" в нужном склонении по падежам в зависимости от числа.
// Например, при вводе числа 25 функция должна возвращать "25 компьютеров", для числа 41 — "41 компьютер",
// а для числа 1048 — "1048 компьютеров".
//
// ================================================================================================

const NOMINATIVE_CASE = "компьютер";
const GENITIVE_CASE = "компьютера";
const PLURAL_IN_GENITIVE_CASE = "компьютеров";

/**
 * Склонить слово "компьютер" в соответствии с полученным числом
 * @param number число
 */
function inclineWordComputer(number: number): string {
    if (!isInteger(number)) {
        return "число должно быть целым";
    }

    const secondRank = getRank(number, 2);
    const firstRank = getRank(number, 1);

    const conditionForPlural = secondRank === 1 || [0, 5, 6, 7, 8, 9].includes(firstRank);
    const conditionForGenitive = [2, 3, 4].includes(firstRank);

    if (conditionForPlural) {
        return number + " " + PLURAL_IN_GENITIVE_CASE;
    }

    if (conditionForGenitive) {
        return number + " " + GENITIVE_CASE;
    }

    return number + " " + NOMINATIVE_CASE;
}

/**
 * Получить разряд числа
 * @param number число
 * @param categoryRank номер разряда числа
 */
function getRank(number: number, categoryRank: number): number {
    const numberLength: number = number.toString().length;
    let rank: number = +number.toString()[numberLength - categoryRank];

    if (!rank) {
        rank = 0;
    }

    return rank;
}

/**
 * Проверить, что число целое
 * @param number число
 */
function isInteger(number: number): boolean {
    return number % 1 === 0;
}

console.log(inclineWordComputer(25));
console.log(inclineWordComputer(41));
console.log(inclineWordComputer(1048));
