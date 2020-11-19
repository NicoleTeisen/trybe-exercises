function getSkuFromProductItem(item) {
    return item.querySelector('span.item__sku').innerText;
  }

  const fetchMLProductItem = async (productId) => {
    const API_URL_ML_SEARCH_ITEM = `https://api.mercadolibre.com/items/${productId}`;
    let productItem;
    try {
      const response = await fetch(API_URL_ML_SEARCH_ITEM);
      const jsonObject = await response.json();
      productItem = jsonObject;
    } catch (error) {
      showAlert(error);
    }
    return productItem;
  };

  function createCartItemElement({ sku, name, salePrice }) {
    const li = document.createElement('li');
    li.className = 'cart__item';
    li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
    li.addEventListener('click', cartItemClickListener);
    return li;
  }

const productItemClickListener = async (event) => {
    const productId = getSkuFromProductItem(event.target.parentNode);
    try {
      const productItem = await fetchMLProductItem(productId);
      const { id: sku, title: name, price: salePrice } = productItem;
      const productLi = createCartItemElement({ sku, name, salePrice });
      const cartItems = document.querySelector('.cart__items');
      cartItems.appendChild(productLi);
    } catch (error) {
      showAlert(error);
    }
  };

  function createCustomElement(element, className, innerText) {
    const e = document.createElement(element);
    e.className = className;
    e.innerText = innerText;
    e.addEventListener('click', productItemClickListener);
    return e;
  }