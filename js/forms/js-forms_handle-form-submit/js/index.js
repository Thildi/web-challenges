console.clear();

const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  console.log(data);

  const age = parseInt(data.age, 10); // Alter als Ganzzahl
  const badness = parseInt(data.badness, 10); // Badness als Ganzzahl

  const ageBadnessSum = age + badness;
  console.log(
    `The age-badness-sum of "${data.firstName}" is "${ageBadnessSum}"`
  );

  event.target.reset();
});
