import imageZoom from "./zoom.js";

function showMosaic(canvas) {
  canvas.style.display = "none";
  document.getElementById("fullScreenButton").style.display = "none";
  const toggleGameButton = document.getElementById("toggleGameButton");
  const mosaic = document.getElementById("mosaic");
  const zoomed = document.getElementById("zoomed");
  toggleGameButton.style.display = "block";
  mosaic.style.display = "block";
  zoomed.style.display = "block";
  imageZoom("mosaic", "zoomed");
}

export default showMosaic;
