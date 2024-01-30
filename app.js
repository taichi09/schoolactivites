const mainMenu = document.querySelector('.menu')
const closeMenu = document.querySelector('.close-menu')
const openMenu = document.querySelector('.open-menu')

openMenu.addEventListener('click',show)
closeMenu.addEventListener('click',close)

function show() {
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}

function close() {
    mainMenu.style.top = '-100%'
}

function initMap() {
    var location  = {lat: 14.119420, lng: 122.949898};
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: location
    });
    var marker = new google.maps.Marker({
        position: location,
        map: map
    });
}

const draggableElement = document.querySelector("#draggable-element");

draggableElement.addEventListener("dragstart", e => {
    e.dataTransfer.setData("text/plain", draggableElement.id);
});

for (const dropZone of document.querySelectorAll(".drop-zone")) {
    dropZone.addEventListener("dragover", e => {
        e.preventDefault();
        dropZone.classList.add("drop-zone--over");
    });

    dropZone.addEventListener("dragleave", e => {
        dropZone.classList.remove("drop-zone--over");
    });

    dropZone.addEventListener("drop", e => {
        e.preventDefault();

        const droppedElementId = e.dataTransfer.getData("text/plain");
        const droppedElement = document.getElementById(droppedElementId);

        dropZone.appendChild(droppedElement);
        dropZone.classList.remove("drop-zone--over");
    });
}

const input  = document.getElementById("type-content"),
h2 = document.getElementById("change-content");

h2.innerHTML = localStorage.getItem("value");

function display() {
    localStorage.setItem("value", input.value);
    h2.innerHTML = localStorage.getItem("value");
}

function reset() {
    input.value = '';
    localStorage.clear();
    h2.innerHTML = '';
}
