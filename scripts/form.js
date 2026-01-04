console.log("Forms JS loaded successfully!");

// function to updated character count
function updateCharCount(textareaElement, counterElement) {
  const remaining = 150 - textareaElement.value.length;
  counterElement.textContent = remaining + " characters left"; // error safe code
}

// character counter for question
const questionField = document.getElementById("question");
const questionCount = document.getElementById("question-count");
questionField.addEventListener("input", () =>
  updateCharCount(questionField, questionCount)
);

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
