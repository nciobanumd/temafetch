let currentCount = localStorage.getItem('count') ? localStorage.getItem('count') : 0
const container = document.getElementById('count')

const count = document.createElement('p')
const incrementButton = document.createElement('button')
const decrementButton = document.createElement('button')
incrementButton.innerText = 'increment'
decrementButton.innerText = 'decrement'

count.innerText = currentCount

const incrementCount = () => {
    currentCount++
    count.innerText = currentCount
    localStorage.setItem('count', currentCount)

}

const decrementCount = () => {
    currentCount--
    count.innerText = currentCount
    localStorage.setItem('count', currentCount)

}

incrementButton.addEventListener('click', incrementCount)
decrementButton.addEventListener('click', decrementCount)

container.appendChild(count)
container.appendChild(incrementButton)
container.appendChild(decrementButton)



