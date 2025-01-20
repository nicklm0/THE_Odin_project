import homeImg from "../assets/img/home.jpg";
import pizzaImg from "../assets/svg/pizza.svg";

function renderHomePage(content) {
  content.innerHTML = "";

  const wrapper = document.createElement("div");
  wrapper.classList.add("wrapper");

  const contentMain = document.createElement("div");
  contentMain.classList.add("content__main");

  const contentImg = document.createElement("div");
  contentImg.classList.add("content__img");

  const imgLogo = document.createElement("img");
  imgLogo.classList.add("logo");
  imgLogo.src = pizzaImg;
  imgLogo.setAttribute("alt", "pizza logo");

  const h1 = document.createElement("h1");
  h1.classList.add("title");
  h1.textContent = "Try our pizza!";

  const img = document.createElement("img");
  img.src = homeImg;
  img.setAttribute("alt", "home pizza");

  contentMain.append(imgLogo);
  contentMain.append(h1);

  contentImg.append(img);

  wrapper.append(contentMain);
  wrapper.append(contentImg);

  content.append(wrapper);
}

export { renderHomePage };