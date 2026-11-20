const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".main-nav");

menuButton.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
});

nav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

contactForm.addEventListener("submit", event => {
  event.preventDefault();
  if (!contactForm.reportValidity()) return;

  const data = new FormData(contactForm);
  const name = data.get("name").trim();
  const phone = data.get("phone").trim();
  const email = data.get("email").trim() || "Not provided";
  const service = data.get("service");
  const message = data.get("message").trim() || "No additional message";

  const text = [
    "Hello Yashoday HealthCare Agency,",
    "",
    "I would like to enquire about your care services.",
    `Name: ${name}`,
    `Mobile: ${phone}`,
    `Email: ${email}`,
    `Service required: ${service}`,
    `Message: ${message}`
  ].join("\n");

  const whatsappUrl = `https://wa.me/918055034827?text=${encodeURIComponent(text)}`;
  formStatus.textContent = "Opening WhatsApp with your enquiry. Please review and tap Send there.";
  window.open(whatsappUrl, "_blank", "noopener,noreferrer");
});
