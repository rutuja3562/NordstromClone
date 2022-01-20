var cartArr = JSON.parse(localStorage.getItem("cartItems"));

// console.log(cartArr);
// displayData(cartArr);

function displayData(cartArr) {
  document.querySelector("#wcontainer").innerHTML = "";
  cartArr.map(function (data) {
    var div = document.createElement("div");

    var image = document.createElement("img");
    image.setAttribute("src", data.image_url);

    var brand = document.createElement("h3");
    brand.textContent = data.brand;

    var name = document.createElement("p");
    name.textContent = data.name;

    var div1 = document.createElement("div");
    div1.setAttribute("id", "flex");

    var price = document.createElement("p");
    price.textContent = data.price;

    var price2 = document.createElement("p");
    price2.textContent = data.strikedoffprice;

    var btn = document.createElement("button");
    btn.textContent = "Delete";
    btn.addEventListener("click", function () {
      deleteTask(data);
    });

    div1.append(price, price2);

    div.append(image, brand, name, div1, btn);

    document.querySelector("#wcontainer").append(div);
  });
}

cartArr.map(function (data) {
  var div = document.createElement("div");

  var image = document.createElement("img");
  image.setAttribute("src", data.image_url);

  var brand = document.createElement("h3");
  brand.textContent = data.brand;

  var name = document.createElement("p");
  name.textContent = data.name;

  var div1 = document.createElement("div");
  div1.setAttribute("id", "flex");

  var price = document.createElement("p");
  price.textContent = data.price;

  var price2 = document.createElement("p");
  price2.textContent = data.strikedoffprice;

  var btn = document.createElement("button");
  btn.textContent = "Delete";
  btn.addEventListener("click", function () {
    deleteTask(data);
  });

  div1.append(price, price2);

  div.append(image, brand, name, div1, btn);

  document.querySelector("#wcontainer").append(div);
});

function deleteTask(data) {
  //  console.log(index)
  // console.log(cartArr)
console.log(data)
  cartArr.splice(data, 1);
  // console.log(cartArr);

  localStorage.setItem("cartItems", JSON.stringify(cartArr));
  displayData(cartArr);
}

var total = cartArr.reduce(function (acc, cv) {
  return acc + +cv.price;
}, 0);
document.querySelector("h1").textContent = `Total Amount is ₹ ${total}`;
console.log(total);
