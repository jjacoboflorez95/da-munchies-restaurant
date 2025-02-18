const accordionItems = document.querySelectorAll(".accordion-item");

document.querySelectorAll(".menu-nav a").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();

    const targetId = event.currentTarget.getAttribute("href");
    const target = document.querySelector(targetId);

    target.scrollIntoView({ behavior: "smooth" });
  });
});

accordionItems.forEach((item) => {
  const title = item.querySelector(".accordion-title");

  title.addEventListener("click", () => {
    item.classList.toggle("active");
  });
});
