const showDetails1 = document.getElementById("expand-1");
const showDetails2 = document.getElementById("expand-2");
const favoriteIcon = document.getElementById("favorite-icon");
const moreInfo = document.getElementById("more-info");
const selectEdition = document.getElementById("edition-select");

showDetails1?.addEventListener("click", () => toggleClickedClass("expand-container-1"));
showDetails2?.addEventListener("click", () => toggleClickedClass("expand-container-2"));
favoriteIcon?.addEventListener("click", () => toggleClickedClass("favorite-icon"));
moreInfo?.addEventListener("click", () => toggleClickedClass("dropdown"));
selectEdition?.addEventListener("click", () => toggleClickedClass("select"));

function toggleClickedClass(elementId) {
  const element = document.getElementById(elementId)

  if(element.classList.contains("clicked")) {
    element.classList.remove("clicked")
  } else {
    element.classList.add("clicked")
    addCloseDropdownEvent(element)
  }
}

function addCloseDropdownEvent(element) {
  if(element.id === "dropdown" || element.id === "select") {
    const liItens = element.getElementsByTagName("li")
    for (item of liItens) {
      item?.addEventListener("click", () => toggleClickedClass(element.id));
    }
  }
}
