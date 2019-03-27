const checkboxes = document.querySelectorAll("input[type='checkbox']");
const radio = document.querySelectorAll("input[type='radio']");
console.log(radio)

// checkboxes.forEach((i)=>{
//     i.addEventListener('click', () =>{ radio.forEach((e)=>{
//         e.checked = false;
//     }) })
// })


iets(checkboxes, radio);
iets(radio, checkboxes);

function iets(element, turnOffElement){
    element.forEach((i)=>{
        i.addEventListener('click', () =>{ turnOffElement.forEach((e)=>{
            e.checked = false;
        }) })
    })
}