let restaurantButton = document.getElementById("restaurant-button");

let restaurantList = ["MOD Pizza", "Pokedon", "Ritas Burritos", "Ramen Dozo", "Spinelli's Pizza"];

function getRestaurant(){
  let randomNum = Math.floor(Math.random() * restaurantList.length)
  alert(restaurantList[randomNum]);
}

restaurantButton.addEventListener('click', getRestaurant);