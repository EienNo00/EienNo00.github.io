Sortable.create(staffList, {
    animation: 400,
    sort: true,
    draggable: ".item",
    ghostClass: "ghost",
    chosenClass: "chosen",
    dragClass: "drag"
});



function changerCouleur() {
    const colorPicker = document.getElementById('colorPicker');
    const selectedColor = colorPicker.value;
    document.body.style.backgroundColor = selectedColor;
}