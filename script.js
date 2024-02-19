ПРАКТИЧЕСКОЕ ЗАДАНИЕ №1

1
Запросите у пользователя число, возведите это число во
2-ю степень и выведите на экран.

let a = +prompt("Введите число","");
let b = +prompt("Введите степень числа","");
let c = (a**b);
    alert(c)


2
Запросите у пользователя 2 числа и выведите среднее ариф-
метическое этих чисел.

let a = +prompt("Введите первое число","");
let b = +prompt("Введите второе число", "");
let c = (a+b)/2
    alert(c)


3
Запросите у пользователя длину стороны квадрата и вы-
ведите площадь такого квадрата.

let a = +prompt("Введите длину стороны квадрата","");
let c = (a*a);
    alert(c)

4
Реализуйте конвертор из километров в мили (пользователь 
вводит километры, программа вводит мили). 1 км = 0,621371
миль. Это значение укажите в коде как константу. 

let a = +prompt("Введите количество километров","");
const c = (0,621371);
let b = (a*c);
    alert(b)


5
Реализуйте калькулятор. Пользователь вводит два числа,
а программа выводит результаты действий + - * / между
этими числами.

let a = +prompt("Введите первое число","");
let b = +prompt("Введите второе число","");
let c = prompt("Введите математическое действие");
    console.log(eval(`${a}${b}${c}`))
  



6
Пользователь вводит значения a и b для формулы a*x +b=0 
а программа считает и выводит значение x.

7
Запросите у пользователя текущее время (часы и минуты)
и выведите, сколько часов и минут осталось до следующего
дня.

8
Запросите у пользователя трехзначное число и выведите
вторую цифру этого числа. Для решения задачи используйте
оператор % (остаток от деления).
9
Запросите у пользователя пятизначное число и переме-
стите последнюю цифру в начало (из числа 12345 должно
получиться число 51234).
10
Зарплата работника составляет $ 250 +10% от продаж.
Запросите общую сумму продаж за месяц и посчитайте
зарплату.


Практическое задание №2

Задания, в которых необходимо использовать IF.
1
Запросить у пользователя число и определить, оно поло-
жительное, отрицательное или ноль.
2
Запросить у пользователя его возраст и проверить кор-
ректность введенных данных (0–120 лет).
3
Запросить у пользователя число и вывести его модуль
(|7| = 7, |-7| = 7).
4
Запросить у пользователя время (часы, минуты, секунды)
и проверить корректность введенных данных.
5
Запросить координаты точки (x, y) и определить номер
четверти, в которую попала эта точка. Необходимо учесть
случаи попадания точки на оси X или Y или в начало
координат.

Задания, в которых необходимо использовать SWITCH.
1
Запросить у пользователя номер месяца и вывести на экран
его название.
2
Реализовать калькулятор. Пользователь вводит 2 числа и
знак (+ - * /). В зависимости от введенного знака решить
пример и вывести результат.

Задания, в которых необходимо использовать тернарный
оператор.
1
Запросить 2 числа и вывести большее из них.

2
Запросить 1 число и проверить, оно кратно 5 или нет.
3
Запросить у пользователя название планеты. Если поль-
зователь ввел «Земля» или «земля», то вывести «Привет,
землянин!», в остальных случаях вывести «Привет, ино-
планетянин!».

Практическое задание №3

Задание
Для вывода данных используйте alert() или document.
write(). Для ввода данных используйте prompt() и
.
■ Задания, в которых необходимо использовать WHILE.
1
Вывести # столько раз, сколько указал пользователь.
2
Пользователь ввел число, а на экран вывелись все числа
от введенного до 0
3
Запросить число и степень. Возвести число в указанную
степень и вывести результат.
4
Запросить 2 числа и найти все общие делители.
5
Посчитать факториал введенного пользователем числа.
■ Задания, в которых необходимо использовать DO WHILE.
1
Предлагать пользователю решить пример 2 + 2 * 2 до тех
пор, пока он не решит его правильно.
2
Делить число 1000 на 2 до тех пор, пока не получится число
меньше 50 Вывести это число и сколько делений произвели.
■ Задания, в которых необходимо использовать FOR.
3
Вывести все числа от 1 до 100, которые кратные указанному
пользователем числу.
4
Вывести каждый 4-й элемент из указанного пользователем
диапазона. Пользователь указывает минимальное и мак-
симальное значения диапазона.
5
Запросить число и проверить, простое ли оно. Простое
число делится без остатка только на себя и на единицу.


Практическое задание №4

Задание
1
Написать функцию, которая принимает 2 числа и возвра-
щает меньшее из них.
2
Написать функцию, которая возводит переданное число
в указанную степень.
3
Написать функцию, которая принимает 2 числа и знак
(+ - * /), считает пример и возвращает результат.
4
Написать функцию, которая проверяет, является ли пере-
данное ей число простым.
5
Написать функцию, которая принимает число и выводит
таблицу умножения для этого числа. Вызовите функцию
для всех чисел от 2 до 9
6
Написать функцию, которая реализует работу оператора %.
Функция принимает 2 параметра и возвращает остаток от
деления первого параметра на второй. В функции исполь-
зовать только + - * /, оператор % не использовать.
7
Написать функцию, которая принимает от 1 до 5 чисел и
возвращает их сумму.
8
Написать функцию, которая принимает от 1 до 5 чисел и
возвращает большее из них.
9
Написать функцию, которая выводит все четные или не-
четные числа, в указанном пользователем диапазоне. Какие
числа выводить, определяется третьим параметром типа
bool (true – четные, false – нечетные).
10 Написать функцию, которая принимает дату (день, месяц,
год) и возвращает дату следующего дня в виде строки
«дд.мм.гггг». Проверку на високосный год желательно
написать отдельной функцией.


