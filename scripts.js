const navLi = document.querySelectorAll('.wrapper>nav>.headeer__navigation>li>a');
const navLiBurg = document.querySelectorAll('.burg-nav>nav>.headeer__navigation>li>a');
const header = document.querySelector('header');
const headWrap = document.querySelector('.header>.wrapper');

const left = document.querySelector('.left');
const right = document.querySelector('.right');
const slides = document.querySelectorAll('.slider>.wrapper .slides');
const slider = document.querySelector('.slider');

const verticalImg = document.querySelector('.vertical');
const horizontalImg = document.querySelector('.horizontal');
const verticalBlack = document.querySelector('.vertical-black');
const horizontalBlack = document.querySelector('.horizontal-black');

const portfolioLi = document.querySelectorAll('.portfolio__buttons>li');
const portfolioImg = document.querySelector('.portfolio__img');
const portfolioImgEl = document.querySelectorAll('.portfolio__img img');
const portfolioImgs = [
    ["assets/img/portfolio/1.png","portfolio-img-1"],
    ["assets/img/portfolio/2.png","portfolio-img-2"],
    ["assets/img/portfolio/3.png","portfolio-img-3"],
    ["assets/img/portfolio/4.png","portfolio-img-4"],
    ["assets/img/portfolio/5.png","portfolio-img-5"],
    ["assets/img/portfolio/6.png","portfolio-img-6"],
    ["assets/img/portfolio/7.png","portfolio-img-7"],
    ["assets/img/portfolio/8.png","portfolio-img-8"],
    ["assets/img/portfolio/9.png","portfolio-img-9"],
    ["assets/img/portfolio/10.png","portfolio-img10"],
    ["assets/img/portfolio/11.png","portfolio-img11"],
    ["assets/img/portfolio/12.png","portfolio-img12"]
];

const formSub = document.querySelector('.contacts_info_block form');

const popup = document.querySelector('.popup')
const back = document.querySelector('.back')
const backNav = document.querySelector('.backNav')
const ok = document.querySelector('.ok')
const name = document.querySelector('input[name=input-name]')
const mail = document.querySelector('input[name=email-adress]')
const subject = document.querySelector('input[name=input-subject]')
const comment = document.querySelector('textarea[name=comment]')
const firstP = document.querySelector('.first-p')
const secondP = document.querySelector('.second-p')

const burgMenu = document.querySelector('.burg-menu')
const burgNav = document.querySelector('.burg-nav');

if(document.body.clientWidth<1020){slides[0].style.height=447+'px'}

slides[0].style.display = 'block';
let h = window.getComputedStyle(slider,null).getPropertyValue("height");
slides.forEach(el=>el.style.height = h)
let slideCount = 0
let countBurg = 0

navLi.forEach(el=>el.addEventListener("click", addActive));
navLiBurg.forEach(el=>el.addEventListener("click", addActive));

[left,right].forEach(el => el.addEventListener("click",moveSlide))
left.addEventListener("click",leftSlide)
right.addEventListener("click",rightSlide)


verticalImg.addEventListener("click",displayBlackLeft)
horizontalImg.addEventListener("click",displayBlackRight)

portfolioLi.forEach(el => el.addEventListener('click', addActiveLi))

portfolioImgEl.forEach(el => el.addEventListener('click', addImgBorder))

formSub.addEventListener('submit', sub)
back.addEventListener('click', hideEl)
ok.addEventListener('click', hideEl)

window.addEventListener(`resize`, event => {
    let h = window.getComputedStyle(slider,null).getPropertyValue("height");
    slides.forEach(el=>el.style.height = h)
    console.log('res')
  }, false);

burgMenu.addEventListener('click', burger)
function displayBlackLeft(){
    window.getComputedStyle(verticalBlack,null).getPropertyValue("display") === 'none' ? verticalBlack.style.display = 'block' : verticalBlack.style.display = 'none'
}
function displayBlackRight(){
    window.getComputedStyle(horizontalBlack,null).getPropertyValue("display") === 'none' ? horizontalBlack.style.display = 'block' : horizontalBlack.style.display = 'none'
}

