document.addEventListener("DOMContentLoaded", function () {

    // Smooth Scrolling (Inspired by BookMyShow Navigation)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Button Hover Effect (Disney-Inspired Animation)
    const button = document.querySelector(".cta-btn");
    button.addEventListener("mouseenter", () => {
        button.style.transform = "scale(1.1)";
    });
    button.addEventListener("mouseleave", () => {
        button.style.transform = "scale(1)";
    });

});
