const showDetails1 = document.getElementById("expand-1");
const showDetails2 = document.getElementById("expand-2");

showDetails1?.addEventListener("click", () => expandCardDetails("expand-container-1"));
showDetails2?.addEventListener("click", () => expandCardDetails("expand-container-2"));

function expandCardDetails(elementId) {
  const productDetails = document.getElementById(elementId)

  if(productDetails.classList.contains("show")) {
    productDetails.classList.remove("show")
  } else {
    productDetails.classList.add("show")
  }
}
