import "./styles.css"
import { setupProjectForm } from "./modules/dom.js"

const sideBar = document.querySelector('.side-bar')

sideBar.addEventListener('click', (e) => {
    const projectBtn = e.target.closest('.project')

    if (!projectBtn) return

    const currentNavbar = sideBar.querySelectorAll('.project')

    currentNavbar.forEach(nav => nav.classList.remove('selected'))

    projectBtn.classList.add('selected')
})

setupProjectForm()