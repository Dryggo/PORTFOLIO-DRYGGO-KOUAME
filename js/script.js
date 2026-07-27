// Détecte quelle section est visible à l'écran et met en avant le lien correspondant
const liens = document.querySelectorAll(".nav_lien");
const sections = document.querySelectorAll("section");

function majLienActif() {
  let sectionActuelle = sections[0].id;

  sections.forEach((section) => {
    const limite = section.offsetTop - 200; // marge avant de considérer la section "active"
    if (window.scrollY >= limite) {
      sectionActuelle = section.id;
    }
  });

  liens.forEach((lien) => {
    lien.classList.toggle("actif", lien.dataset.section === sectionActuelle);
  });
}

window.addEventListener("scroll", majLienActif);
majLienActif(); // appel au chargement, avant même de scroller
// Récupère le bouton hamburger et le conteneur des liens
const hamburger = document.getElementById("hamburger");
const navLiens = document.getElementById("navLiens");

// Au clic sur le hamburger, on ouvre/ferme le menu
hamburger.addEventListener("click", () => {
  navLiens.classList.toggle("ouvert");
});

// Ferme le menu automatiquement après avoir cliqué sur un lien
document.querySelectorAll(".nav_lien").forEach((lien) => {
  lien.addEventListener("click", () => {
    navLiens.classList.remove("ouvert");
  });
});
// Génère les barres de l'onde sonore dynamiquement (hauteur et délai aléatoires)
const conteneurOnde = document.getElementById("onde");
const nombreBarres = 40;

for (let i = 0; i < nombreBarres; i++) {
  const barre = document.createElement("div");
  barre.className = "barre";
  barre.style.animationDelay = Math.random() * 1.4 + "s";
  barre.style.height = 20 + Math.random() * 30 + "%";
  conteneurOnde.appendChild(barre);
}

// les barres de progression dans la partie competences
// Récupère toutes les barres de remplissage présentes sur la page
const blocsCompetences = document.querySelectorAll(".competence-item");

// IntersectionObserver = un outil du navigateur qui "surveille" un élément
// et te prévient dès qu'il devient visible à l'écran (par exemple en scrollant)
const observateurCompetences = new IntersectionObserver((entrees) => {
  // entrees = la liste des éléments observés, avec leur état actuel
  entrees.forEach((entree) => {
    if (entree.isIntersecting) {
      // isIntersecting = true si l'élément est actuellement visible à l'écran
      const bloc = entree.target;
      //   on recupere le texte du pourcentage affiché , ex: 90%
      const texte = bloc.querySelector(".competence-pourcentage").textContent;
      //   textContent renvoie par ex 90%

      // parseInt() convertit le debut d'une chaine en un nombre entier
      // et s'arrete au premier caractere qui n'est pas n chiffre
      // parseInt("90%") renvoie donc 90 (le % est ignorer )
      const valeur = parseInt(texte);

      // on recupere la barre de remplissage a l'interieur de ce bloc precis
      const remplissage = bloc.querySelector(".competence-remplissage");

      //   on fixe sa largeur directement en js , a partir de la valeur lue plus haut
      remplissage.style.width = valeur + "%";
      observateurCompetences.unobserve(bloc);
    }
  });
});

// Demande à l'observateur de surveiller chaque barre individuellement
blocsCompetences.forEach((bloc) => observateurCompetences.observe(bloc));

// Récupère le fond du popup et le bouton de fermeture
const popupFond = document.getElementById("popupFond");
const popupFermer = document.getElementById("popupFermer");

// Affiche le popup peu après le chargement de la page
// setTimeout(fonction, délai en millisecondes) exécute le code après un délai,
// ici 800ms — un affichage instantané paraît souvent brutal
setTimeout(() => {
  popupFond.classList.add("visible");
}, 800);

// Ferme le popup au clic sur la croix
popupFermer.addEventListener("click", () => {
  popupFond.classList.remove("visible");
});

// Ferme aussi le popup si on clique en dehors de la boîte (sur le fond sombre)
popupFond.addEventListener("click", (evenement) => {
  // evenement.target = l'élément exact qui a été cliqué.
  // On vérifie que c'est bien le fond lui-même, et pas un enfant
  // (la boîte, le bouton...) qui aurait "remonté" le clic jusqu'ici.
  if (evenement.target === popupFond) {
    popupFond.classList.remove("visible");
  }
});
