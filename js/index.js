// ELEMNTOS
const showcase = document.querySelector(".showcase");
const listFilters = document.querySelector(".filters");
const call = document.querySelector(".call");
const listCart = document.querySelector(".my-items");
const cart = document.querySelector(".cart");
const cartResume = document.querySelector(".cart__resume");
const formSearch = document.querySelector(".search");

// FUNÇÕES
function renderFilters() {
  const filters = ["Todos", "Acessórios", "Calçados", "Camisetas"];

  filters.forEach((filter) => {
    const li = document.createElement("li");
    li.innerText = filter;
    li.classList.add("filter");

    listFilters.appendChild(li);
  });

  listFilters.children[0].classList.add("ativo");
}

function activeFilter(event) {
  const filtersRendered = Array.from(listFilters.children);

  filtersRendered.forEach((filter) => filter.classList.remove("ativo"));

  event.target.classList.add("ativo");

  renderProducts(data);
}

function renderProducts(products) {
  showcase.innerHTML = "";

  products.forEach((product) => {
    const filter = document.querySelector(".filter.ativo").innerText;
    const currentTag = product.tag[0];

    if (filter === currentTag || filter === "Todos") {
      showcase.innerHTML += createProduct(product);
    }
  });

  if (!showcase.children.length) {
    showcase.innerHTML = whithoutProduct();
  }
}

function searchProduct(event) {
  event.preventDefault();
  const input = event.path[0][0];

  const search = data.find(
    (product) => product.nameItem.toLowerCase() === input.value.toLowerCase()
  );

  if (input.value === "") {
    alert("Pesquisa inválida");
    renderProducts(data);
    return;
  }

  if (search) renderProducts([search]);
  if (!search) alert("Produto não encontrado");

  input.value = "";
}

function verifyCart() {
  if (listCart.children.length > 0) {
    listCart.classList.remove("hidden");
    cartResume.classList.remove("hidden");
    call.classList.add("hidden");
    calcCart();
  } else {
    listCart.classList.add("hidden");
    cartResume.classList.add("hidden");
    call.classList.remove("hidden");
  }
}

function calcCart() {
  const itemsCart = Array.from(listCart.children);
  const numberItemsCart = itemsCart.length;
  let valueItemsCart = 0;

  itemsCart.forEach((item) => {
    valueItemsCart += +item
      .querySelector(".my-item__value")
      .innerText.replace("R$ ", "");
  });

  document.querySelector(".resume__number").innerText = numberItemsCart;

  document.querySelector(
    ".resume__value"
  ).innerText = `R$ ${valueItemsCart.toFixed(2)}`;
}

// INTERCEPTA EVENTOS
listFilters.addEventListener("click", activeFilter);

showcase.addEventListener("click", (event) => {
  const element = event.target;
  if (element.tagName === "BUTTON") {
    const productRendered = element.closest("li");
    const id = +productRendered.id.replace("product_", "");
    data.forEach((product) => {
      if (product.id === id) {
        listCart.innerHTML += createItemCart(product);
      }
    });
    verifyCart();
  }
});

formSearch.addEventListener("submit", searchProduct);

listCart.addEventListener("click", (event) => {
  const element = event.target;
  if (element.tagName === "BUTTON") {
    element.closest("li").remove();
    verifyCart();
  }
});

// CALLS
renderFilters();
renderProducts(data);
