const toggle = document.getElementById('toggleDark')
const body = document.querySelector('body')

toggle.addEventListener('click', function() {

    this.classList.toggle('bi-cup-hot')

    if (this.classList.toggle('bi-cup-hot-fill')) {
        body.style.background = 'white'
        body.style.color = 'black'
        body.style.transition ='2s'

    } else {

        body.style.background = 'black'
        body.style.color = 'white'
        body.style.transition ='2s'
    }
});