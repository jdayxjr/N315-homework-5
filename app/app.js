import { getContent } from "../model/model.js";

function route() {
  let hash = window.location.hash;
  let pageID = hash.replace("#", "");
  pageID = pageID ? pageID : "home";
  getContent(pageID);
}

function initListeners() {
  $(window).on("hashchange", route);
  route();

  const loginForm = document.querySelector(".login-Form");
  const logoutButton = document.querySelector(".logout-button");

  if (loginForm) {
    loginForm.addEventListener("submit", handleLogin);
  }
  if (logoutButton) {
    logoutButton.addEventListener("click", handleLogout);
  }
}

$(document).ready(initListeners);

async function handleLogin(event) {
  event.preventDefault();

  const email = document.querySelector('input[name="email"]').value;
  const password = document.querySelector('input[name="password"]').value;

  if (email === "test@example.com" && password === "password") {
    Swal.fire({
      title: "Login Successful!",
      text: "Welcome back!",
      icon: "success",
      confirmButtonText: "OK",
    });
  } else {
    Swal.fire({
      title: "Error!",
      text: "Invalid credentials. Please try again.",
      icon: "error",
      confirmButtonText: "Try Again",
    });
  }
}

function handleLogout() {
  Swal.fire({
    title: "Are you sure?",
    text: "You will be logged out.",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Yes, logout",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire("Logged out!", "You have successfully logged out.", "success");
    }
  });
}