function moveSlide(){
    slideCount>0 ? slideCount-- : slideCount = slides.length-1
    slides.forEach(el=>el.style.display = 'none')
    slides[1].style.display = 'block';
    slides.forEach(el=>el.style.display = 'none')
    slides[slideCount].style.display = 'block';
    slider.style.background = window.getComputedStyle(slides[slideCount],null).getPropertyValue("background")
}
function leftSlide(){
    slides.forEach(el=>el.style.animationName = 'left')
    // console.log(window.getComputedStyle(slides[0],null).getPropertyValue("height"))
}
function rightSlide(){
    slides.forEach(el=>el.style.animationName = 'right')
}
window.addEventListener('scroll', function() {
    let top = pageYOffset;
    // console.log(top)
    if(top == 0){
        header.style.height = 89.5+'px'
        headWrap.style.alignItems = 'baseline'
        burgMenu.style.top = 35+'px'
    }else{
        header.style.height = 40+'px';
        headWrap.style.alignItems = 'center'
        burgMenu.style.top = 10+'px'
    }
    
    
    if(top <= 600){
        navLi.forEach(el=>el.className='')
        navLi[0].classList.add('active');
    } else if(top <= 1100){
        navLi.forEach(el=>el.className='')
        navLi[1].classList.add('active')
    } else if(top <= 2000){
        navLi.forEach(el=>el.className='')
        navLi[2].classList.add('active')
    } else if(top <= 2600){
        navLi.forEach(el=>el.className='')
        navLi[3].classList.add('active')
    } else {
        navLi.forEach(el=>el.className='')
        navLi[4].classList.add('active')
    }

    if(top <= 600){
        navLiBurg.forEach(el=>el.className='')
        navLiBurg[0].classList.add('active');
    } else if(top <= 1100){
        navLiBurg.forEach(el=>el.className='')
        navLiBurg[1].classList.add('active')
    } else if(top <= 2000){
        navLiBurg.forEach(el=>el.className='')
        navLiBurg[2].classList.add('active')
    } else if(top <= 2600){
        navLiBurg.forEach(el=>el.className='')
        navLiBurg[3].classList.add('active')
    } else {
        navLiBurg.forEach(el=>el.className='')
        navLiBurg[4].classList.add('active')
    }
  });

function addActive(e){
    e.preventDefault()
    // navLi.forEach(el=>el.className='')
    // this.classList.add('active')
    const blockID = this.getAttribute('href').substr(1);
    console.log(blockID)
    document.getElementById(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    })
    burgMenu.classList.toggle("burg-rotate");
        burgNav.style.left = -300+'px';
        backNav.style.display = 'none';
        countBurg = 0;
        console.log(countBurg)
}  


function addActiveLi(){
    portfolioLi.forEach(el=>el.className='')
    this.classList.add('active');
    var img = document.createElement("img");
    shakeImg()
} 

function shakeImg(){
    let portfolioImgSort = portfolioImgs.sort(function(){
        return Math.random() - 0.5;
    });
    portfolioImgSort.forEach((el,i) =>{
        portfolioImgEl[i].src = el[0];
        portfolioImgEl[i].alt = el[1]
    })
}

function addImgBorder(){
    portfolioImgEl.forEach(el=>el.className='')
    this.classList.add('img-border')
}

function sub(e){
    e.preventDefault();
    popup.style.top = 80+'px';
    back.style.display = 'block';
    subject.value ?  firstP.innerHTML = `Тема: ${subject.value}` : firstP.innerHTML = 'Без темы'
    comment.value ?  secondP.innerHTML = `Описание: ${comment.value}` : secondP.innerHTML = 'Без описания'
}

function hideEl(){
    popup.style.top = -1000+'vh';
    back.style.display = 'none';
    subject.value = ''
    comment.value = ''
    name.value = ''
    mail.value = ''
}


function burger(e){
    backNav.onclick = function(){
        burgMenu.classList.toggle("burg-rotate");
        burgNav.style.left = -300+'px';
        backNav.style.display = 'none';
        countBurg = 0;
        console.log(countBurg)
    }
    // countBurg = e.target.parentNode.getAttribute('class').split(' ')
    // console.log(e.target.parentNode.getAttribute('class').split(' '))
    countBurg == 0 ? countBurg = 1 : countBurg = 0
    burgMenu.classList.toggle("burg-rotate");
    countBurg == 1 ? burgNav.style.left = 0 : burgNav.style.left = -300+'px';
    countBurg == 1 ? backNav.style.display = 'block' : backNav.style.display = 'none';
    
}
