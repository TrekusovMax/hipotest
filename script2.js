let error = false

var forms = document.getElementsByClassName('needs-validation')
  // Loop over them and prevent submission
var validation = Array.prototype.filter.call(
    forms,
     (form) => {
      form.addEventListener(
        'click',
        function (event) {
          if (form.checkValidity() === false && error) {
            event.preventDefault()
            event.stopPropagation()            
          }
          form.classList.add('was-validated')
        },
        false,
      )
    },
  )



if(!error){
  console.log(error);
const begin = document.querySelector('#begin')
    const form = document.querySelector('form')
    
    if(form.classList.contains('was-validated')){

        begin.addEventListener('click', (event) => {
          event.preventDefault()
          window.open('question.html', '_self', false)
        })      
    }
  }