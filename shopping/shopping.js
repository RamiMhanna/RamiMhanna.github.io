document.addEventListener('DOMContentLoaded', function () {
  const item = document.getElementById('item');
  const ul = document.querySelector('ul');
  const btn = document.querySelector('button');

  item.addEventListener('keyup', function (event) {
    const trimmedvalue = item.value.trim();
    btn.disabled = item.value.trim() === '';

    if (trimmedvalue === '') {
      return;
    }

    if (event.key !== 'Enter') {
      return;
    }

    ul.appendChild(createNewListItem(trimmedvalue));
    item.value = '';
    btn.disabled = true;
  });

  btn.addEventListener('click', function () {
    const trimmedvalue = item.value.trim();

    ul.appendChild(createNewListItem(trimmedvalue));
    item.value = '';
    btn.disabled = true;
    item.focus();
  });
  btn.disabled = true;
  item.focus();
});

/**
 * create and return an 'li' element for inclusion in shopping list.
 *
 * the li element that is returned has the structure :
 * '&lt;li><span>itemName</span> <button>Delete</button></li>'.
 *
 * @param {string} newItem name of the item to add to the list.
 * @returns {HTMLElement} li element.
 */

function createNewListItem(newItem) {
  const li = document.createElement('li');
  const span = document.createElement('span');
  const deleteBox = document.createElement('button');

  deleteBox.addEventListener('click', function () {
    li.remove();
  });

  span.innerText = newItem;
  li.appendChild(span);
  deleteBox.innerText = 'Delete';
  li.appendChild(deleteBox);
  return li;
}