//      check for features
// Images
// Custom fonts
// Color
// Mouse and trackpad
// Javascript
// Cookies
// Localstorage
// Broadband Connection


const featureFunction = {
    existFeature: function(){
       if(localStorage){
           const submitButtons = document.querySelectorAll('button')
         submitButtons.forEach(button =>{
             button.addEventListener('click', (event)=>{
                 const checkboxes = document.querySelectorAll("input[type='checkbox']");
                 const radio = document.querySelectorAll("input[type='radio']")
                 
                 console.log(checkboxes)
                 console.log(radio)
                 
                
                 radio.forEach(box=>{
                     console.log(box)
                    })
                 checkboxes.forEach(box=>{
                     console.log(box)
                    })
                    debugger;

               })
         })
       }
    }
}
featureFunction.existFeature()
