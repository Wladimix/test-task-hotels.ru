# Тестовое задание по вакансии: Frontend-разработчик (Hotels.ru)

## Задачи по программированию

Запуск первой задачи (склонение слова компьютер):
```bash
npm run task-1
```

Запуск второй задачи (общие делители чисел):
```bash
npm run task-2
```

Запуск третьей задачи (простые числа из диапазона):
```bash
npm run task-3
```

Запуск четвёртой задачи (таблица умножения):
```bash
npm run task-4
```

## Задачи на сообразительность

### 1.Взвешивание монет

<b>Задача</b>:

У вас есть восемь монет и одни весы с двумя чашами. Одна монета немного тяжелее остальных. Как за два взвешивания найти тяжелую монету?

<b>Решение</b>:

Возьмём 6 монет. Делим их на 2 кучи по 3 монеты каждая и ложим на весы. Это первое взвешивание. Если 2 кучи по весу равны, то тяжёлая монета среди оставшихся двух. Тогда взвешиваем оставшиеся 2 монеты (это второе взвешивание) и находим тяжёлую

2 вариант - это перевешивание одной из куч по 3 монеты во время первого взвешивания. В этом случае берём тяжёлую кучу, отбираем 2 монеты оттуда, взвешиваем их (второе взвешивание). Если одна из монет перевесила, значит она - искомая. Если обе равны, значит тяжёлая - это оставшаяся третья монета.

### 2.Расставить числа 3-11 в квадрат 3 на 3 клетки

<b>Задача</b>:

Есть числа от трех до одиннадцати. Есть квадрат — 3 на 3 клетки:

```
а б в
г д е
ё ж з
```

(Буквы ничего не значат, кроме того, что числа не повторяются)
Можно ли расставить числа в клетки квадрата таким образом, что перемножения чисел в строках дает тот же результат, что и произведение чисел в столбцах с теми же номерами?
Если можно — расставьте, если нельзя — объясните почему.

<b>Решение</b>:

```
11 5 8
10 9 3
4  6 7
```

### 3.Определяем прочность предметов

<b>Задача</b>:

Ученые разработали новый материал неизвестной прочности. Они знают, что материал разбивается при падении с высоты от 1 метра до 5 000 метров. Но не знают, с какой именно высоты. Чтобы определить прочность, ученые поднимают предмет на некоторую высоту и сбрасывают его оттуда. Их задача — определить, начиная с какой именно высоты предмет начнет разбиваться.

Специальная платформа, с помощью которой они осуществляют эксперимент, скидывает предмет только с дискретных высот (1, 2, 3 ... 4999, 5000 метров — платформа не может скинуть предмет, например, с 2,5 метров. Точности в 1 метр ученым вполне достаточно). При падении с высоты "n" метров предмет уничтожается. Если же его сбрасывали с высоты ниже "n", то его можно использовать в повторных экспериментах.

Нужно АБСОЛЮТНО ТОЧНО найти ту высоту, начиная с которой предметы разрушаются. Сделать это нужно за МИНИМАЛЬНО возможное число экспериментов. У ученых при этом всего 2 предмета, но они абсолютно одинаковые. Каким образом этого можно достигнуть? Сколько экспериментов при этом максимально потребуется?

<b>Решение</b>:

Сначала делим диапазон высот пополам (2500м и 2500м). Бросаем предмет с высоты 2500м (это первый эксперимент) и определяем дальнейшее направление.

Если предмет разбился, значит искомая высота находится в диапазоне 1 - 2499м. Если не разбился, то 2501 - 5000м.

Возьмём первый вариант, где предмет разбился.

При первом варианте у нас остался один предмет. Поэтому мы не можем брать любую попавшуюся высоту. Значит начинаем с 1м. Идём вверх по одному метру и на каждом проводим эксперимент с броском до тех пор, пока предмет не разобьётся.

Если искомая высота окажется 2499м, то <b>максимальное число экспериметов</b> в таком случае будет <b>2499</b> (бросок первого разбившегося предмета + 2498 бросков второго). 2499-й бросок не нужен, так как мы уже знаем, что на высоте 2500м предмет разобъётся, а на высоте 2498м он не разбился.

Второй вариант, где первый предмет не разбился, не рассматриваем, так как предмет остался цел, а значит число экспериментов уже не максимальное. В этом случае мы снова поделим оставшийся диапазон пополам. И число экспериментов сократится ещё вдвое. А по вопросу в задаче нам нужно узнать максимальное число экспериментов.

### 4.Студенты покупают пирожки

<b>Задача</b>:

В университетскую столовую пришли трое студентов купить пирожки. Один хочет купить треть всех имеющихся в столовой пирожков и еще 2 пирожка. Другой хочет купить четверть от всех имеющихся пирожков и ещё 3 пирожка. А третий хочет купить пятую часть всех пирожков и ещё 8 пирожков. Если все трое купят столько пирожков, сколько планируют, то в столовой как раз закончатся все пирожки. Сколько пирожков есть в столовой?

<b>Решение</b>:

Здесь нужно составить уравнение.

За x мы возьмём общее количество пирожков.

Получаем следующее равенство:
```
(1/3 * x) + 2 + (1/4 * x) + 3 + (1/5 * x) + 8 = x;
```

Перенесём x в левую часть:
```
(1/3 * x) + 2 + (1/4 * x) + 3 + (1/5 * x) + 8 - x = 0;
(1/3 * x) + (1/4 * x) + (1/5 * x) - x + 2 + 3 + 8 = 0;
(1/3 * x) + (1/4 * x) + (1/5 * x) - (1/1 * x) + 13 = 0;
```

Вынесем x за скобки:
```
x * (1/3 + 1/4 + 1/5 - 1/1) + 13 = 0;
```

Посчитаем отдельно выражение в скобках:
```
1/3 + 1/4 + 1/5 - 1/1 =
1/3 * 100/100 + 1/4 * 75/75 + 1/5 * 60/60 - 1/1 * 300/300 =
100/300 + 75/300 + 60/300 - 300/300 =
-65/300;
```

Возвращаемся к уравнению:
```
x * (-65/300) + 13 = 0;
-x * 65/300 = -13;
```

Оставляем x в левой части и досчитываем:
```
-x = -13 / (65/300);
x = 13 * 300 / 65;
x = 3900 / 65;
x = 60
```

<b>Ответ: 60 пирожков.</b>
