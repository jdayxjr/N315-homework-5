import { getContent } from "../model/model.js";

function route() {
  let hash = window.location.hash;
  let pageID = hash.replace("#", "");

  /* (if pageID exists) ? (nothing) : (else pageID is home) */
  pageID ? (pageID = pageID) : (pageID = "home");

  getContent(pageID);
}

function initListeners() {
  $(window).on("hashchange", route);
  route();
}

$(document).ready(function () {
  initListeners();
});

async function handleLogin(event) {
  event.preventDefault();

  const email = document.querySelector(
    'input[placeholder="Email-Address:"]'
  ).value;
  const password = document.querySelector(
    'input[placeholder="Password:"]'
  ).value;

  if (email === "test@example.com" && password === "password") {
    Swal.fire({
      title: "Welcome!",
      text: "You have successfully logged in.",
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
      Swal.fire({
        title: "Logged out!",
        text: "You have been successfully logged out.",
        icon: "success",
        confirmButtonText: "OK",
      });
    }
  });
}

document.querySelector(".login-Form").addEventListener("submit", handleLogin);
document
  .querySelector(".logout-button")
  .addEventListener("click", handleLogout);
