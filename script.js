const checklistItems = document.querySelectorAll(".checklist input");
const storageKey = "aws-sde-day-1-checklist";

function loadChecklist() {
  const saved = JSON.parse(localStorage.getItem(storageKey) || "[]");
  checklistItems.forEach((item, index) => {
    item.checked = Boolean(saved[index]);
  });
}

function saveChecklist() {
  const values = Array.from(checklistItems, (item) => item.checked);
  localStorage.setItem(storageKey, JSON.stringify(values));
}

checklistItems.forEach((item) => {
  item.addEventListener("change", saveChecklist);
});

loadChecklist();

const navLinks = Array.from(document.querySelectorAll(".nav a"));
const sections = navLinks
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      navLinks.forEach((link) => {
        link.classList.toggle(
          "active",
          link.getAttribute("href") === `#${entry.target.id}`
        );
      });
    });
  },
  { rootMargin: "-30% 0px -55% 0px" }
);

sections.forEach((section) => observer.observe(section));
