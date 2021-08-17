var a = +prompt('Введите первую цифру!') 
var b = +prompt('Введите вторую цифру!') 
var c  = +prompt('Введите третью цифру!') 


if (a <= b && a >= c || a >= b && a <= c) {
    alert('среднее число ' + a)
}else if (b <= a && b >= c || b >= a && b <= c) {
    alert('среднее число '+ b) 
}else if (c <= a && c >= b || c >= a && c <= b) {
    alert('среднее число ' + c)
}