// script.js
document.addEventListener("DOMContentLoaded", () => {
  const naoBtn = document.getElementById("nao");

  naoBtn.addEventListener("mousemove", (e) => {
    const container = naoBtn.parentElement;
    const containerRect = container.getBoundingClientRect();
    const btnRect = naoBtn.getBoundingClientRect();

    const maxX = containerRect.width - btnRect.width;
    const maxY = containerRect.height - btnRect.height;

    let randomX = Math.random() * maxX;
    let randomY = Math.random() * maxY;

    naoBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;
  });
});
