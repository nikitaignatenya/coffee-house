const buttonLeft = document.querySelector("article .ss .icons .icon_left");
const buttonRgight = document.querySelector("article .ss .icons .icon_right");
const img = document.querySelector("article .ss .icons .image_middle  img");
const h4 = document.querySelector("article .ss .icons .image_middle h4");
const p_1 = document.querySelector("article .ss .icons .image_middle .p_1");
const p_2 = document.querySelector("article .ss .icons .image_middle .p_2");
const l_1 = document.querySelector(
  "article .ss .icons .image_middle .line .l_1"
);
const l_2 = document.querySelector(
  "article .ss .icons .image_middle .line .l_2"
);
const l_3 = document.querySelector(
  "article .ss .icons .image_middle .line .l_3"
);
const arr = [
  {
    src: "./svg/coffee-slider-1.svg",
    h4: "S’mores Frappuccino",
    p_1: "This new drink takes an espresso and mixes it with brown sugar and cinnamon before being topped with oat milk.",
    p_2: "$5.50",
    l_1_color: "#665f55",
    l_2_color: "#c1b6ad",
    l_3_color: "#c1b6ad",
  },
  {
    src: "./svg/coffee-slider-2.png",
    h4: "Caramel Macchiato",
    p_1: "Fragrant and unique classic espresso with rich caramel-peanut syrup, with cream under whipped thick foam.",
    p_2: "$5.00",
    l_1_color: "#c1b6ad",
    l_2_color: "#665F55",
    l_3_color: "#c1b6ad",
  },
  {
    src: "./svg/coffee-slider-3.png",
    h4: "Ice coffee",
    p_1: "A popular summer drink that tones and invigorates. Prepared from coffee, milk and ice.",
    p_2: "$4.50",
    l_1_color: "#c1b6ad",
    l_2_color: "#c1b6ad",
    l_3_color: "#665f55",
  },
];

let i = 0;
buttonRgight.addEventListener("click", () => {
  i++;
  if (arr[i]) {
    img.src = arr[i].src;
    h4.textContent = arr[i].h4;
    p_1.textContent = arr[i].p_1;
    p_2.textContent = arr[i].p_2;
    l_1.style.backgroundColor = arr[i].l_1_color;
    l_2.style.backgroundColor = arr[i].l_2_color;
    l_3.style.backgroundColor = arr[i].l_3_color;
  } else {
    i = 0;
    img.src = arr[i].src;
    h4.textContent = arr[i].h4;
    p_1.textContent = arr[i].p_1;
    p_2.textContent = arr[i].p_2;
    l_1.style.backgroundColor = arr[i].l_1_color;
    l_2.style.backgroundColor = arr[i].l_2_color;
    l_3.style.backgroundColor = arr[i].l_3_color;
  }
});
buttonLeft.addEventListener("click", () => {
  i--;
  if (arr[i]) {
    img.src = arr[i].src;
    h4.textContent = arr[i].h4;
    p_1.textContent = arr[i].p_1;
    p_2.textContent = arr[i].p_2;
    l_1.style.backgroundColor = arr[i].l_1_color;
    l_2.style.backgroundColor = arr[i].l_2_color;
    l_3.style.backgroundColor = arr[i].l_3_color;
  } else {
    i = arr.length - 1;
    img.src = arr[i].src;
    h4.textContent = arr[i].h4;
    p_1.textContent = arr[i].p_1;
    p_2.textContent = arr[i].p_2;
    l_1.style.backgroundColor = arr[i].l_1_color;
    l_2.style.backgroundColor = arr[i].l_2_color;
    l_3.style.backgroundColor = arr[i].l_3_color;
  }
});
