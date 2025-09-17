
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
 
