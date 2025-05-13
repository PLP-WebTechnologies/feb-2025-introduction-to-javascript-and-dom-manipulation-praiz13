function changeText() {
  const paragraph = document.getElementById("text");
  paragraph.textContent = "You changed the text with JavaScript!";
}

function changeStyle() {
  const paragraph = document.getElementById("text");
  paragraph.style.color = "white";
  paragraph.style.backgroundColor = "#007bff";
  paragraph.style.padding = "10px";
  paragraph.style.borderRadius = "8px";
}

function toggleBox() {
  const boxArea = document.getElementById("box-area");
  const existingBox = document.getElementById("toggle-box");

  if (existingBox) {
    existingBox.remove();
  } else {
    const box = document.createElement("div");
    box.id = "toggle-box";
    box.textContent = "📦 This box was added!";
    box.style.marginTop = "20px";
    box.style.padding = "15px";
    box.style.backgroundColor = "#f4f4f4";
    box.style.border = "1px solid #aaa";
    boxArea.appendChild(box);
  }
}
