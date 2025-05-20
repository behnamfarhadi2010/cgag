function openPopup(img) {
    const popup = document.getElementById("imgPopup");
    const expandedImg = document.getElementById("expandedImg");
    const imgText = document.getElementById("imgtext");
  
    expandedImg.src = img.src;
    imgText.textContent = img.alt;
    popup.style.display = "block";
  }
  
  function closePopup() {
    document.getElementById("imgPopup").style.display = "none";
  }
  document.getElementById("imgPopup").addEventListener("click", function (e) {
    if (e.target.id === "imgPopup") {
      closePopup();
    }
  });