const acc = document.querySelectorAll(".accordion-btn");

acc.forEach(button => {
  button.addEventListener("click", () => {
    const content = button.nextElementSibling;

    // Toggle active class
    button.classList.toggle("active");

    // If already open, close it
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
      content.style.paddingBottom = null;
    } else {
      content.style.maxHeight = content.scrollHeight + 30 + "px"; // 30px extra bottom
      content.style.paddingBottom = "30px"; // add extra space at bottom
    }
  });
});
