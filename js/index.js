const showDetails1 = document.getElementById("expand-1");
const showDetails2 = document.getElementById("expand-2");
const favoriteIcon = document.getElementById("favorite-icon");
const moreInfo = document.getElementById("more-info");

showDetails1?.addEventListener("click", () => addClickedClass("expand-container-1"));
showDetails2?.addEventListener("click", () => addClickedClass("expand-container-2"));
favoriteIcon?.addEventListener("click", () => addClickedClass("favorite-icon"));
moreInfo?.addEventListener("click", () => addClickedClass("dropdown"));

function addClickedClass(elementId) {
  const element = document.getElementById(elementId)

  if(element.classList.contains("clicked")) {
    element.classList.remove("clicked")
  } else {
    element.classList.add("clicked")
  }
}

