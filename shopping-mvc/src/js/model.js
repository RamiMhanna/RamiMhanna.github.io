/**
 * Shopping List model.
 *
 * the list is modelled as an array.
 */
class Model {
  constructor(controller) {
    /**
     * @param controller {!Controller} app controller.
     */
    console.log('Model initialised');
    /**
     * @private {!ShoppingListItem[]} Items in the list.
     */
    this.items_ = [];
    /**
     * @private {!View} view for this model.
     */
    this.view_ = new View(this, controller);
    this.view_.update();
  }

  /**
   * @return {!ShoppingListItem[]} Array of items
   */
  get items() {
    return this.items_.slice();
  }

  /**
   * Appends a new item to the list.
   *
   * @param item {!ShoppingListItem}
   */
  append(item) {
    this.items_.push(item);
    this.view_.update();
  }

  /**
   * Delete the i'th item from the list.
   *
   * @param i {number}
   */
  delete(i) {
    this.items_.splice(i, 1);
    this.view_.update();
  }

  /**
   * Clear the shopping list of all items.
   */
  clear() {
    this.items_ = [];
    this.view_.update();
  }
}
