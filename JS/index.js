//* Home Class *//
class Home {
  constructor(address, propertyType, state, price, isPetFriendly) {
    (this.address = address),
      (this.propertyType = propertyType),
      (this.state = state),
      (this.price = price),
      (this.isPetFriendly = isPetFriendly);
  }

  render() {
    // get homeSection div
    let homeSectionDiv = document.getElementById("homeSection");

    // 1. create new card to hold home elements (div)
    let homeCard = document.createElement("div");
    homeCard.setAttribute("class", "homeCards");

    // 2. create spans for each property of home class and remove btn
    let address = document.createElement("h3");
    let propertyType = document.createElement("p");
    let state = document.createElement("p");
    let price = document.createElement("p");
    let isPetFriendly = document.createElement("p");
    let removeBtn = document.createElement("button");

    // 3. get input text and assign to each span
    address.innerText = `Address: ${this.address}`;
    propertyType.innerText = `Property Type: ${this.propertyType}`;
    state.innerText = `State: ${this.state}`;
    price.innerText = `Price: ${this.price}`;
    isPetFriendly.innerText = `Pet Friendly: ${this.isPetFriendly}`;
    removeBtn.innerText = "X";

    // 4. append spans to the card div
    homeCard.append(address);
    homeCard.append(propertyType);
    homeCard.append(state);
    homeCard.append(price);
    homeCard.append(isPetFriendly);
    homeCard.append(removeBtn);

    // 5. append card div to homeSection
    homeSectionDiv.append(homeCard);
  }
}

//* Index *//

// todo 1. create empty array to store homes
let homeArr = [];

// todo 2. get html elements (button, home div)
let addBtn = document.getElementById("addBtn");
let homeSection = document.getElementById("homeSection");

// todo 3. add event listener to the add home button
addBtn.addEventListener("click", function () {
  // 1. get values from input bars
  let address = document.getElementById("address").value;
  let propertyType = document.getElementById("property-type").value;
  let state = document.getElementById("state").value;
  let price = document.getElementById("price").value;
  let isPetFriendly = document.getElementById("pet-friendly").value;

  // 2. create new instance of home
  let newHome = new Home(address, propertyType, state, price, isPetFriendly);

  // 3. add home object to array
  homeArr.push(newHome);
  console.log(homeArr);

  // 4. render all homes
  renderAllHomes();
});

// todo 4. renderAllHomes ()- loop through home object in array and call render()
const renderAllHomes = () => {
  homeSection.innerHTML = "";
  homeArr.forEach((home) => home.render());
};

