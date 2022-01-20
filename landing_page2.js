var maindiv = document.createElement("div");

var h1 = document.createElement("h1");
h1.textContent = "Easier shopping, more to Rack. ";

//var btn = document.createElement("button");
var btn = document.querySelector("button");
btn.textContent = "Sign In or Create an account";
// window.location.href="nord_login.html"
var img1 = document.createElement("img");
img1.setAttribute(
  "src",
  "https://n.nordstrommedia.com/id/6251826b-445b-41ab-b5bb-e3c9d57638c8.jpeg?h=200&w=1608"
);

var imgdiv2 = document.createElement("div");
imgdiv2.setAttribute("class", "slider_img");

var figure = document.createElement("figure");
var imgslider1 = document.createElement("img");
imgslider1.setAttribute(
  "src",
  "https://n.nordstrommedia.com/id/abd6a086-9de3-4032-b2b6-ed6e7a8d884d.jpeg?h=720&w=1608"
);

imgslider2 = document.createElement("img");
imgslider2.setAttribute(
  "src",
  "https://n.nordstrommedia.com/id/48feddb0-edf2-407c-995d-bd886c1886fb.jpeg?h=720&w=1608"
);

imgslider3 = document.createElement("img");
imgslider3.setAttribute(
  "src",
  "https://n.nordstrommedia.com/id/083d1a2e-d9e5-4e2f-9250-7c0faf08af11.jpeg?h=720&w=1608"
);
var h2 = document.createElement("h2");
h2.textContent = "New Year. New Workout.";

var p = document.createElement("p");
p.textContent =
  "Z by Zella, PUMA, 90 Degree by Reflex, The North Face, SOREL, Cotopaxi & More...";

var h3 = document.createElement("h3");
h3.textContent = "New Years, New Finds";
//   var div3 = document.createElementnt("div");
//   div3.setAttribute("class","newyear");
figure.append(imgslider1, imgslider2, imgslider3);
imgdiv2.append(figure, h2, p, h3);

maindiv.append(h1, btn, img1, imgdiv2);
document.querySelector(".container").append(maindiv);
