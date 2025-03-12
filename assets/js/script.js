// Navigation - Toggle Active Section
document.querySelectorAll(".navbar-link").forEach(button => {
  button.addEventListener("click", function () {
    document.querySelectorAll(".navbar-link").forEach(btn => btn.classList.remove("active"));
    this.classList.add("active");

    document.querySelectorAll(".page-section").forEach(section => {
      section.classList.remove("active");
    });

    const targetSection = document.getElementById(this.getAttribute("data-nav-link"));
    if (targetSection) {
      targetSection.classList.add("active");
    }
  });
});
