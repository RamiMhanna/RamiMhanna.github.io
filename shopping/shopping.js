// Make sure that the DOM contents is Loaded.
document.addEventListener('DOMContentLoaded', function () {
  let item = document.getElementById('item');
  let ul = document.querySelector('ul');
  let btn = document.querySelector('button');
  item.addEventListener('keyup', function (event) {
    if ((event.key === 'Enter') && (createNewListItem(item.value) !== null)) {
      ul.appendChild(createNewListItem(item.value));
      item.value = '';
    }
  });
  // check if the add button is clicked.
  btn.addEventListener('click', function () {
    // if the Value in the Item box is not empty then add new item.
    if (item.value !== '') {
      ul.appendChild(createNewListItem(item.value));
      item.value = '';
    }
    // if the Value in the item box is empty, then show alert message.
    else {
      alert('You have to enter some text');
    }
  });
});

// Create a new list element.
function createNewListItem(newItem) {
  // Check if the newItem is  empty.
  if ((newItem === '')) {
    alert('You have to enter some text');
    return null;
  }
  // If the newItem is not empty.
  else {
    // Add a new item.
    let li = document.createElement('li');
    let span = document.createElement('span');
    span.innerText = newItem;
    li.appendChild(span);
    // Adding an input element to the li and hide it ,in case we wanted to change the value.
    let inputBox = document.createElement('input');
    li.appendChild(inputBox);
    inputBox.className = 'hide ';
    // Check if the list item is clicked and switch it to input box to edit its value.
    span.addEventListener('click', function () {
      inputBox.className = '';
      span.className = 'hide';
      inputBox.focus();
      inputBox.value = span.innerText;
      inputBox.setSelectionRange(0, inputBox.value.length);
    });
    // After editing the Value , if the key Enter is pressed switch the input box to the span element(list item).
    inputBox.addEventListener('keypress', change);

    function change(event) {
      console.log(event.which);
      if (event.key === 'Enter') {
        // If the new value is not empty, then switch.
        if (inputBox.value !== '') {
          inputBox.previousElementSibling.innerText = inputBox.value;
          inputBox.className = 'hide';
          span.className = '';
          // If the new Value is empty, then delete the list item.
        } else {
          this.parentElement.remove();
        }
      }
    }

    return li;
  }
}
