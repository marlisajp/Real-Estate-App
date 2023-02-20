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

