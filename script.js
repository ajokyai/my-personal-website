#about {
  display: flex;
  align-items: center;
  gap: 20px;
}

#about img {
  border-radius: 50%;  /* makes it circular */
  width: 150px;
  height: 150px;
  object-fit: cover;
  box-shadow: 0 4px 8px rgba(95, 35, 35, 0.2);
}

const elements = document.querySelectorAll('.fade-up');

window.addEventListener('scroll', () => {
  elements.forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 50) {
      el.classList.add('show');
    }
  });
});




