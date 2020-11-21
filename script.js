document.querySelector('.add-form__submit-button').addEventListener('click', openForm);
document.querySelector('.add-form__button-link').addEventListener('click', addItem);
let todo;
function toLocal() {
    todo = list.innerHTML;
    localStorage.setItem('todo', todo);
}
 function openForm(e) {
     e.preventDefault();
     document.querySelector('.popup').classList.add('active');
     toLocal();
 }
 function addItem(e) {
     e.preventDefault();

     let inputText = document.querySelector('.add-form__text-input');
     let inputTextValue = inputText.value;

     let items = document.querySelector('.items');
     let oldHtmlText = items.innerHTML;
     items.innerHTML = `<div class="item"><label class="checkbox"><input type="checkbox"><div class="checkbox__text"></div></label><p>${inputTextValue}</p></div>${oldHtmlText}`;
     document.querySelector('.popup').classList.remove('active');
     inputText.value = '';
     toLocal();
 }
 if (localStorage.getItem('todo')) {
     list.innerHTML = localStorage.getItem('todo');
 }

const BURGER_MENU_ELEMENT = document.querySelector('#burger-menu');

BURGER_MENU_ELEMENT.addEventListener('click', toggleBurgerMenu);

function toggleBurgerMenu() {
    const BURGER_MENU_OPEN_CLASS = 'burger--open';
    BURGER_MENU_ELEMENT.classList.toggle(BURGER_MENU_OPEN_CLASS);
    const isOpen = BURGER_MENU_ELEMENT.classList.contains(BURGER_MENU_OPEN_CLASS);
    BURGER_MENU_ELEMENT.dispatchEvent(new CustomEvent("changeState", { detail: { isOpen } }));
}

BURGER_MENU_ELEMENT.addEventListener('changeState', changeState);
function changeState(e) {
    if (e.detail.isOpen) {
        console.log('open some menu')
    } else {
        console.log('close some menu')
    }
}

let section = document.querySelector('.section');
let themeButton = document.querySelector('.theme-button');

themeButton.onclick = function () {
    section.classList.toggle('black-theme');

}