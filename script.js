"use strict";

// Set an actual company email to make the contact buttons open an email draft.
// An empty value keeps the design's buttons linked to the footer contact area.
const CONTACT_EMAIL = "";

const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#primary-navigation");

function setMenuOpen(isOpen) {
  navigation.classList.toggle("is-open", isOpen);
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
}

menuToggle.addEventListener("click", () => {
  setMenuOpen(menuToggle.getAttribute("aria-expanded") !== "true");
});
navigation.addEventListener("click", (event) => {
  if (event.target.closest("a")) setMenuOpen(false);
});
document.addEventListener("click", (event) => {
  if (!event.target.closest(".site-header")) setMenuOpen(false);
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && menuToggle.getAttribute("aria-expanded") === "true") {
    setMenuOpen(false);
    menuToggle.focus();
  }
});
window.matchMedia("(max-width: 700px)").addEventListener("change", () => setMenuOpen(false));

if (CONTACT_EMAIL) {
  document.querySelectorAll("[data-contact-link]").forEach((link) => {
    const subject = link.dataset.service || "Let's work together";
    link.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}`;
  });
}

// This static page has no mailing-list server. Never report a false subscription.
const newsletterForm = document.querySelector("#newsletter-form");
const newsletterStatus = document.querySelector("#newsletter-status");
newsletterForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (newsletterForm.reportValidity()) {
    newsletterStatus.textContent = "Newsletter signup is currently unavailable.";
  }
});
newsletterForm.addEventListener("input", () => {
  newsletterStatus.textContent = "";
});

const noticeDialog = document.querySelector("#notice-dialog");
document.querySelectorAll("[data-policy]").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelector("#notice-title").textContent = button.dataset.policy;
    document.querySelector("#notice-message").textContent = `${button.dataset.policy} is currently unavailable.`;
    noticeDialog.showModal();
  });
});
noticeDialog.addEventListener("click", (event) => {
  if (event.target === noticeDialog) {
    const bounds = noticeDialog.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) {
      noticeDialog.close();
    }
  }
});
