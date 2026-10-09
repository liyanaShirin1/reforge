
const loginPage = document.getElementById("loginPage");
const dashboardPage = document.getElementById("dashboardPage");
const loginForm = document.getElementById("loginForm");
const loginMessage = document.getElementById("loginMessage");
const studentName = document.getElementById("studentName");
const logoutButton = document.getElementById("logoutButton");

const pages = [
  "dashboardPage",
  "resultsPage",
  "examsPage",
  "feesPage",
  "feedbackPage"
];

function showPage(pageId) {
  loginPage.hidden = true;

  pages.forEach(function (id) {
    document.getElementById(id).hidden = id !== pageId;
  });

  window.scrollTo({ top: 0, behavior: "smooth" });
}

function showLogin() {
  pages.forEach(function (id) {
    document.getElementById(id).hidden = true;
  });

  loginPage.hidden = false;
  loginForm.reset();
  loginMessage.textContent = "";

  window.scrollTo({ top: 0, behavior: "smooth" });
}

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const id = document.getElementById("studentId").value.trim();
  const password = document.getElementById("password").value;

  if (!id || !password.trim()) {
    loginMessage.textContent = "Please enter your Student ID and password.";
    return;
  }

  // Front-end demonstration only; no real authentication.
  studentName.textContent = id;
  showPage("dashboardPage");
});

logoutButton.addEventListener("click", showLogin);

document.getElementById("homeLink").addEventListener("click", function (event) {
  event.preventDefault();

  if (!dashboardPage.hidden) {
    showPage("dashboardPage");
  }
});

document.querySelectorAll("[data-page]").forEach(function (button) {
  button.addEventListener("click", function () {
    showPage(button.dataset.page);
  });
});

document.getElementById("feedbackForm").addEventListener("submit", function (event) {
  event.preventDefault();

  document.getElementById("feedbackMessage").textContent =
    "Thank you! This prototype does not send or store feedback yet.";

  event.target.reset();
});
