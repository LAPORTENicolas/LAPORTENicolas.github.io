// Input select Earn section
const   activeInput   = document.querySelector('.active-select')
const   optionInput   = {
    1: document.querySelector('.two'),
    2: document.querySelector('.three'),
    3: document.querySelector('.four'),
    4: document.querySelector('.five')
}

let     open          = false

activeInput.addEventListener('click', _ => {
    if (open) {
        for(let i in optionInput) {
            optionInput[i].style.display = 'none'
        }
    } else {
        for (let i in optionInput) {
            optionInput[i].style.display = 'block'
        }
    }
    open = !open
    console.log(activeInput)
})

for (let i in optionInput) {
    optionInput[i].addEventListener('click', _ => {
        const newValue = optionInput[i].innerHTML


        activeInput.innerHTML = newValue

        for(let i in optionInput) {
            optionInput[i].style.display = 'none'
        }
        open = !open
    })
}

const revenuesEstimate  = {
    'KH/s': 0.00002234,
    'MH/s': 0.02234,
    'GH/s': 22.34,
    'TH/s': 22320
}
const calculate         = document.querySelector('#calculate')

calculate.addEventListener('click', _ => {
    const hashRate      = document.querySelector('#hashRate').value
    const result        = revenuesEstimate[activeInput.innerHTML] * hashRate

    const ethPrice      = 1595
    const ethRevenue    = document.querySelector('#revenueETH')
    const usdRevenue    = document.querySelector('#revenueUSD')

    ethRevenue.innerHTML = result + " ETH"
    usdRevenue.innerHTML = " ($" + parseInt(result * ethPrice) + ")"
    ethRevenue.append(usdRevenue)
})