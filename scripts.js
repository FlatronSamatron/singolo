const navLi = document.querySelectorAll('.headeer__navigation>li>a');

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
const ok = document.querySelector('.ok')
const subject = document.querySelector('input[name=input-subject]')
const comment = document.querySelector('textarea[name=comment]')
const firstP = document.querySelector('.first-p')
const secondP = document.querySelector('.second-p')


slides[0].style.display = 'block';
let slideCount = 0

navLi.forEach(el=>el.addEventListener("click", addActive));

[left,right].forEach(el => el.addEventListener("click",moveSlide))

verticalImg.addEventListener("click",displayBlackLeft)
horizontalImg.addEventListener("click",displayBlackRight)

portfolioLi.forEach(el => el.addEventListener('click', addActiveLi))

portfolioImgEl.forEach(el => el.addEventListener('click', addImgBorder))

formSub.addEventListener('submit', sub)
back.addEventListener('click', hideEl)
ok.addEventListener('click', hideEl)

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

function addActive(){
    navLi.forEach(el=>el.className='')
    this.classList.add('active')
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
    popup.style.top = 20+'px';
    back.style.display = 'block';
    subject.value ?  firstP.innerHTML = `Тема: ${subject.value}` : firstP.innerHTML = 'Без темы'
    comment.value ?  secondP.innerHTML = `Описание: ${comment.value}` : secondP.innerHTML = 'Без описания'
}

function hideEl(){
    popup.style.top = -1000+'vh';
    back.style.display = 'none';
}