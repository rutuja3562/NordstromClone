var womensData = JSON.parse(localStorage.getItem("womensData"));
var cartArr = JSON.parse(localStorage.getItem("cartItems")) || [];

displayData(womensData);

function filterCat() {
  var selected = document.querySelector("#brandfilter").value;
  console.log(selected);

  var filterList = womensData.filter(function (elem) {
    return elem.brand == selected;
  });
  console.log(filterList);

  displayData(filterList);
}
function handlePriceSort() {
  var selected = document.querySelector("#pricesort").value;
  //console.log(selected);
  if (selected === "high") {
    // console.log(selected)

    womensData.sort(function (a, b) {
      return Number(b.price) - Number(a.price);
    });
  }
  if (selected == "low") {
    womensData.sort(function (a, b) {
      return Number(a.price) - Number(b.price);
    });
  }
  // console.log(womensData);
  displayData(womensData);
}
function displayData(womensData) {
  document.querySelector("#wcontainer").innerHTML = "";
  womensData.map(function (data) {
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
    btn.textContent = "Add to Cart";
    btn.addEventListener("click", function () {
      addToCart(data);
    });

    div1.append(price, price2);

    div.append(image, brand, name, div1, btn);

    document.querySelector("#wcontainer").append(div);
  });
}

womensData.map(function (data) {
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
  btn.textContent = "Add to Cart";
  btn.addEventListener("click", function () {
    addToCart(data);
  });

  div1.append(price, price2);

  div.append(image, brand, name, div1, btn);

  document.querySelector("#wcontainer").append(div);
});

function addToCart(data) {
  console.log(data);
  cartArr.push(data);
  console.log(cartArr);
  localStorage.setItem("cartItems", JSON.stringify(cartArr));
  alert("Added Successfully");
}
