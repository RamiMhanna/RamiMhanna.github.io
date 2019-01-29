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

      ul.appendChild(createNewListItem(trimmedvalue, quantity.value.trim()));
      quantity.value = '';
      item.value = '';
      btn.disabled = true;
      hideDelBtn();
    }
  });

  btn.addEventListener('click', function () {
    const trimmedvalue = item.value.trim();

    ul.appendChild(createNewListItem(trimmedvalue, quantity.value.trim()));
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
 * create and return an 'li' element for inclusion in shopping list.
 *
 * the li element that is returned has the structure :
 * '&lt;li><span>itemName</span> <button>Delete</button></li>'.
 * @param {string} quantity of the item that we want to add it.
 * @param {string} newItem name of the item to add to the list.
 * @returns {HTMLElement} li element.
 */
function createNewListItem(newItem, quantity) {
  const li = document.createElement('li');
  const span = document.createElement('span');
  const deleteBox = document.createElement('button');

  deleteBox.addEventListener('click', function () {
    li.remove();
    hideDelBtn();
  });

  span.innerText = newItem;
  li.appendChild(span);

  if (quantity !== "") {
    const amount = document.createElement('span');
    const qty = document.createTextNode(`( ${quantity} )`);
    amount.appendChild(qty);
    li.appendChild(amount);
  }

  deleteBox.innerText = 'Delete';
  li.appendChild(deleteBox);
  return li;
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