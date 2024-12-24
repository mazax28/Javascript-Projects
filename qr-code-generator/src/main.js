const API_URL = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data='

const generate = document.getElementById('generate')
const input = document.getElementById('input')
const qr = document.getElementById('qr')

async function generateQRCode() {
  const url = `${API_URL}${input.value}`
  qr.src = url
  qr.alt = input.value
  qr.style.display = 'block'
  console.log('QR code generated')
  
}

generate.addEventListener('click', generateQRCode)