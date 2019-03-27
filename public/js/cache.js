
// check for recently cached data
    var pizzaStorage = localStorage.getItem('pizzaData');

// declare forms
    var pizzaForm = document.querySelector('#pizzaForm');
    var ingredientForm = document.querySelector('#ingredientForm')
    
    // submit forms
    var submitKantEnKlaar = document.querySelector('.submitButton');
        submitKantEnKlaar.addEventListener('click', storeLocal);

        
        // store kant en klare pizza
    function storeLocal(event){

        //prevent post submit (pause until this function is finished)
        event.preventDefault();
        var pizzaData = 'test pizzaData'
    

        // check if data exists locally
        if(pizzaStorage === null){
            console.log('no saved pizza or recipe detected')
            var element = document.getElementsByClassName('selectPizza');
            
            // check for checked checkbox
            for(var i = 0; i<element.length; i++){

                if(element[i].value = true){
                    var pizzaData = element[i].id.toString();
                    console.log(pizzaData)

                    // add new data to localstorage
                    localStorage.setItem('pizzaData', pizzaData)
                    console.log('locally stored item')

                }
                else{
                    return false;
                }
            }
        }
        
        // when data exists locally do this:
        else{
            console.log('a saved pizza or recipe has been detected');
            console.log('pizzadata = ' + pizzaData)
        }

        // submit Post
        ingredientForm.submit()
        console.log(pizzaStorage);
    }