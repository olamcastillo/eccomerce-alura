import * as v from "./var.js"
import {Hompage} from "./homepage.js"
import { Cart } from "./cart.js"

export const home = new Hompage
export const cart = new Cart    
window.addEventListener("DOMContentLoaded", ()=>{

  
    window.addEventListener("scroll",()=>{
        home.scrollTrack()
        home.displayTopBtn()
    })

    v.navToggler.addEventListener('click', () => {
      v.navLinks.classList.toggle('show-navbar-links')
    })

    v.toTop.addEventListener("click", ()=>{
        home.goTop();  
    })


    
    v.footerIcons.forEach(items=>{
        items.addEventListener("click", (e)=>{
            e.preventDefault()
            home.footerIcons(e)
        })
    })

    home.featuredProduct()
    .then((result)=>{
        home.displayFeatured(result)
    })

    cart.startApp()

   home.scrollDown()

})

