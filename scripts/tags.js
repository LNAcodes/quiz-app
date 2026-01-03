console.log("Tags JS loaded successfully!");

// all quiz cards
const quizCards = document.querySelectorAll(".quiz__card");

// all tag-buttons
const tagButtons = document.querySelectorAll(".quiz__card-tag");

// select reset-button
const resetButton = document.querySelector(".quiz__filter-reset");

/*
console.log(tagButtons);
console.log(quizCards);
*/

// add EventListener
tagButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedTag = button.dataset.tag;

    // mark all tags as inactive
    tagButtons.forEach((btn) => btn.classList.remove("quiz__card-tag--active"));

    // mark selected tag as active
    button.classList.add("quiz__card-tag--active");

    // filter quiz cards
    quizCards.forEach((card) => {
      const cardTags = card.querySelectorAll(".quiz__card-tag");

      // check, if selected tag has filter
      let hasTag = false;

      cardTags.forEach((tag) => {
        if (tag.dataset.tag === selectedTag) {
          hasTag = true;
        }
      });

      // show card, if tag fits, otherwise hide
      card.style.display = hasTag ? "flex" : "none";
    });
  });
});

// click event for reset-button
resetButton.addEventListener("click", () => {
  // show all cards
  quizCards.forEach((card) => {
    card.style.display = "flex";
  });

  // make all tags inactive
  tagButtons.forEach((btn) => btn.classList.remove("quiz__card-tag--active"));
});

// console.log("Clicked tag:", selectedTag);
