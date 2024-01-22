const showDetails1 = document.getElementById("expand-detail-infos");
const showDetails2 = document.getElementById("expand-price-infos");
const favoriteIcon = document.getElementById("favorite-icon");
const moreInfo = document.getElementById("more-info");
const editionSelect = document.getElementById("edition-select");
const settingsButton = document.getElementById("settings-button");

showDetails1.addEventListener("click", () => toggleClickedClass("all-detail-infos-modal"));
showDetails2.addEventListener("click", () => toggleClickedClass("all-price-infos-modal"));
favoriteIcon.addEventListener("click", () => toggleClickedClass("favorite-icon"));
moreInfo.addEventListener("click", () => toggleClickedClass("dropdown"));
editionSelect.addEventListener("click", () => toggleClickedClass("select"));
settingsButton.addEventListener("click", () => toggleClickedClass("settings-dropdown"));

function toggleClickedClass(elementId) {
  const element = document.getElementById(elementId)

  if(element.classList.contains("clicked")) {
    removeSelectEditionEvent(element);
    element.classList.remove("clicked")
  } else {
    element.classList.add("clicked")
    addCloseDropdownEvent(element)
    addSelectEditionEvent(element)
  }
}

function addCloseDropdownEvent(element) {
  if(element.classList.contains("dropdown")) {
    const liItens = element.getElementsByTagName("li")
    for (item of liItens) {
      item.addEventListener("click", () => element.classList.remove("clicked"));
    }
  }
}

function addSelectEditionEvent(element) {
  if (element.id === "select") {
    element.addEventListener("click", handleSelectClick);
  }
}

function handleSelectClick(event) {
  const target = event.target.closest("li");
  if (target) {
    const cardId = target.querySelector(".small-text-bold").textContent
    changeSelectedEdition(cardId);
    
    let index = 0
    for (item of carouselItems) {
      if (item.classList.contains(`${cardId}`)) currentIndex = index
      index += 1
    }
    changeFocusedCard();

    closeDropdown();
  }
}

function closeDropdown() {
  const dropdown = document.getElementById("select");
  removeSelectEditionEvent(dropdown);
  dropdown.classList.remove("clicked");
}

function removeSelectEditionEvent(element) {
  if (element.id === "select") {
    element.removeEventListener("click", handleSelectClick);
  }
}

const increaseButton = document.getElementById("increase-button");
const decreaseButton = document.getElementById("decrease-button");
const cardQuantity = document.getElementById("card-quantity");

increaseButton.addEventListener("click", increaseValue)
decreaseButton.addEventListener("click", decreaseValue)

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

addToListButton.addEventListener("click", addToList)

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

let currentIndex = 2
const carouselItems = document.querySelectorAll(".pc-image");
const carouselItemsQtt = carouselItems.length;
changeFocusedCard()
// 48 do espaçamento
const arrowLeft = document.getElementById("carousel-arrow-left");
const arrowRight = document.getElementById("carousel-arrow-right");

function previousCarouselImage() {
  if (currentIndex === 0) {
    currentIndex = carouselItemsQtt - 1
  } else {
    currentIndex = currentIndex - 1
  }
  changeFocusedCard()
  const cardId = getCarouselCardId()
  changeSelectedEdition(cardId)
}

function nextCarouselImage() {
  if ((currentIndex + 2) > carouselItemsQtt) {
    currentIndex = 0
  } else {
    currentIndex = currentIndex + 1
  }
  changeFocusedCard()
  const cardId = getCarouselCardId()
  changeSelectedEdition(cardId)
}

arrowLeft.addEventListener("click", previousCarouselImage)
arrowRight.addEventListener("click", nextCarouselImage)

function changeSelectedEdition(cardId) {
  const currentEditionNumber = document.getElementById("edition-number").textContent
  const currentEditionName = document.getElementById("edition-name").textContent

  let selectedLiEdition
  for (option of document.querySelectorAll("span.small-text-bold")) {
    if (option.textContent === cardId) {
      selectedLiEdition = option.parentNode
    }
  }
  const selectedLiEditionNumberNode = selectedLiEdition.children[0]
  const selectedLiEditionNameNode = selectedLiEdition.children[1]
  const newEditionNumber = selectedLiEditionNumberNode.textContent
  const newEditionName = selectedLiEditionNameNode.textContent

  document.getElementById("edition-number").textContent = newEditionNumber;
  document.getElementById("edition-name").textContent = newEditionName;
  
  selectedLiEditionNumberNode.textContent = currentEditionNumber
  selectedLiEditionNameNode.textContent = currentEditionName
}

function changeFocusedCard() {
  for (item of carouselItems) item.classList.remove("selected")
  carouselItems[currentIndex].classList.add("selected")
}

function getCarouselCardId() {
  for (item of carouselItems[currentIndex].classList) {
    if (item.includes("#")) cardId = item
  }
  return cardId
}

const modals = document.getElementsByClassName("modal");

document.addEventListener("mousedown", closeModal)

function closeModal(event) {
  const clickedElement = event.target
  for (modal of modals) {
    if (modal.classList.contains("clicked") && !modal.contains(clickedElement)) {
      modal.classList.remove("clicked")
    }
  }
}
