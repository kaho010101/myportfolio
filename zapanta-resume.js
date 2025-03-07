function changeColor() {
    const colors = ["#FFFFFF", "#afdceb", "#cae9f5", "#add8e6", "#86c5d8"];
    document.querySelector(".resume-container").style.backgroundColor =
        colors[Math.floor(Math.random() * colors.length)];
}