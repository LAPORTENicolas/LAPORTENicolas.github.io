let header          = document.querySelector('header')
let burgerMenu      = document.querySelector('#header-icon')
let input           = document.querySelector('#input-header')
let forLater        = document.querySelector('#for_later')
let kill            = document.querySelector('#close')
let plani           = document.querySelector('#planifier')
let locationInput   = document.querySelector('#locationInput')
let remove          = document.querySelector('#remove');
let select          = {
    input: document.querySelector('#printList'),
    open: false
};

burgerMenu.addEventListener('click', _ => {
    let menu = document.querySelector('#menu')
    let exit = document.querySelector('#exit')

    menu.classList.remove('hidden');
    menu.classList.remove('hidden-animation');
    menu.classList.add('menu-animation');

    exit.addEventListener('click', _ => {
        menu.classList.remove('menu-animation')
        menu.classList.add('hidden-animation')
    })

})
select.input.addEventListener('click', _ => {
    let list = document.querySelector('#list')
    if (select.open){
        list.classList.remove('print')
        select.open = false
    } else {
        list.classList.add('print')
        select.open = true
    }
})
forLater.addEventListener('click', _ => {
    document.querySelector('#modal').classList.remove('hidden')

    dateInput()
    timeInput()
})
kill.addEventListener('click', _ => {
    document.querySelector('#modal').classList.add('hidden')
})
plani.addEventListener('click', _ => {

})
remove.addEventListener('click', _ => {
    locationInput.value = ''
    document.querySelector('#remove').classList.add('hide')
})


const onChange = _ => {
    if (locationInput.value.length > 0){
        document.querySelector('#remove').classList.remove('hide')
    } else {
        document.querySelector('#remove').classList.add('hide')
    }
}
const dateInput     = _ => {
    let dateParent  = document.querySelector('#date_select')
    let date        =  new Date()
    let text;

    for (let i=0;i<7;i++) {
        let dateOption  = document.createElement('option');
        let tmpDate = date.setDate(date.getDate() + 1)

        switch (i) {
            case 0:
                text = document.createTextNode('Aujourd\'hui, ' + new Intl.DateTimeFormat('fr-FR', {day: '2-digit', weekday: 'short', month: 'long'}).format(tmpDate));
                break

            case 1:
                text = document.createTextNode('Demain, ' + new Intl.DateTimeFormat('fr-FR',  {day: '2-digit', weekday: 'short', month: 'long'}).format(tmpDate));
                break

            default:
                text = document.createTextNode(new Intl.DateTimeFormat('fr-FR', {day: '2-digit', weekday: 'short', month: 'long'}).format(tmpDate));
                break
        }

        dateOption.appendChild(text)
        dateParent.appendChild(dateOption)
    }
}
const timeInput     = _ => {
    let timeParent  = document.querySelector('#time_select')
    let date        = new Date()
    let time        = {}
    let tmpDate     = date;
    let whi         = true

    if (date.getMinutes() > 0) {
        date.getMinutes() > 30 ? date.setMinutes(0) : date.setMinutes(30)
    }

    while (whi){
        let option = document.createElement('option');
        tmpDate = date;
        date        =  new Date(date.getTime() + 30*60000)
        time = {
            min: new Intl.DateTimeFormat('fr-FR', {minute: '2-digit', hour: '2-digit'}).format(tmpDate),
            max: new Intl.DateTimeFormat('fr-FR', {minute: '2-digit', hour: '2-digit'}).format(date)
        }

        let text = document.createTextNode(time.min + ' - ' + time.max)

        option.appendChild(text)
        option.value = JSON.stringify(time);
        timeParent.appendChild(option)

        if (date.getHours() === 0 && date.getMinutes() === 0){
            whi = false
        }
    }
}
const scrollHeader  = _ => {
    if (this.scrollY > 0){
        header.classList = 'header-white'
        input.classList.add('--hidden')
        header.style.borderBottom = '2px solid #e2e2e2'
        this.scrollY > 450 && input.classList.add('animate')
        this.scrollY < 450 && input.classList.remove('animate')
    } else if (this.scrollY === 0){
        header.style.borderBottom = 'none'
        header.classList = 'header-none'
        input.classList.remove('--hidden')
    }
}