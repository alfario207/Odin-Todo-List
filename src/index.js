import "./styles.css"
import { newProject } from "./modules/dom.js";

const navbar = document.querySelectorAll('.project')
// const input = document.querySelector('#my-projects')

navbar.forEach(button => {
    button.addEventListener('click', (e) => {
        const id = e.currentTarget.id
        console.log('btn clicked id=',id)

        navbar.forEach(nav => nav.classList.remove('selected'))
        
        e.currentTarget.classList.add('selected');
    })
})