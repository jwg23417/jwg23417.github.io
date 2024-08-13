const startBtn = document.querySelector('.welcome')
const cards = document.querySelector('.cards')
const welcomeSub = document.querySelector('.welcome-sub') // Додаємо посилання на елемент welcome-sub

startBtn.addEventListener('click', function () {
	cards.classList.remove('none')
	startBtn.classList.add('none')
	welcomeSub.textContent = 'Choose your first job' // Змінюємо текст елемента welcome-sub
})

// Отримуємо всі картки
const cards1 = document.querySelectorAll('.card')

// Додаємо обробник подій на кожну картку
cards1.forEach(card => {
	card.addEventListener('click', () => {
		// Прибираємо клас 'choosed' з усіх карток
		cards1.forEach(c => c.classList.remove('choosed'))

		// Додаємо клас 'choosed' на поточну картку
		card.classList.add('choosed')
	})
})
