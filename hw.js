let currentCount = localStorage.getItem('count') ? localStorage.getItem('count') : 0
const container = document.getElementById('count')

const count = document.createElement('p')
const incrementButton = document.createElement('button')
incrementButton.innerText = 'increment'

count.innerText = currentCount

const incrementCount = () => {
    currentCount++
    count.innerText = currentCount
    localStorage.setItem('count', currentCount)

}

incrementButton.addEventListener('click', incrementCount)

container.appendChild(count)
container.appendChild(incrementButton)



