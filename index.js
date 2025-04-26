// Step 1: Simulate User Behavior
// - Add event listeners for button clicks and form submissions.
// - Use JavaScript to dynamically update the DOM based on user actions.

// Step 2: DOM Manipulation Functions
// - Implement functions to add, update, and remove DOM elements.
// - Ensure all elements are dynamically created with appropriate attributes and content.

// Step 3: Error Handling
// - Display error messages in the DOM for invalid inputs or missing elements.
// - Create reusable functions to handle common error cases.

// Step 4: Reusable Utilities
// - Create modular utility functions, such as createElement(tag, attributes).
// - Ensure all functions follow DRY principles for maintainability.




function addElementToDOM(containerId, text) {
    const container = document.getElementById(containerId);
    if (!container) return displayError('Container not found');
    const item = document.createElement('li');
    item.textContent = text;
    container.appendChild(item);
  }
  

  function removeElementFromDOM(elementId) {
    const element = document.getElementById(elementId);
    if (element && element.parentNode) {
      element.parentNode.removeChild(element);
    }
  }
  
 
  function simulateClick(containerId, message) {
    clearError();
    addElementToDOM(containerId, message);
  }
  

  function handleFormSubmit(formId, containerId) {
    const input = document.getElementById('user-input');
    const value = input.value.trim();
    if (!value) {
      displayError('Input cannot be empty');
      return;
    }
    clearError();
    addElementToDOM(containerId, value);
    input.value = '';
  }
  

  function displayError(message) {
    const errorBox = document.getElementById('error-message');
    if (errorBox) {
      errorBox.textContent = message;
      errorBox.classList.remove('hidden');
    }
  }
  

  function clearError() {
    const errorBox = document.getElementById('error-message');
    if (errorBox) {
      errorBox.textContent = '';
      errorBox.classList.add('hidden');
    }
  }
  

  if (typeof window !== 'undefined') {
    document.getElementById('simulate-click')?.addEventListener('click', () => {
      simulateClick('dynamic-content', 'Simulated click event triggered!');
    });
  
    document.getElementById('user-form')?.addEventListener('submit', (event) => {
      event.preventDefault();
      handleFormSubmit('user-form', 'dynamic-content');
    });
  }
  
// Export functions for testing
  if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = {
      addElementToDOM,
      removeElementFromDOM,
      simulateClick,
      handleFormSubmit,
      displayError,
      clearError
    };
  }
























// function addElement(input) {
//     const list = document.getElementById("dynamic-content");
//     const element = document.createElement("li");
//     element.textContent = input;
//     list.appendChild(element);
// }

// function removeElement() {
//     const list = document.getElementById("dynamic-content");
//     list.innerHTML ="";
// }

// function clearError() {
//     const errorMessage = document.getElementById("error-message");
//     errorMessage.textContent = "";
//     errorMessage.classList.add("hidden");
// }

// function simulateClick() {
//     clearError();
//     addElement("Simulated click event triggered!");
// }

// function handleFormSubmit(event) {
//     event.preventDefault();

//     const input = document.getElementById("user-input").value;
//     addElement(input)
// }


// function displayError(message) {
//     const errorMessage = document.getElementById("error-message");
//     errorMessage.textContent = message;
//     errorMessage.classList.remove('hidden')
// }

// document.addEventListener("DOMContentLoaded", () => {
//     document.getElementById("simulate-click").addEventListener("click", simulateClick);
//     document.getElementById("user-form").addEventListener("submit", handleFormSubmit);
//   });
// // document.getElementById("simulate-click").addEventListener("click", simulateClick);
// // document.getElementById("user-form").addEventListener("submit", handleFormSubmit);


