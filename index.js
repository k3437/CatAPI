const container = document.getElementById("container");

const catApiUrl = "https://api.thecatapi.com/v1/images/search?limit=9";

document.addEventListener("DOMContentLoaded", async () => {
  try {
    const response = await fetch(catApiUrl);
    let cats = await response.json();

    if (cats.length > 9) {
      cats = cats.slice(0, 9);
    }

    cats.map((cat) => {
      const img = document.createElement("img");
      img.src = cat.url;
      container.appendChild(img);
    });
  } catch (error) {
    console.error(error);
  }
});
