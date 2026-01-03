console.log("Quiz JS loaded successfully!");

// Get colors from css root

const rootStyles = getComputedStyle(document.documentElement);
const successColor = rootStyles.getPropertyValue("--color-success");
const warningColor = rootStyles.getPropertyValue("--color-warning");
const neutralColor = rootStyles.getPropertyValue("--color-option-bg");

// select Show-Answer-Buttons
const showAnswerButtons = document.querySelectorAll(".quiz__card-submit");

/*
//select Bookmark-Buttons
const bookmarkButtons = document.querySelectorAll(".quiz__card-bookmark");

// test output
console.log(showAnswerButtons);
console.log(bookmarkButtons);
*/

// adding for each button an EventListener
showAnswerButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // find the correct card, for each button
    const card = button.closest(".quiz__card");
    const answer = card.querySelector(".quiz__card-answer");
    const options = card.querySelectorAll(".quiz__card-option input");

    if (answer.hasAttribute("hidden")) {
      answer.removeAttribute("hidden");
      button.textContent = "Hide Answer";
      /*
    } else {
      answer.setAttribute("hidden", "");
      button.textContent = "Show Answer";
    }
  }); */
      // show backgroundcolor for options
      options.forEach((input, index) => {
        input.parentElement.style.backgroundColor = neutralColor; //reset

        if (index === 0 && input.checked) {
          input.parentElement.style.backgroundColor = successColor; // green
        } else if (index !== 0 && input.checked) {
          input.parentElement.style.backgroundColor = warningColor; // red
        }
      });
    } else {
      answer.setAttribute("hidden", "");
      button.textContent = "Show Answer";

      // reset colors
      options.forEach((input) => {
        input.parentElement.style.backgroundColor = neutralColor;
      });
    }
  });
});
/*
// Answer selection
const quizCards = document.querySelectorAll(".quiz__card");

quizCards.forEach((card) => {
  const options = card.querySelectorAll(".quiz__card-option input");

  options.forEach((input, index) => {
    input.addEventListener("change", () => {
      //reset all options
      options.forEach((option) => {
        option.parentElement.style.backgroundColor = neutralColor;
      });

      // color clicked option
      if (index === 0) {
        input.parentElement.style.backgroundColor = successColor;
      } else {
        input.parentElement.style.backgroundColor = warningColor;
      }
    });
  });
});

/*
    const options = card.querySelector("quiz__card-option input");

    // toggle
    if (answer.hasAttribute("hidden")) {
      // show answer
      answer.removeAttribute("hidden");
      button.textContent = "Hide Answer";

      //
    } else {
      // hide answer
      answer.setAttribute("hidden", "");
      button.textContent = "Show Answer";
    }
  });
});
*/
