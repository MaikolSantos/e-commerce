function createProduct(obj) {
  return `
    <li class="showcase__item" id="product_${obj.id}">
      <figure class="showcase__item__box-img">
        <img src="${obj.img}" alt="">
      </figure>
      <main class="showcase__item__infos">
        <span class="showcase__item__tag">${obj.tag[0]}</span>
        <h3 class="showcase__item__title">${obj.nameItem}</h3>
        <p class="showcase__item__details">${obj.description}</p>
        <span class="showcase__item__value">R$ ${obj.value.toFixed(2)}</span>
        <button class="showcase__item__button">${obj.addCart}</button>
      </main>
    </li>
  `;
}

function whithoutProduct() {
  return `
    <li>
      Sem estoque!
    </li>
  `
}

function createItemCart(obj) {
  return `
    <li class="my-item">
      <figure class="my-item__box-img">
        <img src="${obj.img}" alt="">
      </figure>
      <main class="my-item__infos">
        <h3 class="my-item__title">${obj.nameItem}</h3>
        <span class="my-item__value">R$ ${obj.value.toFixed(2)}</span>
        <button class="my-item__button">Remover produto</button>
      </main>
    </li>
  `
}