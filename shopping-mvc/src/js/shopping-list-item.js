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