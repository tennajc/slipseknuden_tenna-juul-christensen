(() => {
    document.addEventListener("DOMContentLoaded", function(event) {

    });
})();

//  MANGLER: At få stjernen op ved siden af input feltet
function formular(form)
{
    "use strict";


//  Navn
if(form.forNavn.value.length === 0){
    form.forNavn.style.backgroundColor = "RGBA(53,69,107, 0.2)"

            
     return false; 
    }
    else{
        form.forNavn.style.backgroundColor = "transparent"; 
    }
    

// Email
if(form.email.value.length == 0) {
		
        form.email.style.backgroundColor = "RGBA(53,69,107, 0.2)"
        
	return false;
	}
	else{
		form.email.style.backgroundColor = "transparent";
    }
   
// Besked
if(form.user_message.value.length === 0){
        
        form.user_message.style.backgroundColor = "RGBA(53,69,107, 0.2)";


     return false; 
    }
   else{
        form.user_message.style.backgroundColor = "transparent"; 
    }

}

