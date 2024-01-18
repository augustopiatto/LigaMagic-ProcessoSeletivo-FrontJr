const showDetails1 = document.getElementById("expand-1");
const showDetails2 = document.getElementById("expand-2");
const favoriteIcon = document.getElementById("favorite-icon");

showDetails1?.addEventListener("click", () => expandCardDetails("expand-container-1"));
showDetails2?.addEventListener("click", () => expandCardDetails("expand-container-2"));
favoriteIcon?.addEventListener("click", () => expandCardDetails("favorite-icon"));

function expandCardDetails(elementId) {
  const productDetails = document.getElementById(elementId)

  if(productDetails.classList.contains("clicked")) {
    productDetails.classList.remove("clicked")
  } else {
    productDetails.classList.add("clicked")
  }
}

