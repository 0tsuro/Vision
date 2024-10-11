"use client";

const letters = "#+©-&*0KIR1L2345";
const lettersLength = letters.length;
const regex = /\s/;

function applyRDMEffect(element) {
  // Initialiser dataset.value avec le texte actuel
  element.dataset.value = element.innerText;

  let canTriggerEffect = true; // Variable pour contrôler l'activation de l'effet

  const handleMouseOver = (event) => {
    if (!canTriggerEffect) return; // Si l'effet ne peut pas être déclenché, on quitte

    let iterations = 0;

    // Désactiver les événements du pointeur pendant l'animation
    event.target.style.pointerEvents = "none";
    canTriggerEffect = false; // Désactiver temporairement l'effet

    const interval = setInterval(() => {
      // Vérifie si dataset.value existe et est une chaîne de caractères
      if (!event.target.dataset.value || typeof event.target.dataset.value !== "string") {
        clearInterval(interval);
        event.target.style.pointerEvents = ""; // Réactiver les événements du pointeur
        return;
      }

      event.target.innerText = event.target.innerText.split("")
        .map((letter, index) => {
          if (regex.test(letter)) return letter;
          if (index < iterations) {
            return event.target.dataset.value[index];
          }
          return letters[Math.floor(Math.random() * lettersLength)];
        })
        .join("");

      if (iterations >= event.target.dataset.value.length) {
        clearInterval(interval);
        event.target.style.pointerEvents = ""; // Réactiver les événements du pointeur

        // Réactiver l'effet après 3 secondes
        setTimeout(() => {
          canTriggerEffect = true; // Réactiver l'effet après 3 secondes
        }, 300);
      }

      iterations += 1 / 3;
    }, 30);
  };

  element.addEventListener("mouseover", handleMouseOver);
}

export function initializeRDMEffect() {
  const title = document.getElementById('visionTitle');
  const navItems = document.querySelectorAll('ul li span'); // Applique l'effet aux éléments li uniquement
  
  if (title) {
    applyRDMEffect(title);
  } else {
    console.warn("Element with ID 'visionTitle' not found for RDM effect");
  }

  navItems.forEach(item => {
    applyRDMEffect(item);
  });
}
