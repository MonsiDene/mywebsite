// Seleziona gli elementi necessari
const popup = document.getElementById('image-popup');
const popupImage = document.querySelector('.popup-image');
const popupClose = document.querySelector('.popup-close');
const popupTriggers = document.querySelectorAll('.popup-trigger');

// Aggiungi un event listener a ciascuna immagine
popupTriggers.forEach(trigger => {
  trigger.addEventListener('click', () => {
    const imageSrc = trigger.src; // Ottieni il percorso dell'immagine
    const imageAlt = trigger.alt; // Ottieni il testo alternativo
    popupImage.src = imageSrc; // Imposta l'immagine del popup
    popupImage.alt = imageAlt;
    popup.style.display = 'flex'; // Mostra il popup
  });
});

// Chiudi il popup quando si clicca sulla "X"
popupClose.addEventListener('click', () => {
  popup.style.display = 'none';
});

// Chiudi il popup cliccando fuori dall'immagine
popup.addEventListener('click', (e) => {
  if (e.target === popup) {
    popup.style.display = 'none';
  }
});
