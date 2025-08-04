// Select elements
let navLinks = document.querySelector(".nav-links");
let openBtn = document.querySelector(".fa-bars");
let closeBtn = document.querySelector(".fa-times");

// Show menu by adding 'active' class
openBtn.addEventListener("click", () => {
  navLinks.classList.add("active");
});

// Hide menu by removing 'active' class
closeBtn.addEventListener("click", () => {
  navLinks.classList.remove("active");
});

// Hide menu if clicking outside nav menu or open button
document.addEventListener("click", (event) => {
  const isInsideNav = navLinks.contains(event.target);
  const isOpenBtn = openBtn.contains(event.target);
  const isCloseBtn = closeBtn.contains(event.target);

  if (!isInsideNav && !isOpenBtn && !isCloseBtn) {
    navLinks.classList.remove("active");
  }
});

function openModal(imgElement) {
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImage");
  const caption = document.getElementById("caption");

  modal.style.display = "block";
  modalImg.src = imgElement.src;
  caption.textContent = imgElement.alt;
}

function closeModal() {
  document.getElementById("imageModal").style.display = "none";
}

// Optional: Close modal if you click outside the image
window.onclick = function(event) {
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImage");

  if (event.target === modal && event.target !== modalImg) {
    closeModal();
  }
}



    buttons.forEach(button => {
      button.addEventListener("click", function () {
        const blogPost = this.closest(".blog-post");
        const shortText = blogPost.querySelector(".short-text");
        const fullText = blogPost.querySelector(".full-text");

        if (fullText.style.display === "none" || fullText.style.display === "") {
          fullText.style.display = "block";
          shortText.style.display = "none";
          this.textContent = "Read Less";
        } else {
          fullText.style.display = "none";
          shortText.style.display = "block";
          this.textContent = "Read More";
        }
      });
    });

// Show popup when the page loads
window.addEventListener("load", function () {
  document.getElementById("pageLoadPopup").style.display = "flex";
});

// Close popup function
function closePagePopup() {
  document.getElementById("pageLoadPopup").style.display = "none";
}

// Close popup if clicking outside the popup-content (the image and close button container)
window.addEventListener("click", function(event) {
  const popup = document.getElementById("pageLoadPopup");
  const popupContent = document.querySelector(".popup-content");

  if (popup.style.display === "flex" && !popupContent.contains(event.target)) {
    popup.style.display = "none";
  }
});

