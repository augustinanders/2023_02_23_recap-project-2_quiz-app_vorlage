const bookmarkIcon = document.querySelector(
  '[data-js="card__button-bookmark-icon"]'
);
const bookmarkBadge = document.querySelector(
  '[data-js="card__button-bookmark-badge"]'
);

bookmarkBadge.addEventListener("click", () => {
  bookmarkIcon.classList.toggle("bookmark--active");
});

/* ----- */

const answer = document.querySelector('[data-js="card__answer"]');

const answerButton = document.querySelector('[data-js="card__answer-button"]');

answerButton.addEventListener("click", () => {
  answer.classList.toggle("card__answer--active");
  console.log(answerButton.textContent.trim());

  if (answer.classList.contains("card__answer--active")) {
    answerButton.textContent = "hide answer";
  } else {
    answerButton.textContent = "show answer";
  }
});
