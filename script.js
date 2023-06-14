window.addEventListener('DOMContentLoaded', (event) => {
    const buyButtons = document.querySelectorAll('.buy-button');
    buyButtons.forEach((button) => {
      button.addEventListener('click', () => {
        alert('Producto comprado');
      });
    });
  });
  
