console.clear();

const form = document.querySelector('[data-js="form"]');
const tosError = document.querySelector('[data-js="tos-error"]');
const tosCheckbox = document.querySelector('[data-js="tos"]');
const successMessage = document.querySelector('[data-js ="success"');

function hideTosError() {
  tosError.setAttribute("hidden", "");
}

function showTosError() {
  tosError.removeAttribute("hidden");
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // --v-- write your code here --v--
  if (!tosCheckbox.checked) {
    showTosError();
    return;
  } else {
    hideTosError();
    successMessage.removeAttribute("hidden");
    alert("Form submitted");
  }

  // --^-- write your code here --^--

  tosCheckbox.addEventListener("change", () => {
    if (tosCheckbox.checked) {
      hideTosError();
    } else {
      showTosError();
    }
  });
});
