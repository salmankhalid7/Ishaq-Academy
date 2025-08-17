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

// Careers Page
      // Navigation Menu Toggle
      function showMenu() {
        document.getElementById("navLinks").classList.add("active");
      }

      function hideMenu() {
        document.getElementById("navLinks").classList.remove("active");
      }

      // Job Details Toggle
      function toggleJobDetails(jobId) {
        const details = document.getElementById(jobId);
        const button = document.querySelector(
          `button[onclick="toggleJobDetails('${jobId}')"]`
        );
        if (details.classList.contains("hidden")) {
          details.classList.remove("hidden");
          button.textContent = "Hide";
        } else {
          details.classList.add("hidden");
          button.textContent = "View";
        }
      }

      // Form Submission
      function handleSubmit(event) {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const phone = form.phone.value;
        const email = form.email.value;
        const position = form.position.value;
        const message = form.message.value;
        const cv = form.cv.files[0]?.name || "No file uploaded";
        const whatsappMessage = `Job Application\nName: ${name}\nPhone: ${phone}\nEmail: ${email}\nSubject: ${position}\nMessage: ${message}\nCV: ${cv}`;
        const encodedMessage = encodeURIComponent(whatsappMessage);
        const whatsappUrl = `https://wa.me/923351501056?text=${encodedMessage}`;
        window.open(whatsappUrl, "_blank");
        const formMessage = document.getElementById("formMessage");
        formMessage.textContent =
          "Redirecting to WhatsApp... Please attach your CV manually.";
        form.reset();
      }

      document.getElementById("whatsappForm").addEventListener("submit", function (e) {
    e.preventDefault();

    // Get values
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let subject = document.getElementById("subject").value;
    let message = document.getElementById("message").value;}
      );