import './style.css'

const menuButton = document.getElementById('menuButton')
const mainNav = document.getElementById('mainNav')

if (menuButton && mainNav) {
  menuButton.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('flex')
    mainNav.classList.toggle('hidden')
    menuButton.setAttribute('aria-expanded', String(isOpen))
  })
}

const filterButtons = document.querySelectorAll('.filter-button')
const projectCards = document.querySelectorAll('.project-card')

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    filterButtons.forEach((btn) => {
      btn.classList.remove('active', 'bg-white', 'text-text', 'shadow-sm')
      btn.classList.add('text-muted')
    })
    button.classList.add('active', 'bg-white', 'text-text', 'shadow-sm')
    button.classList.remove('text-muted')

    const filter = button.dataset.filter

    projectCards.forEach((card) => {
      const status = card.dataset.status
      const shouldShow = filter === 'all' || filter === status
      card.classList.toggle('hidden', !shouldShow)
    })
  })
})

const banner = document.getElementById('updateBanner')
const bannerDismiss = document.getElementById('updateBannerDismiss')

if (banner && bannerDismiss) {
  bannerDismiss.addEventListener('click', () => {
    banner.remove()
  })
}
