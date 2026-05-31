
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    menuToggle.textContent = navLinks.classList.contains("open") ? "×" : "☰";
  });
}

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks?.classList.remove("open");
    if (menuToggle) menuToggle.textContent = "☰";
  });
});

const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.13 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const interest = document.getElementById("interest").value;
    const message = document.getElementById("message").value.trim();

    const subject = encodeURIComponent("Website Inquiry - Strong Inc. 24/7 Gym");
    const body = encodeURIComponent(
`Name: ${name}
Email: ${email}
Phone: ${phone}
Interested In: ${interest}

Message:
${message}`
    );

    document.getElementById("formNote").textContent = "Opening an email draft...";
    window.location.href = `mailto:Stronginc24@gmail.com?subject=${subject}&body=${body}`;
  });
}
