"use strict";
const main = document.querySelector(".main-cont");
const emptyCart = document.querySelector(".emptyaddtocart-cont");
const cartDisplay = document.querySelector(".cart-display");
const orderDisplay = document.querySelector(".order-display");
const displayDesserts = document.querySelector(".display-desserts");
const confirmBtn = document.querySelector(".confirm-order-btn");
const orderConfirmed = document.querySelector(".order-confirmed");
const body = document.querySelector("body");
const startNewOrder = document.querySelector(".new");
const grandTotal = document.querySelector(".grand-total");
const orderGrandTotal = document.querySelector(".order-grand-total");
const data = [
  {
    image: {
      thumbnail: "./assets/images/image-waffle-thumbnail.jpg",
      mobile: "./assets/images/image-waffle-mobile.jpg",
      tablet: "./assets/images/image-waffle-tablet.jpg",
      desktop: "./assets/images/image-waffle-desktop.jpg",
    },
    name: "Waffle with Berries",
    category: "Waffle",
    price: 6.5,
    id: 1,
  },
  {
    image: {
      thumbnail: "./assets/images/image-creme-brulee-thumbnail.jpg",
      mobile: "./assets/images/image-creme-brulee-mobile.jpg",
      tablet: "./assets/images/image-creme-brulee-tablet.jpg",
      desktop: "./assets/images/image-creme-brulee-desktop.jpg",
    },
    name: "Vanilla Bean Crème Brûlée",
    category: "Crème Brûlée",
    price: 7.0,
    id: 2,
  },
  {
    image: {
      thumbnail: "./assets/images/image-macaron-thumbnail.jpg",
      mobile: "./assets/images/image-macaron-mobile.jpg",
      tablet: "./assets/images/image-macaron-tablet.jpg",
      desktop: "./assets/images/image-macaron-desktop.jpg",
    },
    name: "Macaron Mix of Five",
    category: "Macaron",
    price: 8.0,
    id: 3,
  },
  {
    image: {
      thumbnail: "./assets/images/image-tiramisu-thumbnail.jpg",
      mobile: "./assets/images/image-tiramisu-mobile.jpg",
      tablet: "./assets/images/image-tiramisu-tablet.jpg",
      desktop: "./assets/images/image-tiramisu-desktop.jpg",
    },
    name: "Classic Tiramisu",
    category: "Tiramisu",
    price: 5.5,
    id: 4,
  },
  {
    image: {
      thumbnail: "./assets/images/image-baklava-thumbnail.jpg",
      mobile: "./assets/images/image-baklava-mobile.jpg",
      tablet: "./assets/images/image-baklava-tablet.jpg",
      desktop: "./assets/images/image-baklava-desktop.jpg",
    },
    name: "Pistachio Baklava",
    category: "Baklava",
    price: 4.0,
    id: 5,
  },
  {
    image: {
      thumbnail: "./assets/images/image-meringue-thumbnail.jpg",
      mobile: "./assets/images/image-meringue-mobile.jpg",
      tablet: "./assets/images/image-meringue-tablet.jpg",
      desktop: "./assets/images/image-meringue-desktop.jpg",
    },
    name: "Lemon Meringue Pie",
    category: "Pie",
    price: 5.0,
    id: 6,
  },
  {
    image: {
      thumbnail: "./assets/images/image-cake-thumbnail.jpg",
      mobile: "./assets/images/image-cake-mobile.jpg",
      tablet: "./assets/images/image-cake-tablet.jpg",
      desktop: "./assets/images/image-cake-desktop.jpg",
    },
    name: "Red Velvet Cake",
    category: "Cake",
    price: 4.5,
    id: 7,
  },
  {
    image: {
      thumbnail: "./assets/images/image-brownie-thumbnail.jpg",
      mobile: "./assets/images/image-brownie-mobile.jpg",
      tablet: "./assets/images/image-brownie-tablet.jpg",
      desktop: "./assets/images/image-brownie-desktop.jpg",
    },
    name: "Salted Caramel Brownie",
    category: "Brownie",
    price: 4.5,
    id: 8,
  },
  {
    image: {
      thumbnail: "./assets/images/image-panna-cotta-thumbnail.jpg",
      mobile: "./assets/images/image-panna-cotta-mobile.jpg",
      tablet: "./assets/images/image-panna-cotta-tablet.jpg",
      desktop: "./assets/images/image-panna-cotta-desktop.jpg",
    },
    name: "Vanilla Panna Cotta",
    category: "Panna Cotta",
    price: 6.5,
    id: 9,
  },
];

