const list = document.getElementById("shopping-list");


const items = ["Item A", "Item B", "Item C"];


items.forEach(item => {
  const li = document.createElement("li");
  li.textContent = item;
  list.appendChild(li);
});