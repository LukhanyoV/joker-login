const emailInput = document.querySelector(".email");
const dancingBtn = document.querySelector(".dancing-button");

dancingBtn.addEventListener("mouseover", () => {
    ["right", "left"].forEach(v => dancingBtn.classList.toggle(v));
});

