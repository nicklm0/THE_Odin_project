
import mapImg from "../assets/img/map.jpg";

function renderContactsPage(content) {
  content.innerHTML = "";
  const wrapper = document.createElement("div");
  wrapper.classList.add("wrapper");

  const contentMain = document.createElement("div");
  contentMain.classList.add("content__main");

  const contentImg = document.createElement("div");
  contentImg.classList.add("content__img");

  const img = document.createElement("img");
  img.src = mapImg;
  img.setAttribute("alt", "map image");

  const description = document.createElement("p");
  description.textContent = "Our contacts will be here soon...";

  contentImg.append(img);
  contentMain.append(description);

  wrapper.append(contentMain);
  wrapper.append(contentImg);

  content.append(wrapper);
}

export { renderContactsPage };