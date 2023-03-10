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
    removeBtn.innerText = "remove";
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

    // 3.5 add comment button -> reveals input text bar & send button -> grabs text and create html -> display on home card -> if > 280 or 0 alert "invalid comment"
    let commentSection = document.createElement("div");
    let commentBtn = document.createElement("button");
    commentSection.setAttribute("id", "commentSection");
    commentBtn.setAttribute("id", "commentBtn");
    commentBtn.innerText = "add comment";

    commentBtn.addEventListener("click", function () {
      let commentInput = document.createElement("input");
      let sendCommentBtn = document.createElement("button");
      sendCommentBtn.innerText = "send";
      commentInput.setAttribute("id", "commentInput");
      sendCommentBtn.setAttribute("id", "sendCommentBtn");
      commentSection.append(commentInput);
      commentSection.append(sendCommentBtn);

      sendCommentBtn.addEventListener("click", function () {
        let comment = document.createElement("p");
        let userComment = commentInput.value;
        if (userComment.length < 280 && userComment.length > 0) {
          comment.textContent = `${userComment}`;
          commentSection.append(comment);
        } else {
          alert("Invalid Comment");
        }
      });
    });

    commentSection.append(commentBtn);

    // 4. append to the card div
    homeCard.append(address);
    homeCard.append(propertyType);
    homeCard.append(state);
    homeCard.append(price);
    homeCard.append(isPetFriendly);
    homeCard.append(removeBtn);
    homeCard.append(commentSection);

    // 5. append card div to homeSection
    homeSectionDiv.append(homeCard);
  }
}

