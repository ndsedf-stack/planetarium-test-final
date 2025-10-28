// HYBRID MASTER 51 - JS de base
document.addEventListener('DOMContentLoaded', function() {
  const modal = document.getElementById('modal');
  const restTimer = document.getElementById('restTimer');
  let timerInterval;

  // Exemple d'ouverture de modal
  function showModal(msg) {
    modal.querySelector('.modal-content').innerText = msg;
    modal.classList.add('show');
    modal.setAttribute('aria-hidden', 'false');
  }

  // Exemple minuteur de repos
  function startRestTimer(seconds) {
    let time = seconds;
    restTimer.style.display = 'flex';
    restTimer.innerText = `Repos : ${time}s`;
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
      time--;
      restTimer.innerText = `Repos : ${time}s`;
      if (time <= 0) {
        clearInterval(timerInterval);
        restTimer.style.display = 'none';
      }
    }, 1000);
  }

  // Fermer la modal au clic en dehors
  modal.addEventListener('click', function(e) {
    if (e.target === modal) {
      modal.classList.remove('show');
      modal.setAttribute('aria-hidden', 'true');
    }
  });

  // Demo
  window.showModal = showModal;
  window.startRestTimer = startRestTimer;
});
