document.addEventListener("DOMContentLoaded", () => {
    console.log("JS loaded");

    // Selectors
    const wrapper = document.querySelector("#wrapper");
    const modalContainer = document.querySelector(".modal");
    const closeButton = document.querySelector(".close");
    const playButtons = document.querySelectorAll(".play-button");
    const playButton = document.querySelector(".play");

    // Ensure wrapper and modalContainer exist
    if (!wrapper || !modalContainer) {
        console.error("Wrapper or modal container not found!");
        return;
    }

    // Ensure closeButton exists
    if (!closeButton) {
        console.error("Close button not found!");
        return;
    }

    // Hide wrapper initially
    wrapper.style.display = "none";

    // Attach event listener to all play buttons
    playButtons.forEach((button) => {
        button.addEventListener("click", (event) => {
            console.log("Play button clicked");
            wrapper.style.display = "flex"; // Show wrapper
            modalContainer.style.display = "flex"; // Show modal
        });
    });

    // Close modal when close button is clicked
    closeButton.addEventListener("click", () => {
        console.log("Close button clicked");
        wrapper.style.display = "none"; // Hide wrapper
        modalContainer.style.display = "none"; // Hide modal
    });

    playButton.addEventListener("click", () => {
        window.location.href = "../../DRAFT_1/user_dashboard/single.html";
    });
    
});
