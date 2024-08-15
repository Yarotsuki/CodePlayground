//Faire une loader
setTimeout(() => {
    document.querySelector('.preloader').style.display = "none"
}, 2000);

//Script navbar responsiv

document.addEventListener('DOMContentLoaded', function () {
    const menuHamburgerLight = document.querySelector('.menu-hamburger')
    const menuHamburgerDark = document.querySelector('.menu-hamburger-dark')
    const navLinks = document.querySelector('.nav-links')

    const menuHamburgerContainer = document.querySelector('.menu-hamburger-container')

    menuHamburgerLight.addEventListener('click', () => {
        navLinks.classList.toggle('mobile-menu')
    });

    menuHamburgerDark.addEventListener('click', () => {
        navLinks.classList.toggle('mobile-menu')
    });

    //Darkmode 

    const toggleBtn = document.getElementById('toggle-moon-sun')
    const body = document.querySelector('body')
    const text = document.getElementById('text-btn')
    const titre_site = document.querySelector('.logo')
    const loader = document.querySelector('.preloader')
    const mobile_dark_mode = document.querySelector('.nav-links')
    const moon = document.getElementById('moon')
    const sun = document.getElementById('sun')
    const code_html = document.querySelector('.intit_categ_html')
    const code_css = document.querySelector('.intit_categ_css')
    const code_js = document.querySelector('.intit_categ_js')
    const area_html = document.querySelector('.text-area-html')
    const area_css = document.querySelector('.text-area-css')
    const area_js = document.querySelector('.text-area-js')
    const iframe = document.getElementById('res')

    let darkmode = localStorage.getItem('dark-mode')

    const enableDarkMode = () => {
        body.classList.add('dark-mode-theme')
        toggleBtn.classList.add('dark-mode-toggle')
        document.querySelectorAll('.navbar-a').forEach(item => {
            item.classList.add('dark-mode-navbar-a')
        })
        loader.classList.add('preloader-dark')
        localStorage.setItem('dark-mode', 'enabled')
        menuHamburgerLight.style.display = 'block'
        menuHamburgerDark.style.display = 'none'
        mobile_dark_mode.classList.add('nav-links.dark-mode')
        moon.style.display = 'none'
        sun.style.display = 'block'
        titre_site.classList.add('dark-mode-theme-logo')
        code_html.classList.add('dark-mode-code')
        code_css.classList.add('dark-mode-code')
        code_js.classList.add('dark-mode-code')
        iframe.classList.remove('light-mode-theme-iframe')
        iframe.classList.add('dark-mode-theme-iframe')
        area_html.classList.add('dark-area')
        area_css.classList.add('dark-area')
        area_js.classList.add('dark-area')
        area_html.classList.remove('text-area-html')
        area_css.classList.remove('text-area-css')
        area_js.classList.remove('text-area-js')

    
    };

    const disableDarkMode = () => {
        body.classList.remove('dark-mode-theme')      
        toggleBtn.classList.remove('dark-mode-toggle')
        localStorage.setItem('dark-mode', 'disabled')
        document.querySelectorAll('.navbar-a').forEach(item => {
            item.classList.remove('dark-mode-navbar-a')
        })
        loader.classList.remove('preloader-dark')
        menuHamburgerLight.style.display = 'none'
        menuHamburgerDark.style.display = 'block'
        mobile_dark_mode.classList.remove('nav-links.dark-mode')
        moon.style.display = "block"
        sun.style.display = "none"
        titre_site.classList.remove('dark-mode-theme-logo')
        code_html.classList.remove('dark-mode-code')
        code_css.classList.remove('dark-mode-code')
        code_js.classList.remove('dark-mode-code')
        area_html.classList.remove('dark-area')
        area_css.classList.remove('dark-area')
        area_js.classList.remove('dark-area')
        area_html.classList.add('text-area-html')
        area_css.classList.add('text-area-css')
        area_js.classList.add('text-area-js')
        iframe.classList.remove('dark-mode-theme-iframe')
        iframe.classList.add('light-mode-theme-iframe')
    };

    if (darkmode === 'enabled') {
        enableDarkMode();
    }

    toggleBtn.onclick = function () {
        darkmode = localStorage.getItem('dark-mode')
        if (darkmode === 'disabled') {
            enableDarkMode()
        } else {   
            disableDarkMode()
        }
    };
})
