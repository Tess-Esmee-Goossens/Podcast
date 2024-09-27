// Wacht tot de DOM(Document Object Model) volledig is geladen voordat het script wordt uitgevoerd
document.addEventListener('DOMContentLoaded', () => {
  // Selecteer alle carousel-items en sla ze op in een NodeList
  const items = document.querySelectorAll('.item');
  // Verkrijg het totale aantal items in de carousel
  const totalItems = items.length;
  // Initialiseer de huidige positie van de carousel (begint bij het tweede item)
  let position = 2; 

  // Functie om de carousel bij te werken op basis van de huidige positie
  function updateCarousel() {
      // Loop door elk item in de carousel
      items.forEach((item, index) => {
          // Bereken de offset van het huidige item ten opzichte van de actieve positie
          const offset = index + 1 - position; 

          // Als het item het actieve item is (huidige positie)
          if (offset === 0) {
              item.style.transform = `translateX(0)`; // Positioneer het in het midden
              item.style.opacity = 1; // Maak het zichtbaar
          } 
          // Als het item links van het actieve item staat
          else if (offset === -1 || (position === 1 && index === totalItems - 1)) {
              item.style.transform = `translateX(-100%)`; // Verplaats het naar links buiten beeld
              item.style.opacity = 1; // Houd het zichtbaar
          } 
          // Als het item rechts van het actieve item staat
          else if (offset === 1 || (position === totalItems && index === 0)) {
              item.style.transform = `translateX(100%)`; // Verplaats het naar rechts buiten beeld
              item.style.opacity = 1; // Houd het zichtbaar
          } 
          // Als het item niet actief of aangrenzend aan het actieve item is
          else {
              item.style.opacity = 0; // Verberg het item
              item.style.transform = `translateX(100%)`; // Reset de positie
          }
      });
  }

  // Eventlistener voor het klikken op de vorige knop
  document.getElementById('prevButton').addEventListener('click', () => {
      // Verminder de positie, en ga terug naar het laatste item als je bij het eerste bent
      position = position > 1 ? position - 1 : totalItems; 
      updateCarousel(); // Werk de weergave van de carousel bij
  });

  // Eventlistener voor het klikken op de volgende knop
  document.getElementById('nextButton').addEventListener('click', () => {
      // Verhoog de positie, en ga terug naar het eerste item als je bij het laatste bent
      position = position < totalItems ? position + 1 : 1; 
      updateCarousel(); // Werk de weergave van de carousel bij
  });

  // Initialiseer de weergave van de carousel op de startpositie
  updateCarousel(); 
});