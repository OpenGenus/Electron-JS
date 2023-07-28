document.addEventListener('DOMContentLoaded', () => {
  const heading = document.querySelector('h1');

  heading.addEventListener('click', () => {
    heading.style.color = getRandomColor();
  });

  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
});

