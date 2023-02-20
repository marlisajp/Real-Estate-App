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
  
      // 2.5  add remove button & event listener
      let removeBtn = document.createElement("button");
      removeBtn.innerText = "X";
      removeBtn.addEventListener("click", () => {
          const i = homeArr.indexOf(this);
          homeArr.splice(i, 1);
          renderAllHomes();
          console.log(homeArr);
        });
  
      // 3. get input text and assign to each span
      address.innerText = `Address: ${this.address}`;
      propertyType.innerText = `Property Type: ${this.propertyType}`;
      state.innerText = `State: ${this.state}`;
      price.innerText = `Price: ${this.price}`;
      isPetFriendly.innerText = `Pet Friendly: ${this.isPetFriendly}`;
  
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