const data = "https://meowfacts.herokuapp.com/";
const url = "https://api.thecatapi.com/v1/images/search";

const catFactSection = document.querySelector(".cat-fact-container");
const catImgSection = document.querySelector(".cat-img-container");
const genCatImgBtn = document.querySelector(".generate-cat-img-btn");
// console.log(catFactSection);
// console.log(catImgSection);
// console.log(genCatImgBtn);

randomCatPhoto = (json) => {
  let photo = json[0].url;
  catImgSection.classList.add("cats");

  let image = document.createElement("img");
  image.src = photo;
  image.classList.add("random_cats");
  image.alt = photo;
  catImgSection.appendChild(image);
};

async function getRandomCats() {
  catImgSection.innerHTML = "";
  try {
    const response = await fetch(url);
    const json = await response.json();
    console.log("JSON:", json);
    return randomCatPhoto(json); // randomCatFact(jsonTxt)
  } catch (e) {
    console.log("This is an error");
    console.log(e);
  }
}

async function getRandomCatFact() {
  catFactSection.innerHTML = "";
  try {
    const responseTxt = await fetch(data);
    const jsonTxt = await responseTxt.json();
    console.log("JSON:", jsonTxt.data[0]);

    document.querySelector(".cat-fact-container").insertAdjacentHTML("beforeend", jsonTxt.data[0]);
    // return jsonTxt.data[0];
  } catch (e) {
    console.log("This is an error");
    console.log(e);
  }
};

genCatImgBtn.addEventListener("click", getRandomCatFact);
genCatImgBtn.addEventListener("click", getRandomCats);
