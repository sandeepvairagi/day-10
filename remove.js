const list = document.getElementById('myList');


if (list && list.children[1]) {
    list.removeChild(list.children[1]);
}