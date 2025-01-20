import menuImg from "../assets/img/menu.jpg";

function renderMenuPage(content) {
  content.innerHTML = "";
  const wrapper = document.createElement("div");
  wrapper.classList.add("wrapper");

  const contentMain = document.createElement("div");
  contentMain.classList.add("content__main");

  const contentImg = document.createElement("div");
  contentImg.classList.add("content__img");

  const img = document.createElement("img");
  img.src = menuImg;
  img.setAttribute("alt", "menu pizza");

  const description = document.createElement("p");
  description.textContent = "Our menu will be here soon...";

  contentImg.append(img);
  contentMain.append(description);

  wrapper.append(contentMain);
  wrapper.append(contentImg);

  content.append(wrapper);
}

export { renderMenuPage };