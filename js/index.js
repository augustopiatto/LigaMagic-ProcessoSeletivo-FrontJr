const showAll = document.getElementById("card-details-title-show-all");

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
