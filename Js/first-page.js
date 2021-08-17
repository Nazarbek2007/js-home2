var one = +prompt('Введите свой возраст')


if(one == 0) {
    alert('Что-то пошло не так')
} else if(one <= 18) {
    alert('Вы еще молоды.Вам нужно учиться!')
} else if (one < 50 && one > 18 || one == 50) {
    alert('Вам нужно работать!')
} else if (one < 59 && one > 50 || one == 59) {
    alert('Вам скоро на пенсию!')
} else if (one < 150 && one > 59|| one == 150) {
    alert('Вы пенсионер!')
} else if (one > 150) {
    alert('Что-то пошло не так!')
} 