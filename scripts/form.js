console.log("Forms JS loaded successfully!");

// function to update character count
function updateCharCount(textareaElement, counterElement) {
  const remaining = 150 - textareaElement.value.length; // value.length = calculation of character count
  counterElement.textContent = remaining + " characters left"; // error safe code
}
/* alternativ but too much code
const remaining1 = 150 - questionField.value.length;
questionCount.textContent = remaining1 + " characters left";

// for Option 1
const remaining2 = 150 - option1Field.value.length;
option1Count.textContent = remaining2 + " characters left";

// for Option 2
const remaining3 = 150 - option2Field.value.length;
option2Count.textContent = remaining3 + " characters left";

// for Option 3
const remaining4 = 150 - option3Field.value.length;
option3Count.textContent = remaining4 + " characters left";
*/

// character counter for question
const questionField = document.getElementById("question"); //get HTML element
const questionCount = document.getElementById("question-count");
questionField.addEventListener("input", () =>
  updateCharCount(questionField, questionCount)
);
/* Hey questionField, everytime a user types something, please do an updateCharCount() */

// Initial update on page load
updateCharCount(questionField, questionCount);

// Character counter for option 1
const option1Field = document.getElementById("option-1");
const option1Count = document.getElementById("count-1");

option1Field.addEventListener("input", () => {
  updateCharCount(option1Field, option1Count);
});

updateCharCount(option1Field, option1Count);

// Character counter for option 2
const option2Field = document.getElementById("option-2");
const option2Count = document.getElementById("count-2");

option2Field.addEventListener("input", () => {
  updateCharCount(option2Field, option2Count);
});

updateCharCount(option2Field, option2Count);

// Character counter for option 3
const option3Field = document.getElementById("option-3");
const option3Count = document.getElementById("count-3");

option3Field.addEventListener("input", () => {
  updateCharCount(option3Field, option3Count);
});

updateCharCount(option3Field, option3Count);

console.log("All character counters initialized!");

/* code for task from bootcamp with one question field and one answer field

// select textareas and counter elements
const questionField = document.getElementById("question");
const answerField = document.getElementById("answer");

const questionCount = document.getElementById("question-count");
const answerCount = document.getElementById("answer-count");

// function to update remaining characters
function updateCharCount(field, counter) {
  const remaining = 150 - field.value.length;
  counter.textContent = remaining + " characters left"; // error safe code
}

// add input event listeners
questionField.addEventListener("input", () =>
  updateCharCount(questionField, questionCount)
);
answerField.addEventListener("input", () =>
  updateCharCount(answerField, answerCount)
);
// update counters on page load
updateCharCount(questionField, questionCount);
updateCharCount(answerField, answerCount);
*/

console.log("All character counters initialized!");

// ==== create a new card ====

// choose form element
const form = document.querySelector(".new-question-form");

// add Submit Event Listener
form.addEventListener("submit", (event) => {
  // prevent page will load
  event.preventDefault();

  console.log("Form submitted!"); // testing if successful

  // read data from form in JS

  const questionText = questionField.value;
  const option1Text = option1Field.value;
  const option2Text = option2Field.value;
  const option3Text = option3Field.value;
  const tagText = document.getElementById("tags").value;

  // which answer is the correct one?
  const correctAnswer = document.querySelector(
    'input[name="correct-answer"]:checked' //checked = pseudo-selector only finds the checked radio-button
  ).value;

  console.log("Question:", questionText); //test if it works
  console.log("Correct answer is option:", correctAnswer); // test if it works

  // creating new card
  const newCard = document.createElement("article");
  newCard.className = "quiz__card";

  // create bookmark button
  const bookmarkButton = document.createElement("button");
  bookmarkButton.className = "quiz__card-bookmark";
  bookmarkButton.setAttribute("aria-label", "Bookmark");

  const bookmarkImg = document.createElement("img");
  bookmarkImg.src = "./assets/icons/bookmark.svg";
  bookmarkImg.alt = "";

  bookmarkButton.appendChild(bookmarkImg);

  // create question
  const fieldset = document.createElement("fieldset");
  fieldset.className = "quiz__card-options";

  const legend = document.createElement("legend");
  legend.className = "quiz__card-question";
  legend.textContent = questionText;

  fieldset.appendChild(legend);

  // create answer options
  // option 1
  const label1 = document.createElement("label");
  label1.className = "quiz__card-option";

  const radio1 = document.createElement("input");
  radio1.type = "radio";
  radio1.name = "question-new";
  radio1.value = "1";

  label1.appendChild(radio1);
  label1.appendChild(
    document.createTextNode(option1Text)
  ); /* if TextContent is used, I would overwrite the radio button, using TextNode lets the text be shown beside the radio button */
  fieldset.appendChild(label1);

  // option 2
  const label2 = document.createElement("label");
  label2.className = "quiz__card-option";

  const radio2 = document.createElement("input");
  radio2.type = "radio";
  radio2.name = "question-new";
  radio2.value = "2";

  label2.appendChild(radio2);
  label2.appendChild(document.createTextNode(option2Text));
  fieldset.appendChild(label2);

  // option 3
  const label3 = document.createElement("label");
  label3.className = "quiz__card-option";

  const radio3 = document.createElement("input");
  radio3.type = "radio";
  radio3.name = "question-new";
  radio3.value = "3";

  label3.appendChild(radio3);
  label3.appendChild(document.createTextNode(option3Text));
  fieldset.appendChild(label3);

  // create show answer button
  const showAnswerButton = document.createElement("button");
  showAnswerButton.className = "quiz__card-submit";
  showAnswerButton.textContent = "Show Answer";

  // create tag
  const tagList = document.createElement("ul"); //create unordered list = container for my tags
  tagList.className = "quiz__card-tags";

  /* if case because only if user types sth in = true, if nothing then just empty */
  if (tagText) {
    const tagItem = document.createElement("li"); //list item
    tagItem.className = "quiz__card-tag";
    tagItem.textContent = tagText; //fill in Text
    tagList.appendChild(tagItem);
  }

  // build everything together
  newCard.appendChild(bookmarkButton);
  newCard.appendChild(fieldset);
  newCard.appendChild(showAnswerButton);
  newCard.appendChild(tagList);

  // show card on page after submit button and before footer
  const formSection =
    document.querySelector(
      ".form-section"
    ); /* search in html for the first element with the class .form-section, this is my form container, safe it in the variable formSection */
  formSection.insertAdjacentElement("afterend", newCard);

  /* --- alternative but wrong in this case, because at end of the cody ---
  document.body.appendChild(newCard);
  */

  console.log("Card created!"); // test if successful

  // set form back
  form.reset();

  // set character counter back
  updateCharCount(questionField, questionCount);
  updateCharCount(option1Field, option1Count);
  updateCharCount(option2Field, option2Count);
  updateCharCount(option3Field, option3Count);
});
