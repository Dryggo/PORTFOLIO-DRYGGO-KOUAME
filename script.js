
// pour la validation du numéro de telephone

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
   
    // Crée un champ caché avec le numéro formaté
    const hiddenInput = document.createElement("input");
    hiddenInput.type = "hidden";
    hiddenInput.name = "telephone";
    hiddenInput.value = numero;
    form.appendChild(hiddenInput);

    // Maintenant, on envoie réellement le formulaire à Web3Forms
    form.submit();
  });
});
