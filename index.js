const getCatApi = async () => {
  const catApiUrl = "https://api.thecatapi.com/v1/images/search?limit=9";
  try {
    const response = await fetch(catApiUrl);
    const catJsonData = await response.json();
    return catJsonData;
  } catch (error) {
    console.error(error);
  }
  return null;
};

const displayCats = async () => {
  const catContainer = document.querySelector(".catContainer");

  try {
    const cats = await getCatApi();
    if (cats) {
      const catList = cats.map((cat) => {
        const listItem = document.createElement("li");
        const catImage = document.createElement("img");
        catImage.src = cat.url;
        catImage.alt = "cat";
        listItem.appendChild(catImage);
        return listItem.outerHTML;
      });
      catContainer.innerHTML = catList.join(""); // 배열을 문자열로 결합
    }
  } catch (error) {
    console.error(error);
  }
};

const render = () => {
  displayCats();
};

render();
