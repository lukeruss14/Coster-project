function updateCoaster() {
  const text = document.getElementById("textInput").value;
  const theme = document.getElementById("themeSelect").value;
  const icon = document.getElementById("iconSelect").value;

  const coaster = document.getElementById("customCoaster");

  // Reset classes
  coaster.className = "coaster large";

  // Apply theme
  if (theme !== "default") {
    coaster.classList.add(theme);
  }

  // Update content
  coaster.innerHTML = icon + "<br>" + text;
}
