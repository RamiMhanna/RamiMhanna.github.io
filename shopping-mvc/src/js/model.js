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
    this.item_ = [];
    /**
     * @private {!View} view for this model.
     */
    this.view_ = new View(this, controller);
  }
}
