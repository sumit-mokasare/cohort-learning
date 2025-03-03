/**
 * Write your challenge solution here
 */
const accordionButton = document.querySelectorAll('.accordion-button');

accordionButton.forEach((btn) => {
    btn.addEventListener('click', () => {
      const parent = btn.parentElement;
      document.querySelectorAll('.accordion-item.active').forEach(item => {
          if (item !== parent) item.classList.remove('active');
      });
      parent.classList.toggle('active');
    })
})
