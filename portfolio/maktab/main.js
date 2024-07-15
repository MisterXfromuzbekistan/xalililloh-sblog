const loaded = () => console.log("sahifa yulandi");
const sidebar = document.getElementById("sidebar");
const cards = document.getElementById("cards");
const selected = document.getElementById("selected");
const toggle = document.getElementById("toggle");
const body = document.querySelector("body");
const toggleSidebar =()=>{
// if(sidebar.className!=="")sidebar.className= ""; else sidebar.className = "hide";
if(sidebar.classList.contains("hide"))sidebar.classList.remove("hide");
else sidebar.classList.add("hide")
}
const keyUp = (e)=>{
if(e.key === "Escape") sidebar.classList.add("hide");
}
for (const card of cards.children) {
console.log(card.children[0]);
card.children[0].onclick = () => {
const menu = card.children[0].innerHTML;
console.log(menu);
selected.innerHTML= menu;
}
}
toggle.onclick = function () {
toggle.classList.toggle('active')
}

const darkModeToggle = document.getElementById('dark-mode-toggle');
darkModeToggle.addEventListener('click', () => {
body.classList.toggle('dark-mode');
});