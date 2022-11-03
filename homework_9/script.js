document.querySelector('button').addEventListener('click', myClick)

function myClick() {
    let result = '';

    let first__number = document.querySelector('.first__number').value;
    let sign = document.querySelector('.sign').value;
    let second__number = document.querySelector('.second__number').value;

    if (second__number === '0' && sign === '/') {
        result = 'Операция не корректна';
    } else if (first__number === '' || first__number.trim() === '') {
        /*let error = document.querySelector('.error');
            error.innerHTML = "Поле перврое число не заполнено" ;*/
        result = 'Первое число не указано';
    } else if (second__number === '' || second__number.trim() === '') {
        /*let error = document.querySelector('.error');
            error.innerHTML = "Поле перврое число не заполнено" ;*/
        result = 'Второе число не указано';

    } else if (isNaN(first__number) || isNaN(second__number)) {

        result = "неправильное число";
    } else

        switch (sign) {
            case '' :
                result = 'Не выбранна операция';
                break;
            case  '+' :
                result = Number(first__number) + Number(second__number);
                break;

            case '-' :
                result = Number(first__number) - Number(second__number);
                break;
            case '*' :
                result = Number(first__number) * Number(second__number);
                break;
            case '/' :
                result = Number(first__number) / Number(second__number);
                break;
            default:
                result = 'Программа не поддерживает такую операцию';
                break;
        }

    let main_result = document.querySelector('.main-calculator__result');
    main_result.innerHTML = result;
}