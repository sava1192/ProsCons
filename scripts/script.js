var el = document.getElementById('minus');
el.addEventListener('click', addMinus);
function addMinus() {
    var list = document.getElementById('cons');
    var li = document.createElement('LI'); 
    li.innerHTML = document.getElementById('second_inp').value;
    list.appendChild(li);
};
var el = document.getElementById('plus');
el.addEventListener('click', addPlus);
function addPlus() {
    var list = document.getElementById('pros');
    var li = document.createElement('LI'); 
    li.innerHTML = document.getElementById('first_inp').value;
    list.appendChild(li);
};
