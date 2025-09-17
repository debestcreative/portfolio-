
    const menuBtn = document.getElementById("mobileMenuBtn");
    const closeMenu = document.getElementById("closeMobileMenu");
    const mobileMenu = document.getElementById("mobileMenu");

    menuBtn.addEventListener("click", () => {
      mobileMenu.classList.remove("hidden");
    });

    closeMenu.addEventListener("click", () => {
      mobileMenu.classList.add("hidden");
    });


  // Handle form submission
  document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    emailjs.sendForm("service_dtd5yso", "template_wxuv85v", this)
      .then(function() {
        alert("✅ Message sent successfully!");
        document.getElementById("contactForm").reset(); // Clear form after success
      }, function(error) {
        alert("❌ Failed to send message: " + JSON.stringify(error));
      });
  });
 



  // Select modal elements
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImg");
  const closeModal = document.getElementById("closeModal");

  // Add click event to portfolio images
  document.querySelectorAll(".portfolio-img").forEach(img => {
    img.addEventListener("click", () => {
      modal.classList.remove("hidden");
      modal.classList.add("flex");
      modalImg.src = img.src;
    });
  });

  // Close modal when clicking the X
  closeModal.addEventListener("click", () => {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
  });

  // Close modal when clicking outside the image
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.add("hidden");
      modal.classList.remove("flex");
    }
  });
