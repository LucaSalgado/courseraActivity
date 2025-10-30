// Step 3: Toggle Navigation Menu
function toggleMenu() {
  const nav = document.querySelector("nav ul");
  nav.classList.toggle("active");
}

// Attach toggle to hamburger icon
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  if (hamburger) {
    hamburger.addEventListener("click", toggleMenu);
  }

  // Step 3: Smooth Scrolling
  document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});

// Step 4: Filter Projects
function filterProjects(category) {
  const projects = document.querySelectorAll("#projects article");
  projects.forEach(project => {
    if (category === "all" || project.classList.contains(category)) {
      project.style.display = "block";
    } else {
      project.style.display = "none";
    }
  });
}

// Step 4: Lightbox Effect
function openLightbox(src) {
  const modal = document.createElement("div");
  modal.classList.add("lightbox");
  modal.innerHTML = `
    <div class="lightbox-content">
      <span class="close">&times;</span>
      <img src="${src}" alt="Project Image" />
    </div>
  `;
  document.body.appendChild(modal);

  modal.querySelector(".close").addEventListener("click", () => {
    modal.remove();
  });
}

document.querySelectorAll("#projects img").forEach(img => {
  img.addEventListener("click", () => {
    openLightbox(img.src);
  });
});

// Function to show notification
function showNotification(message) {
  // Remove existing notification if any
  const existingNotification = document.querySelector('.notification');
  if (existingNotification) {
    existingNotification.remove();
  }

  // Create new notification
  const notification = document.createElement('div');
  notification.className = 'notification';
  notification.textContent = message;
  document.body.appendChild(notification);

  // Show notification
  notification.style.display = 'block';

  // Remove after 3 seconds
  setTimeout(() => {
    notification.style.opacity = '0';
    setTimeout(() => notification.remove(), 500);
  }, 3000);
}

// Step 5: Form Validation
document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const message = document.getElementById("message");

  let valid = true;

  if (!name.value.trim()) {
    showNotification("Please enter your name.");
    valid = false;
  }

  if (!email.value.trim() || !email.value.includes("@")) {
    showNotification("Please enter a valid email address.");
    valid = false;
  }

  if (!message.value.trim()) {
    showNotification("Please enter a message.");
    valid = false;
  }

  if (valid) {
    showNotification("Thank you! Your message has been sent.");
    this.reset();
  }
});

// Step 6: Debugging Support
console.log("script.js loaded successfully");

// Example debug: check if nav exists
const navCheck = document.querySelector("nav ul");
if (!navCheck) {
  console.warn("Navigation menu not found. Check your HTML structure.");
}