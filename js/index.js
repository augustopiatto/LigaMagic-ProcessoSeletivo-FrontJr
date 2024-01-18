const showAll = document.getElementById("piwpdt-expand");

showAll?.addEventListener("click", expandCardDetails);

function expandCardDetails() {
  const details = document.getElementsByClassName("details")

  for(detail of details) {
    if(detail.style.display === "none") {
      detail.style.display = "flex"
    } else {
      detail.style.display = "none"
    }
  }
}
