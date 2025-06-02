document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("quizForm");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const answers = {
        q1: "b",
        q2: "b",
        q3: "c",
      };

      let score = 0;
      let total = Object.keys(answers).length;

      for (let key in answers) {
        const selected = document.querySelector(`input[name="${key}"]:checked`);
        if (selected && selected.value === answers[key]) {
          score++;
        }
      }

      const result = document.getElementById("quizResult");
      if (score === total) {
        result.textContent = `Bravo ! Vous avez ${score}/${total} bonnes réponses !`;
        result.style.color = "green";
      } else {
        result.textContent = ` Vous avez ${score}/${total}. Réessayez pour vous améliorer !`;
        result.style.color = "orange";
      }
    });
  }
});
