let num = '';
let num1 = NaN;
let num2 = NaN;
let opera = '';
let total = 0;

function number(elemento) {
    num += elemento.id;
    adicionarText(elemento.id)
}

function operation(elemento) {
    tornarNume();
    
    if(!isNaN(num1) && !isNaN(num2) ){
    calc()
    }
    
    opera = elemento.id;
    adicionarText(elemento.id);

}

function calc() {
    
    switch (opera) {
        case '+':
            total = soma(num1,num2);
            break;
        case '-':
            total = sub(num1,num2);
            break;
        case '*':
            total = mult(num1,num2);
            break;
        case '/':
            total = div(num1,num2);
            break;
    }
            
    num1 = total;
    num2 = NaN;

    adicionarResultado()

}

function tornarNume() {
    if(isNaN(num1)) {
        num1 = parseFloat(num);
        num = ''
    }else {
        num2 = parseFloat(num);
        num = ''
    }
}

function soma(x,y) {
    return x + y;
}

function sub(x,y) {
    return x - y;
}

function mult(x,y) {
    return x * y;
}

function div(x,y) {
    return x / y;
}