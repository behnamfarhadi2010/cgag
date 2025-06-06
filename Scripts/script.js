window.addEventListener("DOMContentLoaded", () => {
  const isMobile = window.matchMedia("(max-width: 480px)").matches;

  if (!isMobile) return; // Don't autoplay or show

  const modal = document.getElementById("videoModal");
  const closeBtn = document.getElementById("closeVideoModal");
  const iframe = modal.querySelector("iframe");
  const originalSrc = iframe.src;

  modal.style.display = "flex";
  iframe.src = originalSrc;
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
    iframe.src = "";
  });
});


const imageUrls = [
    "./Img/Cape-Spear.png",
    "./Img/Bacalhao-Island.png",
    "./Img/Bell-Iseland.png"
  ];
  
  const container = document.getElementById("image-container");
  
  imageUrls.forEach(url => {
    const img = document.createElement("img");
    img.src = url;
    img.style.width = "500px"; 
    img.style.height = "600px";    
    img.style.margin = "10px";
    img.style.borderRadius = "10px";
    img.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
    img.style.transition = "transform 0.2s";
    img.style.cursor = "pointer";
    
    img.addEventListener("mouseover", () => {
      img.style.transform = "scale(1.05)";
    });
    img.addEventListener("mouseout", () => {
      img.style.transform = "scale(1)";
    });
    if (url === "./Img/Cape-Spear.png") {

        img.addEventListener("click", () => {
            window.location.href = "./Cape-Spear.html";
        });
    
    } else if (url === "./Img/Bacalhao-Island.png") {
        img.addEventListener("click", () => {
            window.location.href = "./Bacalhao-Island.html";
        });
    } else if (url === "./Img/Bell-Iseland.png") {

        img.addEventListener("click", () => {
            window.location.href = "./Bell-Iseland.html";
        });
    }

    img.addEventListener("error", () => {
      img.src = "./Img/error.png"; 
    });
    img.addEventListener("load", () => {
      console.log(`Image loaded: ${url}`);
    });
    container.appendChild(img);
    
  });
  

  // fetch the art name from the sample page
  // and add it to the container
 