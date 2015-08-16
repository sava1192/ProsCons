get('pros-add').addEvent('click', addListItem);
get('cons-add').addEvent('click', addListItem);

function addListItem (event) {
    var parent = event.target.parentNode;
    var input = parent.children[0];
    var prosList = get('pros-list');
    var consList = get('cons-list');
    var listITem = input.value;
    listITem += '<input type="number" max="5" min="0" value="3">';

    if (input.value === '') {
        return;
    }

    if (parent.classList.contains('pros')) {
        prosList.appendChild(element('li', listITem));
    } else if (parent.classList.contains('cons')) {
        consList.appendChild(element('li', listITem));
    }
    input.value = '';
}

function get (arg) {
    var result;
    if (typeof arg === 'string' && arg[0] === '.'){
        result = document.getElementsByClassName(arg);
    } else {
        result = document.getElementById(arg);
    }
    result.addEvent = result.addEventListener;

    return result;
}

function element (name, content) {
    var newElement = document.createElement(name);
    if (content) {
        newElement.innerHTML = content;
    }

    return newElement;
}

// var el = document.getElementById('minus');
// el.addEventListener('click', addMinus);
// function addMinus() {
//     var list = document.getElementById('cons');
//     var li = document.createElement('LI');
//     li.innerHTML = document.getElementById('second_inp').value;
//     list.appendChild(li);
// };
// var el = document.getElementById('plus');
// el.addEventListener('click', addPlus);
// function addPlus() {
//     var list = document.getElementById('pros');
//     var li = document.createElement('LI');
//     li.innerHTML = document.getElementById('first_inp').value;
//     list.appendChild(li);
// };
