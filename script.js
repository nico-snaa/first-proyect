window.addEventListener('DOMContentLoaded', (event) => {
  const welcomeBox = document.getElementById('welcome-box');
  const okButton = document.getElementById('ok-button');

  okButton.addEventListener('click', () => {
    welcomeBox.classList.add('hide');
    setTimeout(() => {
      welcomeBox.style.display = 'none';
    }, 500);
  });

  setTimeout(() => {
    welcomeBox.style.display = 'block';
    welcomeBox.classList.add('show');
  }, 1000);
});


window.addEventListener('DOMContentLoaded', (event) => {
    const buyButtons = document.querySelectorAll('.buy-button');
    buyButtons.forEach((button) => {
      button.addEventListener('click', (event) => {
        const paymentMethod = event.target.dataset.paymentMethod;
        if (paymentMethod === 'credit') {
          processCreditCardPayment();
        } else if (paymentMethod === 'paypal') {
          processPayPalPayment();
        }
      });
    });
  
    function processCreditCardPayment() {
      // Lógica para procesar el pago con tarjeta de crédito
      alert('Procesando pago con tarjeta de crédito');
    }
  
    function processPayPalPayment() {
      // Lógica para procesar el pago con PayPal
      alert('Procesando pago con PayPal');
    }
  });

  window.addEventListener('DOMContentLoaded', (event) => {
    const commentInput = document.getElementById('comment-text');
    const submitButton = document.getElementById('submit-comment');
    const commentsContainer = document.getElementById('comments');
  
    submitButton.addEventListener('click', () => {
      const commentText = commentInput.value;
      if (commentText.trim() !== '') {
        addComment(commentText);
        commentInput.value = '';
      }
    });
  
    function addComment(commentText) {
      const commentElement = document.createElement('div');
      commentElement.classList.add('comment');
      commentElement.textContent = commentText;
      commentsContainer.appendChild(commentElement);
    }
  });
  
  
