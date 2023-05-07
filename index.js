function start() {
    let div = document.getElementById('start');
    div.parentNode.removeChild(div);
    additional_description();
}
let divAdd = document.getElementById('add');

function additional_description() {
    let additional = document.createElement("div");
    additional.innerHTML = `<div class="explanation">
    <p>При нажатии на картинку, или текст (название локации), у вас будет загрузка теста, который вам нужно
    будет пройти. Нажмите на кнопку "Всё понятно!", чтобы продолжить <button onclick="remove_Additional_description()" class="understood">Всё понятно!</button></p>
    <img src="img/add1.png">
    <img src="img/load.png">
</div>`;
    additional.className = "additional_description";
    divAdd.append(additional);
}
function remove_Additional_description() {
    divAdd.parentNode.removeChild(divAdd);
    newImage();
}

let GlobalMap = document.getElementById('map');

let map1 = document.createElement("div");
let map2 = document.createElement("div");
let map3 = document.createElement("div");
let map4 = document.createElement("div");
let map5 = document.createElement("div");
map1.id = "newMap";
map2.id = "newMap";
map3.id = "newMap";
map4.id = "newMap";
map5.id = "newMap";
map1.innerHTML = `<div class="location">
<a href="tests/кодирование чисел.exe">
    <button onclick="next()"><h2>Лес кодирования и систем счисления чисел</h2>
    <img src="img/лес.jpg"></button>
</a>
</div>`;
map2.innerHTML = `<div class="location">
<a href="tests/линейные алгоритмы.exe">
    <button onclick="next()"><h2>Море линейных алгоритмов</h2>
    <img src="img/море.jpg"></button>
</a>
</div>`;
map3.innerHTML = `<div class="location">
<a href="tests/Тест_по_циклическим_алгоритмам.exe">
    <button onclick="next()"><h2>Кладбище циклических алгоритмов</h2>
    <img src="img/кладбище.jpeg"></button>
</a>
</div>`;
map4.innerHTML = `<div class="location">
<a href="tests/формулы суммы и произведения.exe">
    <button onclick="next()"><h2>Горы по формулам суммы и произведения</h2>
    <img src="img/горы.jpg"></button>
</a>
</div>`;
map5.innerHTML = ` <div class="location">
<a href="tests/разветвляющиеся алгоритмы.exe">
    <button onclick="next()"><h2>Туманный лес разветвляющихся алгоритмов </h2>
    <img src="img/вишни.jpg"></button>
</a>s
</div>`;

let i = 0;
let map = [map1, map2, map3, map4, map5];
function next() {
    if (i == 5) {
        setTimeout('final()', 300000);
    }
    setTimeout('newImage()', 300000);
}
function newImage() {   
    if (i < 5) {
        GlobalMap.append(map[i]);
        i++;
    }
    if (i > 1) {
        let div = document.getElementById('newMap');
        div.parentNode.removeChild(div);
    }
}

function final() {
    let fiiinal = document.getElementById('final');
    let finaltext = document.createElement("div");
    finaltext.innerHTML = `<h3>Поздравляю, вы прошли эту игру!</h3>
    <p>Вот вам в награду, некоторые анимации той девочки из начала :)</p>
    <div class="animationGirls">
        <img src="gif/Idle.gif" alt="">
        <img src="gif/Run.gif" alt="">
        <img src="gif/Attack-01.gif" alt="">
        <img src="gif/Dead.gif" alt="">
    </div>`;
    finaltext.className = "finaltext";
    fiiinal.append(finaltext);
}