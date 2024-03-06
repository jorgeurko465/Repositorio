function suma (x, y, resultado){
    var x = parseFloat (document.getElementById("num1").value);
    var y = parseFloat (document.getElementById("num2").value);
    resultado = x + y;
    return resultado;
}
function resta (x, y, resultado){
    var x = parseFloat (document.getElementById("num1").value);
    var y = parseFloat (document.getElementById("num2").value);
    resultado = x - y;
    return resultado;
}
function division (x, y, resultado){
    var x = parseFloat (document.getElementById("num1").value);
    var y = parseFloat (document.getElementById("num2").value);
    resultado = x / y;
    return resultado;
}
function multiplicacion (x, y, resultado){
    var x = parseFloat (document.getElementById("num1").value);
    var y = parseFloat (document.getElementById("num2").value);
    resultado = x * y;
    return resultado;
}