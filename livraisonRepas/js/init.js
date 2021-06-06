let picHeroBanner1      = document.querySelector('#picHeroBanner1')
let picHeroBanner2      = document.querySelector('#picHeroBanner2')
let heroBanner          = document.querySelector('#hero-banner')
let random              = Math.round(Math.random()*3)

switch (random) {
    case 0:
        picHeroBanner1.src                  = 'img/png/heroBannerIMG1.png'
        picHeroBanner2.src                  = 'img/png/heroBannerIMG2.png'
        heroBanner.style.backgroundColor    = '#fa9269'
        break

    case 1:
        picHeroBanner1.src                  = 'img/png/heroBannerIMG3.png'
        picHeroBanner2.src                  = 'img/png/heroBannerIMG4.png'
        heroBanner.style.backgroundColor    = '#ffd7d2'
        break

    case 2:
        picHeroBanner1.src                  = 'img/png/heroBannerIMG5.png'
        picHeroBanner2.src                  = 'img/png/heroBannerIMG6.png'
        heroBanner.style.backgroundColor    = '#fff2d9'
        break

    case 3:
        picHeroBanner1.src                  = 'img/png/heroBannerIMG7.png'
        picHeroBanner2.src                  = 'img/png/heroBannerIMG8.png'
        heroBanner.style.backgroundColor    = '#ffc043'
        break
}