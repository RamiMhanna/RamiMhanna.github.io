/**
 * We use this function to start out js code.
 * At the first beginning we check the loading state of the document,
 * if it is still loading then we listen to the document if the DOMContentLoaded's event happen,
 * so we call this function, and if the state of the document is finished loading then we call the function anyway.
 */
function domContentLoaded() {
  const item = document.getElementById('item');
  const ul = document.querySelector('ul');
  const btn = document.querySelector('button');
  const deleteAll = document.getElementById('delAll');
  const quantity = document.getElementById('quantity');
  const container = document.getElementById('container');

  deleteAll.className = 'hidden';

  deleteAll.addEventListener('click', function () {
    document.querySelectorAll('li').forEach(function (li) {
      li.remove();
    });
    hideDelBtn();
    item.focus();
  });
  container.addEventListener('keyup', function (event) {
    if (event.target.localName === 'input') {
      const trimmedvalue = item.value.trim();
      btn.disabled = item.value.trim() === '';

      if (trimmedvalue === '') {
        return;
      }

      if (event.key !== 'Enter') {
        return;
      }
      const product = new ShoppingListItem(trimmedvalue, quantity.value.trim());

      ul.appendChild(product.toListItem());
      quantity.value = '';
      item.value = '';
      btn.disabled = true;
      hideDelBtn();
    }
  });

  btn.addEventListener('click', function () {
    const trimmedvalue = item.value.trim();

    const product = new ShoppingListItem(trimmedvalue, quantity.value.trim());

    ul.appendChild(product.toListItem());
    quantity.value = '';
    item.value = '';
    btn.disabled = true;
    item.focus();
    hideDelBtn();
  });

  btn.disabled = true;
  item.focus();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', function () {
    domContentLoaded();
  });
} else {
  domContentLoaded();
}

/**
 * Represents an item in the shopping list.
 */
class ShoppingListItem {
  /**
   * @param  {string} name  name of the item.
   * @param  {string} quantity  of the item.
   */
  constructor(name, quantity) {
    this.name = name;
    this.quantity = quantity;
  }

  /**
   * THis method is work on the objects which has the type ShoppingListItem.
   * * the li element that is returned has the structure :
   * '&lt;li><span>itemName</span><span>Quantity</span> <button>Delete</button></li>'.
   * In this method also we are listening to the click event on the delete button, to delete the element.
   *
   * @returns {HTMLElement} li element.
   */
  toListItem() {
    const li = document.createElement('li');
    const span = document.createElement('span');
    const deleteBox = document.createElement('button');

    deleteBox.addEventListener('click', function () {
      li.remove();
      hideDelBtn();
    });

    span.innerText = this.name;
    li.appendChild(span);

    if (this.quantity !== "") {
      const amount = document.createElement('span');
      const qty = document.createTextNode(`( ${this.quantity} )`);
      amount.appendChild(qty);
      li.appendChild(amount);
    }

    deleteBox.innerText = 'Delete';
    li.appendChild(deleteBox);
    return li;
  }

}

/**
 * Hide the button that Delete all the list elements in the Shopping List.
 *
 * The button will be hidden if there are one item in the list or when there is nothing in the list.
 * The hidden happened by adding the class 'hidden' to the button that has the 'delAll' id.
 */
function hideDelBtn() {
  if (document.querySelectorAll('li').length < 2) {
    document.getElementById('delAll').className = 'hidden';
  } else {
    document.getElementById('delAll').className = '';
  }
}

/*
       .__(.)< (MEOW)
        \___)
 ~~~~~~~~~~~~~~~~~~
 */