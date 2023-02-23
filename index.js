const bookmarkIcon = document.querySelector(
  '[data-js="card__button-bookmark-icon"]'
);
const bookmarkBadge = document.querySelector(
  '[data-js="card__button-bookmark-badge"]'
);

bookmarkBadge.addEventListener("click", () => {
  bookmarkIcon.classList.toggle("bookmark--active");
});
