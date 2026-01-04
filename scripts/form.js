console.log("Forms JS loaded successfully!");

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
