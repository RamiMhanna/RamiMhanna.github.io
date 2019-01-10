// Create a new list element.
function createNewListItem(newItem) {
  // Check if the newItem is  empty.
  if ((newItem === '')) {
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
    let input = document.createElement('input');
    li.appendChild(input);
    input.className = 'hide ';

    // Check if the list item is clicked and switch it to input box to edit its value.
    span.addEventListener('click', function () {
      input.className = '';
      span.className = 'hide';
      input.focus();
      input.value = span.innerText;
      input.setSelectionRange(0, input.value.length);
    });
    // After editing the Value , if the key Enter is pressed switch the input box to the span element(list item).
    input.addEventListener('keypress', change);

    function change(event) {
      console.log(event.which);
      if (event.which === 13) {
        // If the new value is not empty, then switch.
        if (input.value !== '') {
          input.previousElementSibling.innerText = input.value;
          input.className = 'hide';
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

