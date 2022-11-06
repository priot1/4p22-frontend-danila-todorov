

    /* Для вызова следующего значения числа фабиначи создаём функцию */
    function getCounter() {
    let counter = 1;
    return function() {
    return counter++;
}
}
    let count = getCounter();



    function Fibonacci(func){
    let i = func();

    let x = 0;
    let y = 1;
    if(i===1) {
    let fibonacci = 0;
    let main_result = document.querySelector('.main-fibonacci__result');
    main_result.innerHTML = fibonacci;
}
    else if(i===2){
    let fibonacci = 1;
    let main_result = document.querySelector('.main-fibonacci__result');
    main_result.innerHTML = fibonacci;
}else {
    // Даллее расчитываем с помощью цикла
    for (let n = 2; n++, n <= i;) {
    if (n % 2 === 0) {
    x = y + x;
} else {
    y = x + y;
}
}
    let fibonacci = x + y;
    let main_result = document.querySelector('.main-fibonacci__result');
    main_result.innerHTML = fibonacci;



}

}
