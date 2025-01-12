// Задача 4. Написать метод, который в консоль выводит таблицу умножения.
// На вход метод получает число, до которого выводит таблицу умножения.
// В консоли должна появиться таблица.
//
// ================================================================================================

class MultiplicationTable {

    /**
     * Число, до которого строится таблица
     */
    targetNumber: number;

    /**
     * Максимальный результат таблицы
     */
    maximumResult: number;

    /**
     * Построить и вывести в консоль таблицу умножения до заданного числа
     * @param number число
     */
    buildAndShowTable(number: number) {

        this.targetNumber = Math.round(Math.abs(number));
        this.maximumResult = this.targetNumber * this.targetNumber;

        console.log(this.buildTableHeader());

        for (let rowNumber = 1; rowNumber <= this.targetNumber; rowNumber++) {
            console.log(this.buildTableRow(rowNumber));
        }

    }

    /**
     * Построить шапку таблицы
     */
    private buildTableHeader(): string {
        let row = this.alignCell(0).replace(/0/g, " ");

        for (let i = 1; i <= this.targetNumber; i++) {
            row += " " + this.alignCell(i);
        }

        return row;
    }

    /**
     * Построить строку таблицы
     * @param rowNumber номер строки
     */
    private buildTableRow(rowNumber: number): string {
        let row = this.alignCell(rowNumber);

        for (let i = 1; i <= this.targetNumber; i++) {
            row += " " + this.alignCell(rowNumber * i);
        }

        return row;
    }

    /**
     * Выровнять ячейку таблицы относительно максимального результата произведения
     * @param number число в ячейке
     */
    private alignCell(number: number) {
        const margins = this.getNumberRanks(this.maximumResult) - this.getNumberRanks(number);
        return " ".repeat(margins) + number;
    }

    /**
     * Определить количество разрядов числа
     * @param number число
     */
    private getNumberRanks(number: number): number {
        return number.toString().length;
    }

}

const multiplicationTable = new MultiplicationTable();
multiplicationTable.buildAndShowTable(5);
