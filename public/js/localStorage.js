console.log('localstorage.js accessed')

console.log(window.location.pathname)
if(window.location.pathname !== "/"){
    document.querySelector('#checkOutWrapper').style.opacity = "1"
    let element = document.querySelectorAll('#checkoutIngredients').innerText
    if(window.localStorage){
        console.log('Feature detected: localStorage')
        localStorage.setItem('previousPizza', element)
        console.log(element + ' was stored in localStorage')
    
        }
    }

    if(window.location.pathname === ""){
        try{
            const pPizza = localStorage.getItem('previousPizza')
            console.log(pPizza)
            if(pPizza!= undefined){
                newElement(pPizza)
            }
        } catch{
            console.log(error)
        }
    }
1
    function newElement(data){
        const element = document.createElement('p')
        element.innerText = data
        document.body.append(element)
    }


