/* ================= SHOW MENU ====================== */
const navMenu = document.getElementById("nav-menu");
      navToggle = document.getElementById("nav-toggle");
      navClose = document.getElementById("nav-close");

/** Menu Show */
if(navToggle){
    navToggle.addEventListener("click", () => {
        navMenu.classList.add("show-menu");
});
};
/** Menu Hidden */
if(navClose){
    navClose.addEventListener("click", () => {
        navMenu.classList.remove("show-menu");        
});
};

/* ================= REMOVE MENU MOBILE ====================== */
const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu');

    navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/* ================= CHANGE BACKGROUND HEADER ====================== */
const bgHeader = () =>{
    const header = document.getElementById('header');
    //Ganti backgorund jika offset bottom melebihi 50
    this.scrollY >= 50 ? header.classList.add('bg-header')
                       : header.classList.remove('bg-header');
}
window.addEventListener('scroll', bgHeader);
bgHeader()
/* ================= SWIPER SERVICES ====================== */
const swiperServices = new Swiper('.services__swiper', {
    loop: true,
    grabCursor: true,
    spaceBetween: 24,
    slidesPerView: 'auto',
    // Button next dan prev
    navigation:{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },

});

/* ================= SHOW SCROLL UP ====================== */
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up');
    // akan muncul jika scroll lebih dari 350px height
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll');
};
window.addEventListener('scroll', scrollUp);
scrollUp()
/* ================= SCROLL SECTION ACTIVE LINK ====================== */
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollDown = window.scrollY

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
              sectionTop = current.offsetTop - 58
              sectionId = current.getAttribute('id')
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        } else{
            sectionsClass.classList.remove('active-link')
        }
    })
}

window.addEventListener('scroll', scrollActive)
/* ================= SCROLL REVEAL ANIMATION ====================== */
