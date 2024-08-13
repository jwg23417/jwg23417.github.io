const startBtn = document.querySelector('.welcome')
const cards = document.querySelector('.cards')
const welcomeSub = document.querySelector('.welcome-sub') // Додаємо посилання на елемент welcome-sub

startBtn.addEventListener('click', function () {
	cards.classList.toggle('none')
	welcomeSub.textContent = 'Choose your first job' // Змінюємо текст елемента welcome-sub
})
