// Exercise #1:
// when the user clicks the 'copy' button, copy the user input to the output area

// fetch JavaScript objects representing specific elements in the DOM

// add an event listener on the target element

// callback function to handle event

// Exercise #2:
// when the user enters input text, copy the user input to the output area

// fetch JavaScript objects representing specific elements in the DOM

// add an event listener on the target element

// callback function to handle event


// Part 1: When the user clicks the 'copy' button
const inputField = document.getElementById('user-input');
const copyButton = document.getElementById('copy-btn');
const outputArea = document.getElementById('output-area');

copyButton.addEventListener('click', () => {
  outputArea.textContent = inputField.value;
});

// Part 2: When the user types in the input field
inputField.addEventListener('input', () => {
  outputArea.textContent = inputField.value;
});