Практическое задание №5

Задание
Во всех заданиях обязательно использовать рекурсию.
1
Написать функцию, которая вычисляет факториал задан-
ного числа.
2
Написать функцию, которая выводит все числа из заданного
пользователем диапазона в прямом порядке. И еще одну
функцию – для вывода в обратном порядке.
3
Написать функцию, которая выводит переданное ей число
задом наперед.
Например: число 1234 вывести как 4321
4
Написать функцию, которая считает сумму цифр числа.
Например: число 1357, сумма 1 + 3 + 5 + 7 = 16
5
Написать функцию, которая принимает число и выводит
соответствующее количество вложенных пар круглых скобок.
Например: число 4 – (((()))).


Практическое задание №6

 Задание
Создать объект, описывающий прямоугольник (хранит коор-
динаты левой верхней и правой нижней точек), и написать следу-
ющие функции для работы с таким объектом.
1
Функция принимает объект-прямоугольник и выводит
информацию о нем (где какая точка расположена).
2
Функция принимает объект-прямоугольник и возвращает
его ширину.
3
Функция принимает объект-прямоугольник и возвращает
его высоту.
4
Функция принимает объект-прямоугольник и возвращает
его площадь.
5
Функция принимает объект-прямоугольник и возвращает
его периметр.
6
Функция изменения ширины прямоугольника. Она прини-
мает объект-прямоугольник и на сколько единиц изменить
ширину.
7
Функция изменения высоты прямоугольника. Она прини-
мает объект-прямоугольник и на сколько единиц изменить
высоту.
8
Функция изменения ширины и высоты прямоугольника.
Она принимает объект-прямоугольник и два значения –
для изменения ширины и высоты.
9
Функция смещения прямоугольника по оси X. Она при-
нимает объект-прямоугольник и на сколько единиц его
сдвинуть.
10 Функция смещения прямоугольника по оси Y. Она при-
нимает объект-прямоугольник и на сколько единиц его
сдвинуть.
11 Функция смещения прямоугольника и по оси X и по
оси Y. Она принимает объект-прямоугольник и два значе-
ния: сдвиг по оси X и сдвиг по оси Y.
12 Функция для проверки, находится ли точка внутри пря-
моугольника. Она принимает объект-прямоугольник и
координаты точки.


Практическое задание №7

Задание 1
Создать массив из 10 случайных чисел и написать несколько
функций для работы с ним.
1
Функция принимает массив и выводит его на экран.
2
Функция принимает массив и выводит только четные
элементы.
3
Функция принимает массив и возвращает сумму всех
элементов массива.
4
Функция принимает массив и возвращает его максималь-
ный элемент.
5
Функция добавления нового элемента в массив по ука-
занному индексу.
6
Функция удаления элемента из массива по указанному
индексу.
Задание 2
Создать еще один массив из 5 случайных чисел и написать
следующие функции.
1
Функция принимает 2 массива и возвращает новый мас-
сив, в котором собраны все элементы из двух массивов
без повторений.
2
Функция принимает 2 массива и возвращает новый массив,
в котором собраны общие элементы (то есть элементы,
которые встречаются и в первом и во втором массивах)
без повторений.
3
Функция принимает 2 массива и возвращает новый мас-
сив, в котором собраны все элементы из первого массива,
которых нет во втором массиве.
Задание 3
Создать массив фруктов и отсортировать его по алфавиту.
Написать следующие функции.
1
Вывод на экран с помощью document.write() в виде списка
(с помощью тегов ul и li).
2
Поиск фрукта в массиве. Функция принимает название
фрукта и возвращает индекс найденного элемента или -1,
если не найден. Поиск должен быть нерегистрозависимым.

Практическое задание №8
Задание
1
Написать функцию, которая принимает 2 строки и срав-
нивает их длину. Функция возвращает 1, если в первой
строке больше символов, чем во второй; -1 – если во вто-
рой больше символов, чем в первой; или 0 – если строки
одинаковой длины.
2
Написать функцию, которая переводит в верхний регистр
первый символ переданной строки.
3
Написать функцию, которая считает количество гласных
букв в переданной строке.
4
Написать функцию для проверки спама в переданной
строке. Функция возвращает true, если строка содержит
спам. Спамом считать следующие слова:100% бесплатно, увеличение продаж, только сегодня, не удаляйте, ххх. Функция должна быть нечувствительна к регистру.
5
Написать функцию сокращения строки. Функция прини-
мает строку и ее максимальную длину. Если длина строки
больше, чем максимальная, то необходимо отбросить
лишние символы, добавив вместо них троеточие.
Например: truncate(“Hello,world!”,8) должна вернуть.
6
Написать функцию, которая проверяет, является ли пере-
данная строка палиндромом.
7
Написать функцию, которая считает количество слов в
предложении.
8
Написать функцию, которая возвращает самое длинное
слово из предложения.
9
Написать функцию, которая считает среднюю длину слова
в предложении.
10 Написать функцию, которая принимает строку и символ
и выводит индексы, по которым находится этот символ в
строке. Также вывести, сколько всего раз встречается этот
символ в строке.


.





hbh