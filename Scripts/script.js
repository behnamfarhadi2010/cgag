const imageUrls = [
    "./Img/lh1.png",
    "./Img/lh2.png",
    "./Img/lh3.png"
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
    if (url === "./Img/lh1.png") {

        img.addEventListener("click", () => {
            window.location.href = "http://127.0.0.1:3000/samplepage.html";
        });
    
    } else if (url === "./Img/lh2.png") {
        img.addEventListener("click", () => {
            window.location.href = "http://127.0.0.1:3000/lh2.html";
        });
    } else if (url === "./Img/lh3.png") {

        img.addEventListener("click", () => {
            window.location.href = "http://127.0.0.1:3000/lh3.html";
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
  const infoUrls = [
    "./samplepage.html",
    
  ];
  
  const artNameCont = document.getElementById("artNameContainer");
  
  infoUrls.forEach(url => {
    fetch(url)
      .then(response => response.text())
      .then(html => {
        const tempDiv = document.createElement("div");
        tempDiv.innerHTML = html;
  
        const artInfo = tempDiv.querySelector("#artNameContainer");
  
        if (artInfo) {
          const infoDiv = document.createElement("h3");
          infoDiv.innerHTML = artInfo.innerHTML;
          infoDiv.style.marginBottom = "100px";
          infoDiv.style.marginLeft = "110";
          infoDiv.style.marginTop = "0";
          infoDiv.style.padding = "10px";
          infoDiv.style.backgroundColor = "#ffffff";
          infoDiv.style.borderRadius = "5px";
          infoDiv.style.boxShadow = "0 2px 4px rgba(255, 255, 255, 0.1)";
          infoDiv.style.border = "1px solid #ccc";
          infoDiv.style.width = "480px";
          infoDiv.style.height = "90px";
          infoDiv.style.position = "absolute";
          infoDiv.style.marginLeft = "-1044px";
          infoDiv.style.color = "#1f2a56";
          infoDiv.style.textAlign = "left";
          infoDiv.style.fontSize = "16px";
          infoDiv.style.fontFamily = "Arial, sans-serif";
          infoDiv.style.fontWeight = "bold";
          artNameCont.appendChild(infoDiv);
        }
      })
      .catch(error => {
        console.error("Error loading info from " + url, error);
      });
  });
  