document.addEventListener("DOMContentLoaded", () => {
  const input = document.querySelector("#telephone");
  const output = document.querySelector("#resultat");
  const form = document.querySelector("#form-identification");

  const iti = window.intlTelInput(input, {
    nationalMode: false,
    initialCountry: "ci", // toujours drapeau CI
    utilsScript:
      "https://cdn.jsdelivr.net/npm/intl-tel-input@18.1.1/build/js/utils.js",
  });

  // Validation dynamique
  input.addEventListener("input", () => {
    if (iti.isValidNumber()) {
      output.style.color = "lightgreen";
      output.textContent = "✅ Numéro valide";
    } else {
      output.style.color = "red";
      output.textContent = "❌ Numéro invalide";
    }
  });

  // Validation à l'envoi
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!iti.isValidNumber()) {
      alert("❌ Numéro invalide : vérifiez le code pays et la longueur !");
      return;
    }
    const numero = iti.getNumber();
    alert("✅ Formulaire envoyé avec succès !\nNuméro : " + numero);
    // form.submit() si tu veux envoyer réellement le formulaire
  });
});

// pour le mot de pass
document.addEventListener("DOMContentLoaded", () => {
  const pwdInput = document.getElementById("mot-de-passe");
  const toggle = document.getElementById("togglePassword");

  if (pwdInput && toggle) {
    toggle.addEventListener("click", (e) => {
      // Empêche le bouton d'envoyer le formulaire si placé à l'intérieur d'un <form>
      e.preventDefault();

      const isHidden = pwdInput.type === "password";
      pwdInput.type = isHidden ? "text" : "password";

      // Mettre à jour l'icône si tu utilises Font Awesome
      const icon = toggle.querySelector("i");
      if (icon) {
        icon.classList.toggle("fa-eye");
        icon.classList.toggle("fa-eye-slash");
      }

      // Accessibilité
      toggle.setAttribute("aria-pressed", String(isHidden));
      toggle.setAttribute(
        "aria-label",
        isHidden ? "Masquer le mot de passe" : "Afficher le mot de passe"
      );

      // Maintenir le focus dans le champ mot de passe (UX)
      pwdInput.focus();
    });
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const input = document.querySelector("#telephone");
  const output = document.querySelector("#resultat");
  const form = document.querySelector("#form-identification");

  const iti = window.intlTelInput(input, {
    nationalMode: false,
    initialCountry: "ci", // toujours drapeau CI
    utilsScript:
      "https://cdn.jsdelivr.net/npm/intl-tel-input@18.1.1/build/js/utils.js",
  });

  // Validation dynamique
  input.addEventListener("input", () => {
    if (iti.isValidNumber()) {
      output.style.color = "lightgreen";
      output.textContent = "✅ Numéro valide";
    } else {
      output.style.color = "red";
      output.textContent = "❌ Numéro invalide";
    }
  });

  // Validation à l'envoi
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!iti.isValidNumber()) {
      alert("❌ Numéro invalide : vérifiez le code pays et la longueur !");
      return;
    }
    const numero = iti.getNumber();
    alert("✅ Formulaire envoyé avec succès !\nNuméro : " + numero);
    // form.submit() si tu veux envoyer réellement le formulaire
  });
});

// pour le mot de pass
document.addEventListener("DOMContentLoaded", () => {
  const pwdInput = document.getElementById("mot-de-passe");
  const toggle = document.getElementById("togglePassword");

  if (pwdInput && toggle) {
    toggle.addEventListener("click", (e) => {
      // Empêche le bouton d'envoyer le formulaire si placé à l'intérieur d'un <form>
      e.preventDefault();

      const isHidden = pwdInput.type === "password";
      pwdInput.type = isHidden ? "text" : "password";

      // Mettre à jour l'icône si tu utilises Font Awesome
      const icon = toggle.querySelector("i");
      if (icon) {
        icon.classList.toggle("fa-eye");
        icon.classList.toggle("fa-eye-slash");
      }

      // Accessibilité
      toggle.setAttribute("aria-pressed", String(isHidden));
      toggle.setAttribute(
        "aria-label",
        isHidden ? "Masquer le mot de passe" : "Afficher le mot de passe"
      );

      // Maintenir le focus dans le champ mot de passe (UX)
      pwdInput.focus();
    });
  }
});
