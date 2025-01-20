import { renderHomePage } from "./Home";

function ready(content) {
  document.addEventListener("DOMContentLoaded", function () {
    renderHomePage(content);
  });
}

export { ready };