let row = "";
let desserts = "";
let dessertsOrder = "";
data.forEach((product, index) => {
  index++;

  row += `
  <div class="flex flex-col">
              <div class="flex flex-col justify-center items-center">
                <img
                  src="${product.image.desktop}"
                  class="rounded-lg md:block hidden w-full dimg-${product.id}"
                  alt=""
                />
                <img
                  src="${product.image.mobile}"
                  class="block md:hidden rounded-lg w-full mimg-${product.id}"
                  alt=""
                />
                <!--  md:-->
                <div
                  class="flex justify-between gap-10 bg-customRed -translate-y-1/2 py-2 px-3 rounded-full additems-btn-${
                    product.id
                  } additems-btns cursor-pointer hidden"
                >
                  <img
                    src="assets/images/icon-decrement-quantity.svg"
                    class="border opacity-80 rounded-full w-6 h-6 p-1 minus-icon-${
                      product.id
                    } minus-icons"
                    alt=""
                  />
                  <span class="number-${product.id} numbers text-white"></span>
                  <img
                    src="assets/images/icon-increment-quantity.svg"
                    class="border opacity-80 rounded-full w-6 h-6 p-1 plus-icon-${
                      product.id
                    } plus-icons"
                    alt=""
                  />
                </div>
                <div
                  class="flex gap-4 bg-white border border-customRed -translate-y-1/2 py-2 px-5 rounded-full addtocart-btn-${
                    product.id
                  } addtocart-btns cursor-pointer"
                  data-name="${product.name}"
                 data-price="${product.price.toFixed(2)}"
                >
                  <img src="./assets/images/icon-add-to-cart.svg" alt="" />
                  <p class="text-darkest">Add to Cart</p>
                </div>
              </div>
              <h1 class="text-darkest font-semibold text-opacity-70 text-lg">
                ${product.category}
              </h1>
              <p class="text-darkest font-bold text-lg name">${product.name}</p>
              <p class="text-customRed font-bold text-xl">$<span>${product.price.toFixed(
                2
              )}</span></p>
            </div>
            `;
  desserts += ` <div
                  class="flex hidden items-center adding-items--${
                    product.id
                  } adding-items border-b py-4"
                >
                  <img
                    src="${product.image.thumbnail}"
                    class="h-10 w-10 mr-5"
                    alt=""
                  />
                  <div class="flex flex-col">
                    <h1 class="text-darkest font-bold">${product.name}</h1>
                    <div class="flex gap-3">
                      <p class="text-customRed font-bold">
                        <span class="items-selected-${
                          product.id
                        } items-selected"></span>x
                      </p>
                      <p class="text-dark">
                        @ $<span class="price-1 price">${product.price.toFixed(
                          2
                        )}</span>
                      </p>
                      <p class="text-darkest text-opacity-70 font-semibold">
                        $<span class="total-cal-${product.id} total-cal"></span>
                      </p>
                    </div>
                  </div>
                  <div class="ml-auto">
                    <img
                      src="assets/images/icon-remove-item.svg"
                      class="border border-dark h-6 p-1 w-6 border-opacity-60 rounded-full cursor-pointer close-${
                        product.id
                      } close"
                      alt=""
                    />
                  </div>
                </div>
                <!-- end -->`;
  dessertsOrder += `
                 <div
                class="flex  hidden items-center order-items--${product.id} adding-items border-b p-4"
              >
                <img
                  src="${product.image.thumbnail}"
                  class="h-10 w-10 mr-5"
                  alt=""
                />
                <div class="flex flex-col">
                  <h1 class="text-darkest font-bold">${product.name}</h1>

                  <div class="flex gap-3">
                    <p class="text-customRed font-bold">
                      <span class="order-items-selected-${product.id} items-selected"></span
                      >x
                    </p>
                    <p class="text-dark">
                      @ $<span class="price-${product.id}product.price.toFixed(2)}</span>
                    </p>
                  </div>
                </div>
                <div class="ml-auto">
                  <p class="text-darkest text-opacity-70 font-semibold">
                    $<span class="order-total-cal-${product.id} total-cal"></span>
                  </p>
                </div>
              </div>
              </div>`;
});
displayDesserts.innerHTML = desserts;
main.innerHTML = row;
orderDisplay.innerHTML = dessertsOrder;

