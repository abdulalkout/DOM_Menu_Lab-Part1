// Data Structure
var menuLinks = [
  { text: "about", href: "/about" },
  { text: "catalog", href: "/catalog" },
  { text: "orders", href: "/orders" },
  { text: "account", href: "/account" },
];

// Queries
const mainEl = document.querySelector("main");
const header = document.querySelector("header");
const topMenuEl = document.querySelector("#top-menu");

// Functions
mainEl.style.backgroundColor = "var(--main-bg)";
mainEl.innerHTML = "<h1>SEI Rocks!</h1>";
mainEl.className = "flex-ctr";

topMenuEl.className = "flex-around";
topMenuEl.style.height = "100%";
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
header.appendChild(topMenuEl);

menuLinks.forEach((element) => {
  let newAnc = document.createElement("a");
  newAnc.href = element.href;
  newAnc.textContent = element.text;
  topMenuEl.appendChild(newAnc);
});

// Event Listners
