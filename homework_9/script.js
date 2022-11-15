document.querySelector('button').addEventListener('click', myClick)

function myClick() {
    let result = '';

    let first__number = document.querySelector('.first__number').value;
    let sign = document.querySelector('.sign').value;
    let second__number = document.querySelector('.second__number').value;

    if ( first__number.trim() === '') {
                            result = 'Первое число не указано';
    } else if (second__number.trim() === '') {
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
                if(Number(first__number) / Number(second__number)===Infinity){
                    result ='Операция не корректна';
                }else {
                    result = Number(first__number) / Number(second__number);
                }
                break;
            default:
                result = 'Программа не поддерживает такую операцию';
                break;
        }

    let main_result = document.querySelector('.main-calculator__result');
    main_result.innerHTML = result;
}