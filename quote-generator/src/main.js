
const API_URL = "https://api.quotable.io/random"
const quoute = document.getElementsByClassName('quote')[0]
const author = document.getElementsByClassName('author')[0]
const quoteBtn = document.getElementById('quoteBtn')
const loading = document.getElementsByClassName('loading')[0]


async function getRamdonQuote(){
    const response = await fetch(API_URL)
    console.log(response)
    const data = await response.json()
    console.log(data)
    console.log(data.content)
    return data.content
}

function displayQuote(){
    getRamdonQuote().then(quote => {
        console.log(hola)
    })
}


quoteBtn.addEventListener('click', displayQuote)