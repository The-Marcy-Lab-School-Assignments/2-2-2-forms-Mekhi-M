/** GENERAL FEEDBACK:
 *
 */

const handleSubmit = (event) => {
  event.preventDefault();

  const form = event.target;

  const username = form.username.value;
  const codingLevel = form.codingLevel.value;
  const location = form.location.value;
  const didLikeAssignment = form.didLikeAssignment.checked;

  document.querySelector("#results-username").textContent = username;
  document.querySelector("#results-coding-level").textContent = codingLevel;
  document.querySelector("#results-location").textContent = location;
  didLikeAssignment
    ? (document.querySelector("#results-did-like-assignment").textContent =
        "Yes")
    : (document.querySelector("#results-did-like-assignment").textContent =
        "No");

  form.reset();
};

const main = () => {
  document
    .querySelector("#new-user-form")
    .addEventListener("submit", handleSubmit);
};

main();
