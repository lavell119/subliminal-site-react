const nextButton=document.getElementById('next-button')
const buySelector=document.getElementById('buy-selector')
const btcOption=document.querySelector('.btc-option')
const ethOption=document.querySelector('.eth-option')
const selector=document.querySelector('.selector')
const priceOption=document.querySelectorAll('.price-option')
const priceOptions=document.querySelector('.price-options')
const confirmation=document.querySelector('.confirmation')
const dollarAmount=document.querySelector('.dollar-amount')
const subTitle=document.querySelector('.sub-title')
const confirmationButton=document.querySelectorAll('.confirmation-button')
const paymentMessage=document.querySelector('.payment-message')
const paymentButton=document.querySelector('.payment-message-btn')
let response=document.querySelector('.response')
const ticker=document.querySelectorAll('.ticker')
const homeButton=document.querySelector('.home-button')



homeButton.addEventListener('click', () => location.reload())

btcOption.addEventListener('click', ()=> {
buySelector.classList.add('hidden')
priceOptions.classList.add('show')
subTitle.innerText='HOW MUCH WOULD YOU LIKE TO BUY?'
})






ethOption.addEventListener('click', ()=> {buySelector.classList.add('hidden')
priceOptions.classList.add('show')
subTitle.innerText='HOW MUCH WOULD YOU LIKE TO BUY?'})

priceOption.forEach(option=>option.addEventListener('click', ()=> {priceOptions.classList.remove('show')
    confirmation.classList.add('show')
    let inText=option.innerText
    dollarAmount.innerText=inText
    subTitle.innerText='CONFIRMATION'
}))

/*fetch('https://blockchain.info/tobtc?currency=USD&value=500')
.then(res=>res.json())
.then(data=>console.log(data))



let getLivePrice=(ticker)=>{
  fetch('https://blockchain.info/tobtc?currency=USD&value=500')
.then(res=>res.json())
.then(res=>res.innerText=ticker.innerText)
}

ticker.forEach(ticker=> {
  getLivePrice(ticker)
  
})

*/

confirmationButton.forEach(button=>button.addEventListener('click', ()=>{
confirmation.classList.remove('show')
subTitle.innerText='PAYMENT MESSAGE'
paymentMessage.classList.add('show')
}))

//let dataSet=priceOption.dataset.purchase

paymentButton.addEventListener('click', (priceOption, dataset)=> {
    switch (dataset) {
        case '10BTC':
          Window.open('www.netflix.com')
          break;
        case '25BTC':
          //Statements executed when the
          //result of expression matches value2
          break;
        case '50BTC':
          //Statements executed when the
          //result of expression matches valueN
          break;
        case '100BTC':
          //Statements executed when the
          //result of expression matches valueN
        break;
        case '200BTC':
          //Statements executed when the
          //result of expression matches valueN
        break;
        case '500BTC':
          //Statements executed when the
          //result of expression matches valueN
        break;
}})









