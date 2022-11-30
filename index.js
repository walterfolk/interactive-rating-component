const ratingCard = document.querySelector('.rating-card');
const thanksCard = document.querySelector('.thanks-card');
const submitBtn = document.getElementById('submit-btn');
const rating = document.getElementById('rating');
const ratingValue = document.querySelectorAll('.btn');

submitBtn.addEventListener('click', () => {
  ratingCard.classList.add('hidden');
  thanksCard.classList.remove('hidden');
})

ratingValue.forEach((rate) => {
    rate.addEventListener('click', () => {
        rating.innerHTML = rate.innerHTML
    })
    })