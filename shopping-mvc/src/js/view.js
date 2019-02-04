/**
 * HTML View for the ShoppingList
 */
class View {
  /**
   * @param model {!Model} App data model
   * @param controller {!Controller} App controller
   */
  constructor(model, controller) {
    console.log('View ready!');
    /**
     * @type {!Model} data model
     * @private
     */
    this.model_ = model;
    /**
     * @type {!Controller} App controller
     * @private
     */
    this.controller_ = controller;

  }
}