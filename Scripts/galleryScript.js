const images = [
  {
    url: "./Img/Cape-Spear.png",
    title: "Cape Spear",
    description: "Landmark 1836 lighthouse & fortress site ",
    link: "./Cape-Spear.html"
  },
  {
    url: "./Img/Bacalhao-Island.png",
    title: "Bacalhao Island",
    description: "December 6, 1894",
    link: "./Bacalhao-Island.html"
  },
  {
    url: "./Img/Bell-Iseland.png",
    title: "Bell Iseland Lighthouse",
    description: "vandalized in early August, 2010",
    link: "./Bell-Iseland.html"
  }
  ,
  {
    url: "./Img/cape-bonavista.png",
    title: "Bonavista Lighthouse",
    description: "Cape Bonavista Lighthouse",
    link: "./bonavista-lighthouse.html"
  },
  {
    url: "./Img/Colombier-iseland.png",
    title: "Colombier iseland",
    description: "A square, skeletal, metal tower serves as Colombier Islands Light.",
    link: "./Colombier-iseland.html"
  }
];

const container = document.getElementById("image-container");

function renderImages(imageArray) {
  container.innerHTML = "";
  container.style.display = "grid";
  container.style.gridTemplateColumns = "repeat(3, 1fr)";

  imageArray.forEach(({ url, title, description, link }) => {
    const wrapper = document.createElement("div");
    wrapper.style.display = "grid";
    wrapper.style.alignItems = "center";
    wrapper.style.margin = "20px";
    wrapper.style.textAlign = "center";
    wrapper.style.width = "100%";
    wrapper.style.maxWidth = "400px";
    wrapper.style.borderRadius = "10px";
    wrapper.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
    wrapper.style.transition = "transform 0.2s";
    wrapper.style.cursor = "pointer";

    const img = document.createElement("img");
    img.src = url;
    img.style.width = "100%";
    img.style.height = "600px";
    img.style.borderRadius = "10px";
    img.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
    img.style.transition = "transform 0.2s";
    img.style.cursor = "pointer";

    img.addEventListener("mouseover", () => img.style.transform = "scale(1.01)");
    img.addEventListener("mouseout", () => img.style.transform = "scale(1)");
    img.addEventListener("click", () => window.location.href = link);
    img.addEventListener("error", () => img.src = "./Img/error.png");
    img.addEventListener("load", () => console.log(`Image loaded: ${url}`));

    const titleEl = document.createElement("h3");
    titleEl.textContent = title;
    titleEl.style.margin = "10px 0 0 5px";
    titleEl.style.color = "#003366";
    titleEl.style.fontFamily = 'Merriweather', 'serif';

    const descEl = document.createElement("h5");
    descEl.textContent = description;
    descEl.style.fontSize = "14px";
    descEl.style.color = "#677489";
    descEl.style.fontFamily = 'Merriweather', 'serif';

    wrapper.appendChild(img);
    wrapper.appendChild(titleEl);
    wrapper.appendChild(descEl);
    container.appendChild(wrapper);
  });
}

renderImages(images);

const searchBox = document.getElementById("search-box");
searchBox.addEventListener("input", (e) => {
  const query = e.target.value.toLowerCase();
  const filtered = images.filter(image =>
    image.title.toLowerCase().includes(query)
  );
  renderImages(filtered);
});