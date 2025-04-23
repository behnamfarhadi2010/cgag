const imageUrls = [
    "./Img/lh1.png",
    "./Img/lh2.png",
    "./Img/lh3.png"
  ];
  
  const container = document.getElementById("image-container");
  
  imageUrls.forEach(url => {
    const img = document.createElement("img");
    img.src = url;
    img.style.width = "400px"; 
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
    img.addEventListener("click", () => {
      window.open(url, "_blank");
    });
    img.addEventListener("error", () => {
      img.src = "./Img/error.png"; 
    });
    img.addEventListener("load", () => {
      console.log(`Image loaded: ${url}`);
    });
    container.appendChild(img);
    
  });
  