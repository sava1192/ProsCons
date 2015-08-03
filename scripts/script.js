var el = document.getElementById('minus');
el.addEventListener('click', myFunction);
function myFunction() {
    var list = document.getElementById('cons');
    var li = document.createElement('LI'); 
    li.innerHTML = document.getElementById('a').value;
    list.appendChild(li);
};
