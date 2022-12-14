
/* Получаем данные всех пользователей */

fetch('https://reqres.in/api/users')
    .then((response) => response.json())
    .then((result) => {
        const usersData = result.data;
        let arrayKeys = [];
        let arrayKeysFilter = [];

        /* Выводим в консоль фамилии всех пользователей в цикле; */

        console.log('Пункт  №2:');
        usersData.map((element) => {
            console.log(' ' + element.last_name);
        });
        console.log('-----------');

        /* Выводим все данные всех пользователей, фамилия которых начинается на F; */

        console.log('-----------');
        console.log('Пункт  №3:');
        usersData.forEach((element) => {
            if (element.last_name[0] === 'F') {
                console.log('  ' + element.last_name + ':');
                for (const item in element) {
                    console.log(' '.repeat(4) + item + ': ' + element[item] + ',');
                }
            }
        });
        console.log('-----------');

        /* Выводи следующее предложение: Наша база содержит данные следующих пользователей: и далее в этой же строке через запятую имена и фамилии всех пользователей. Использовать метод reduce;*/

        console.log('-----------');
        console.log('Пункт  №4:');
        const reduceUser = usersData.reduce((accumulator, item, index, array) => {
            let resString = `${item.first_name} ${item.last_name}`;
            if (index !== array.length - 1) {
                resString += ', ';
            } else {
                resString += '.';
            }
            accumulator += resString;
            return accumulator;
        }, '');
        console.log(
            `Наша база содержит данные следующих пользователей: ${reduceUser}`);
        console.log('-----------');

        /* Выводи названия всех ключей в объекте пользователя; */

        console.log('-----------');
        console.log('Пункт  №5:');
        arrayKeys = usersData.reduce((container, obj) => [...container, ...Object.keys(obj)], []);
        arrayKeysFilter = [...new Set(arrayKeys)];
        console.log(arrayKeysFilter.join(', '));
    })
    .catch((error) => {
        console.log('Описание ошибки', error);
    });