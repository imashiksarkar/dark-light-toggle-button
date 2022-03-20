function main() {
  document.querySelector(".icon-button").onclick = Utilities.handleDarkClick;
}

class Utilities {
  static handleDarkClick() {
    document.body.classList.toggle("dark");
  }
}

window.onload = main();
