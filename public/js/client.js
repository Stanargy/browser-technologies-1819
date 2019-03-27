const checkboxes = document.querySelectorAll("input[type='checkbox']");
const radio = document.querySelectorAll("input[type='radio']");

// checkboxes.forEach((i)=>{
//     i.addEventListener('click', () =>{ radio.forEach((e)=>{
//         e.checked = false;
//     }) })
// })


turnOff(checkboxes, radio);
turnOff(radio, checkboxes);

var mouseDetection = false;
var keyboardDetection = false;
var touchDetection = false;

// document.addEventListener('onkeyup', (()=>{console.log('keyboard detected'); keyboardDetection = true}))
// document.addEventListener('mouseenter', (()=>{console.log('mouse detected'); mouseDetection = true}))
// document.addEventListener('ontouchstart', (()=>{console.log('touchscreen detected'); touchDetection = true}))
// document.addEventListener('click', (()=>{console.log('mouse click detected')}))

function dragDrop(mouseDetection, keyboardDetection, touchDetection){
    

}

function turnOff(element, turnOffElement){
    element.forEach((i)=>{
        i.addEventListener('click', () =>{ turnOffElement.forEach((e)=>{
            e.checked = false;
        }) })
    })
}



function dragstart_handler(ev) {
    // Add the target element's id to the data transfer object
    ev.dataTransfer.setData("text/plain", ev.target.id);
    ev.dropEffect = "move";
    console.log('dragstarted')
}
function dragover_handler(ev) {
    ev.preventDefault();
    // Set the dropEffect to move
    ev.dataTransfer.dropEffect = "move"
    console.log('moving');

}
function drop_handler(ev) {
    ev.preventDefault();
    // Get the id of the target and add the moved element to the target's DOM
    var data = ev.dataTransfer.getData("text/plain");
    ev.target.appendChild(document.getElementById(data));
    console.log('drag dropped')
}