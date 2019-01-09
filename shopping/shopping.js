// create a new list element
function createNewListItem(newItem) {
  // check if the newItem is  empty
  if ((newItem === '')) {
    return null;
  }
  // if the newItem is not empty
  else {
    let li = document.createElement('li');
    let span = document.createElement('span');
    span.innerText = newItem;
    li.appendChild(span);
    let button = document.createElement('button');
    // Remove the list element if the delete button is clicked
    button.addEventListener('click', function () {
      li.remove();
    });
    let buttonText = document.createTextNode('delete');
    button.appendChild(buttonText);
    li.appendChild(button);
    return li;
  }
}

// Make sure that the DOM contents is Loaded.
document.addEventListener('DOMContentLoaded', function () {
  // check if the add button is clicked.
  document.querySelector('button').addEventListener('click', function () {
    // if the Value in the Item box is not empty then add new item.
    if (document.getElementById('item').value !== '') {
      document.querySelector('ul').appendChild(createNewListItem(document.getElementById('item').value));
      document.getElementById('item').value = '';
    }
    // if the Value in the item box is empty, then show alert message.
    else {
      alert('You have to enter some text');
    }
  });
});

