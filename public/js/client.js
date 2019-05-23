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



// This is the drag & drop feature

const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');

//Fill Listeners
fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

//Loop through empties
for (const empty of empties) {
  empty.addEventListener('dragover', dragOver);
  empty.addEventListener('dragenter', dragEnter);
  empty.addEventListener('dragleave', dragLeave);
  empty.addEventListener('drop', dragDrop);
}

//Drag functions
function dragStart(e) {
    console.log('dragStart')
    this.classList.add('hold');
    setTimeout(() => (this.classList.replace('hold', 'invisible'), 0));
}
function dragEnd() {
    this.classList.remove('invisible');
    console.log('dragEnd')
}

function dragOver(e) {
    e.preventDefault();
    console.log('dragOver')
}

function dragEnter(e) {
    e.preventDefault();
    console.log(e)
    this.classList.toggle('hovered');
    console.log('dragEnter')
}

function dragLeave() {
    this.classList.remove('hovered');
    console.log('dragLeave')
}

function dragDrop(e) {
    console.log('dragDrop')
    console.log(e.target)
    var marginLeft = Math.floor(Math.random() * 250) + 50 + 'px';
    var marginTop = Math.floor(Math.random() * 100) + 50 + 'px';
    console.log(marginLeft + '   ' + marginTop)
    
    this.append(fill);
  
  element = e.currentTarget;
  element.style.position = 'absolute';
  element.style.opacity = 1;
  element.style.zIndex = 100;
  element.style.marginLeft = marginLeft;
  element.style.marginTop = marginTop;

  console.log('succesfully dropped')
}