document.addEventListener("DOMContentLoaded", () => {
    const triggerMenu = document.getElementById("btntrigg");
    const avatarAi = document.querySelector(".Ai__avatar");
    const inputAi = document.getElementById("user_question");
    const btnUserAi = document.getElementById("user_btn");
//ajout des effets au click
    triggerMenu.addEventListener("click", async () => {
      if (avatarAi.classList.contains("Ai__add__anim")) {
        avatarAi.classList.remove("Ai__add__anim");
      } else {
        avatarAi.classList.add("Ai__add__anim");
      }
      if (inputAi.classList.contains("Ai__input__anime")) {
       inputAi.classList.remove("Ai__input__anime");
       btnUserAi.classList.remove("Ai__input__anime");
      } else {
        inputAi.classList.add("Ai__input__anime");
        btnUserAi.classList.add("Ai__input__anime");
      }
      const texteIntro = "Bonjour, je suis Solline, l'intelligence artificielle du restaurant.";
      const elementIntro = document.getElementById("intro_texte");
      // Petite pause avant de commencer à écrire (1.5s)
      await new Promise((resolve) => setTimeout(resolve, 2500));
      // Étape 1 : écrire l’intro lettre par lettre
      await afficherLettreParLettre(elementIntro, texteIntro, 65);
      // Étape 2 : attendre 2 secondes avant d’effacer
      await new Promise((resolve) => setTimeout(resolve, 2000));
      // Étape 3 : effacer le texte
      elementIntro.textContent = "";
      // Étape 4 : afficher la question suivante
      await afficherLettreParLettre(elementIntro, "Comment puis-je vous aider ?", 50);
    });
  });

async function envoyerQuestion() {
  const ingredient = document.getElementById("user_question").value.trim();
  if (!ingredient) return alert("Veuillez entrer un ingrédient !");

  const response = await fetch("/recette", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: `user_question=${encodeURIComponent(ingredient)}`,
  });

  const data = await response.json();
  const liste = document.getElementById("Ai_response");
  liste.innerHTML = ""; // On efface les anciennes réponses

  if (data.suggestions && data.suggestions.length > 0) {
    for (const recette of data.suggestions) {
      const li = document.createElement("li");
      li.setAttribute("class", "Ai__reponse__item");
      liste.appendChild(li);
      await afficherLettreParLettre(li, recette); // Animation ici ✨
    }
  } else {
    const li = document.createElement("li");
    await afficherLettreParLettre(li, "Aucune recette trouvée.");
    liste.appendChild(li);
  }
}

/**
 * Affiche un texte lettre par lettre dans un élément HTML
 * @param {HTMLElement} element - L’élément dans lequel écrire
 * @param {string} texte - Le texte à afficher
 */
function afficherLettreParLettre(element, texte, vitesse = 40) {
  return new Promise((resolve) => {
    let index = 0;
    element.textContent = ""; // réinitialiser avant d'écrire
    const interval = setInterval(() => {
      element.textContent += texte[index];
      index++;

      if (index >= texte.length) {
        clearInterval(interval);
        resolve();
      }
    }, vitesse);
  });
}
