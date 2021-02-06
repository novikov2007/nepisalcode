let phrases = [
    'отправить другу смешную гифку',
    'посмотреть скидки на авиабилеты',
    'разобраться, о чём читают рэперы',
    'Юрий Дудь',
    'расставить книги на полке по цвету',
    'читать про зарплаты в Сан-Франциско'
];


function getRandomElement(arr) {
    let randIndex = Math.floor(Math.random() * arr.length);
    console.log(randIndex);
    console.log(arr[randIndex]);
    return arr[randIndex];
}
let button = document.querySelector('.button');
let advice = document.querySelector('.advice');
let phrase = document.querySelector('.phrase');
let image = document.querySelector('.image');

button.addEventListener('click', function () {
    phrase.textContent = getRandomElement(phrases);
});

phrase.textContent = getRandomElement(phrases);
