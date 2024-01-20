const showDetails1 = document.getElementById("expand-1");
const showDetails2 = document.getElementById("expand-2");
const favoriteIcon = document.getElementById("favorite-icon");
const moreInfo = document.getElementById("more-info");
const editionSelect = document.getElementById("edition-select");

showDetails1?.addEventListener("click", () => toggleClickedClass("expand-container-1"));
showDetails2?.addEventListener("click", () => toggleClickedClass("expand-container-2"));
favoriteIcon?.addEventListener("click", () => toggleClickedClass("favorite-icon"));
moreInfo?.addEventListener("click", () => toggleClickedClass("dropdown"));
editionSelect?.addEventListener("click", () => toggleClickedClass("select"));

function toggleClickedClass(elementId) {
  const element = document.getElementById(elementId)

  if(element.classList.contains("clicked")) {
    element.classList.remove("clicked")
  } else {
    element.classList.add("clicked")
    addCloseDropdownEvent(element)
    addSelectEditionEvent()
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

function addSelectEditionEvent() {
  const dropdownItems = document.querySelectorAll('.piw-select li');
  dropdownItems.forEach(item => {
    item.addEventListener('click', () => {
      const currentEditionNumber = document.getElementById('edition-number').textContent
      const currentEditionName = document.getElementById('edition-name').textContent

      const clickedLiFirstSpan = item.querySelector('.small-text-bold')
      const clickedLiSeconSpan = item.querySelector('.small-text')

      const newEditionNumber = clickedLiFirstSpan.textContent;
      const newEditionName = clickedLiSeconSpan.textContent;

      document.getElementById('edition-number').textContent = newEditionNumber;
      document.getElementById('edition-name').textContent = newEditionName;
      
      item.querySelector('.small-text-bold').textContent = currentEditionNumber
      item.querySelector('.small-text').textContent = currentEditionName
    });
  });
}

const increaseButton = document.getElementById("increase-button");
const decreaseButton = document.getElementById("decrease-button");
const cardQuantity = document.getElementById("card-quantity");

increaseButton?.addEventListener("click", increaseValue)
decreaseButton?.addEventListener("click", decreaseValue)

function increaseValue() {
  const currentValue = cardQuantity.textContent
  const newValue = parseInt(currentValue) + 1;
  cardQuantity.textContent = newValue;

  if(newValue > 1) {
    decreaseButton.classList.remove("disabled")
  }
}

function decreaseValue() {
  const currentValue = cardQuantity.textContent
  const newValue = parseInt(currentValue) - 1;

  if(currentValue > 1) {
    cardQuantity.textContent = newValue;
  }
  
  if (newValue === 1) {
    decreaseButton.classList.add("disabled")
  }
}

const addToListButton = document.getElementById("add-to-list-button");
const warning = document.getElementById("warning");

addToListButton?.addEventListener("click", addToList)

function addToList() {
  resetCardQuantity()
  warning.classList.add("visible")
  const span = warning.children[0]
  span.textContent = "O item foi adicionado à lista!"
  removeWarning()
}

function resetCardQuantity() {
  cardQuantity.textContent = 1

  if(!decreaseButton.classList.contains("disabled")) {
    decreaseButton.classList.add("disabled")
  }
}

function removeWarning() {
  setTimeout(() => {
    warning.classList.remove("visible")
  }, 3000)
}

let currentIndex = 0
let previousIndex
const carouselItems = document.querySelectorAll(".pc-image");
const carouselItemsQtt = carouselItems.length;
const carouselContainer = document.getElementById("carousel");
// 48 do espaçamento
const carouselItemWidth = (carouselContainer.scrollWidth - 48)/ carouselItemsQtt
const arrowLeft = document.getElementById("carousel-arrow-left");
const arrowRight = document.getElementById("carousel-arrow-right");

function previousCarouselImage() {
  previousIndex = currentIndex;
  currentIndex = (currentIndex - 1 + carouselItemsQtt) % carouselItemsQtt;

  carouselContainer.insertBefore(carouselItems[currentIndex], carouselContainer.firstChild);
  carouselContainer.style.transform = "";
  carouselContainer.classList.add("sliding-transition");
  carouselContainer.classList.remove("sliding-transition");
}

function nextCarouselImage() {
  carouselContainer.classList.add("sliding-transition");
  previousIndex = currentIndex;
  currentIndex = (currentIndex + 1) % carouselItemsQtt;

  carouselContainer.appendChild(carouselItems[previousIndex]);
  carouselContainer.classList.remove("sliding-transition");
  carouselContainer.style.transform = "";
}

arrowLeft.addEventListener("click", previousCarouselImage)
arrowRight.addEventListener("click", nextCarouselImage)
