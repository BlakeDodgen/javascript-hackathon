const submitFixedDataFromJs = async () => {
    const url = 'https://test-api.codingbootcamp.cz/api/ee1ff8bd/events/1/registrations'
    const name = document.querySelector('input[name=name]')
    const surname = document.querySelector('input[name=surname]')
    const email = document.querySelector('input[name=email]')
    

    const myDataObject = {
      "name": name.value,
      "surname": surname.value,
      "email": email.value,
    }
    const myResponse = await fetch(url, {
      "method": "POST",
      "body": JSON.stringify(myDataObject),
      "headers": {
        'Content-Type': 'application/json'
      }
    })
    const myUsableResponse = await myResponse.json()
    console.log(myUsableResponse)
}

  
const form = document.querySelector('.form')
form.addEventListener('submit', (e) => {
    e.preventDefault() 
    submitFixedDataFromJs()

});