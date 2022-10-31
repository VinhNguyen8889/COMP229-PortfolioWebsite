/**
 * Filename: app.js
 * Student name: Nguyen, Huynh Quang Vinh
 * Student ID: 301214805
 * Date: Oct 1st, 2022
 */
// show an alert message that the form is submitted sucessfully
(function(){
    function Start(){
        firstName = document.getElementById('firstName').value;
        alert(`Hi ` + firstName + `! Your form is submitted sucessfully! We will contact you shortly! Thank you!`) ;
    }

    window.addEventListener("submit", Start);
})();



    // Form validation - get from Bootstrap 5.0 Docs
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
      
      
      
  