// change the nav bar style
function addrmvClass(param) {
        let navbar = document.querySelector('nav');
    let scrollVal = window.scrollY;
    if(scrollVal < 1){
        navbar.classList.remove('window-scroll-Down');
        navbar.classList.add('window-scroll-Up')
    }else{
        navbar.classList.add('window-scroll-Down')
        navbar.classList.remove('window-scroll-Up');
    }
    // console.log(scrollVal)
}
 window.addEventListener('scroll',addrmvClass)


//  faq cards 
const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq =>{
    faq.addEventListener("click", ()=>{
        faq.classList.toggle('open');
        faq.style.transition =`${400}ms`
        console.log(faq)

        //CHANGE ICON
        const icon = faq.querySelector('.faq_icon i');
        if(icon.className === 'uil uil-plus'){
            icon.className = 'uil uil-minus'
        }else{
            icon.className = 'uil uil-plus'

        }
    })
})


// menu for 1024px se=creens
const menu = document.querySelector('.nav_menu') 
const menuBtn = document.querySelector('#open-menu-btn') 
const CloseBtn = document.querySelector('#close-menu-btn') 

menuBtn.addEventListener("click",()=>{
    menu.style.display = 'flex'
    CloseBtn.style.display = 'inline-block'
    menuBtn.style.display = "none"
})

// close nav menu
const closeNav = ()=>{
    menu.style.display = "none"
    CloseBtn.style.display = "none"
    menuBtn.style.display = "inline-block"
}
CloseBtn.addEventListener('click',closeNav)