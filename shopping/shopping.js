document.addEventListener('DOMContentLoaded', function () {
  const item = document.getElementById('item');
  const ul = document.querySelector('ul');
  const btn = document.querySelector('button');
  const deleteAll = document.getElementById('delAll');
  deleteAll.className = 'hidden';

  deleteAll.addEventListener('click', function () {
    document.querySelectorAll('li').forEach(function (li) {
      li.remove();
    });
    hideDelBtn();
    item.focus();
  });

  item.addEventListener('keyup', function () {
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
    hideDelBtn();
  });

  btn.addEventListener('click', function () {
    const trimmedvalue = item.value.trim();

    ul.appendChild(createNewListItem(trimmedvalue));
    item.value = '';
    btn.disabled = true;
    item.focus();
    hideDelBtn();
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
    hideDelBtn();
  });
  span.innerText = newItem;
  li.appendChild(span);
  deleteBox.innerText = 'Delete';
  li.appendChild(deleteBox);
  return li;
}

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