// IIFE - Immediate Invoked Function Expression

(function(){
    function Start(){
        firstName = document.getElementById('firstName').value;
        alert(`Hi ` + firstName + `! Your form is submitted sucessfully! We will contact you shortly! Thank you!`) ;

    }

    window.addEventListener("submit", Start);
})();



    // Example starter JavaScript for disabling form submissions if there are invalid fields
    (() => {
        'use strict'
      
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        const forms = document.querySelectorAll('.needs-validation')

        // Loop over them and prevent submission
        Array.from(forms).forEach(form => {
          form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
              event.preventDefault()
              event.stopPropagation()
            }
            form.classList.add('was-validated')
            
          }, false)
        })


      })()
      
      
      
  