function main() {
  document.querySelector(".dl-toggle-button").onclick = () => {
    document.body.classList.toggle("dark");
  };
}

window.onload = main;
