const form = document.querySelector('form')
const currentPage = document.querySelector('body').dataset.block

if (currentPage === 'form') {
  const beginBtn = document.querySelector('#begin')
  const ageInput = document.querySelector('#validationAge')
  const sexInput = document.querySelector('#validationSex')

  beginBtn.addEventListener('click', (event) => {
    event.preventDefault()
    event.stopPropagation()
    let dateObBirth = ageInput.value
    const sex = sexInput.value
    dateObBirth = dateObBirth.split('-').reverse().join('.')

    if (dateObBirth !== '' && sex !== '') {
      window.open('question.html', '_self', false)
    } else {
      form.classList.add('was-validated')
    }
  })
} else if (currentPage === 'test') {
  const radioBnts = document.querySelectorAll('.answer input[type="radio"]')

  /*   let error = true
  const isChecked = radioBnts.forEach((e) => {
    if (e.checked) error = false
  })
  if (!error) {
    form.classList.add('was-validated')
  } */
}
