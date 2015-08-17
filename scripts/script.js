$('#pros-add').addEvent('click', addListItem);
$('#cons-add').addEvent('click', addListItem);


function addListItem (event) {
    var parent = event.target.parentNode,
        input = parent.children[0],
        prosList = $('#pros-list'),
        consList = $('#cons-list'),
        value = input.value;

    if (input.value === '') {
        return;
    }

    //TODO refactor that sh*t
    if (parent.classList.contains('pros')) {
        prosList.appendChild(element('li', value +
            '<input class="pros-list-input" onchange="calculate()" type="number" max="5" min="0" value="3">' +
            '<button onclick="deleteItem(event)">X</button>'));
    } else if (parent.classList.contains('cons')) {
        consList.appendChild(element('li', value +
            '<input class="pros-list-input" onchange="calculate()" type="number" max="5" min="0" value="3">' +
            '<button onclick="deleteItem(event)">X</button>'));
    }
    input.value = '';

    calculate();
}

function deleteItem(event) {
    event.target.parentNode.parentNode.removeChild(event.target.parentNode);
    calculate();
}

function calculate () {
    var consSum  = 0,
        prosSum  = 0,
        prosList = $('#pros-list').children,
        consList = $('#cons-list').children,
        i        = 0;

    for (i = 0; i < prosList.length; i++) {
        prosSum += prosList[i].children[0].value | 0;
    }
    for (i = 0; i < consList.length; i++) {
        consSum += consList[i].children[0].value | 0;
    }

    $('#result').innerHTML = consSum + ' : ' + prosSum;
}

// My own f**ng jQuery :)
function $ (arg) {
    var result,
        starts;

    if (typeof arg === 'string') {
        starts = arg[0];

        if (starts === '.') {
            result = document.getElementsByClassName(arg.substr(1));
            result = Array.prototype.slice.call(result);
        } else if (starts === '#') {
            result = document.getElementById(arg.substr(1));
        }
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