let grandTotalValue = 0;
function updateGrandTotal() {
  if (grandTotalValue > 0) {
    emptyCart.classList.add("hidden");
    cartDisplay.classList.remove("hidden");
  } else {
    emptyCart.classList.remove("hidden");
    cartDisplay.classList.add("hidden");
  }
  grandTotal.textContent = grandTotalValue.toFixed(2);
  orderGrandTotal.textContent = grandTotalValue.toFixed(2);
}

function handleItemActions(item) {
  const addToCartBtn = document.querySelector(`.addtocart-btn-${item.id}`);
  const addItemsBtn = document.querySelector(`.additems-btn-${item.id}`);
  const plusIcon = document.querySelector(`.plus-icon-${item.id}`);
  const minusIcon = document.querySelector(`.minus-icon-${item.id}`);
  const number = document.querySelector(`.number-${item.id}`);
  const totalCalc = document.querySelector(`.total-cal-${item.id}`);
  const itemsSelected = document.querySelector(`.items-selected-${item.id}`);
  const addingItems = document.querySelector(`.adding-items--${item.id}`);
  const closeBtn = document.querySelector(`.close-${item.id}`);
  const order = document.querySelector(`.order-items--${item.id}`);
  const orderItemsSelected = document.querySelector(
    `.order-items-selected-${item.id}`
  );
  const orderTotalCal = document.querySelector(`.order-total-cal-${item.id}`);
  const dImg = document.querySelector(`.dimg-${item.id}`);
  const mImg = document.querySelector(`.mimg-${item.id}`);

  let increase = 0;
  let itemTotal = 0;

  function updateItemTotal(newValue) {
    const previousItemTotal = itemTotal;
    itemTotal = newValue * item.price;
    grandTotalValue += itemTotal - previousItemTotal;
    updateGrandTotal();
  }

  addToCartBtn.addEventListener("click", () => {
    addItemsBtn.classList.remove("hidden");
    addToCartBtn.classList.add("hidden");
    dImg.classList.add("active");
    mImg.classList.add("active");
    number.textContent = 0;
    itemTotal = 0;
  });

  function handleValueChange(newValue) {
    totalCalc.textContent = (newValue * item.price).toFixed(2);
    orderTotalCal.textContent = (newValue * item.price).toFixed(2);
    itemsSelected.textContent = newValue;
    orderItemsSelected.textContent = newValue;
    addingItems.classList.toggle("hidden", newValue === 0);
    order.classList.toggle("hidden", newValue === 0);
    updateItemTotal(newValue);
  }

  closeBtn.addEventListener("click", () => {
    addItemsBtn.classList.add("hidden");
    addToCartBtn.classList.remove("hidden");
    addingItems.classList.add("hidden");
    order.classList.add("hidden");
    dImg.classList.remove("active");
    mImg.classList.remove("active");
    grandTotalValue -= itemTotal;
    updateGrandTotal();
    increase = 0;
    itemTotal = 0;
  });

  plusIcon.addEventListener("click", () => {
    increase++;
    number.textContent = increase;
    handleValueChange(increase);
  });

  minusIcon.addEventListener("click", () => {
    if (increase > 0) {
      increase--;
      number.textContent = increase;
      if (increase === 0) {
        addItemsBtn.classList.add("hidden");
        addToCartBtn.classList.remove("hidden");
        dImg.classList.remove("active");
        mImg.classList.remove("active");
      }
      handleValueChange(increase);
    }
  });
}

data.forEach((item) => handleItemActions(item));

// Confirming order and starting a new order
body.classList.remove("overflow-hidden");
confirmBtn.addEventListener("click", (e) => {
  e.preventDefault();
  orderConfirmed.classList.remove("hidden");
  body.classList.add("overflow-hidden");
});
startNewOrder.addEventListener("click", (e) => {
  e.preventDefault();
  window.location.reload();
});
