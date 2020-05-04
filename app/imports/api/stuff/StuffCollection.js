import SimpleSchema from 'simpl-schema';
import { check } from 'meteor/check';
import { _ } from 'meteor/underscore';
import BaseCollection from '../base/BaseCollection';

export const stuffConditions = ['excellent', 'good', 'fair', 'poor'];

class StuffCollection extends BaseCollection {
  constructor() {
    super('Stuffs', new SimpleSchema({
      name: String,
      quantity: Number,
      owner: String,
      condition: {
        type: String,
        allowedValues: stuffConditions,
        defaultValue: 'good',
      },
    }));
  }

  /**
   * Defines a new Stuff item.
   * @param name the name of the item.
   * @param quantity how many.
   * @param owner the owner of the item.
   * @param condition the condition of the item.
   * @return {String} the docID of the new document.
   */
  define({ name, quantity, owner, condition }) {
    const docID = this._collection.insert({
      name,
      quantity,
      owner,
      condition,
    });
    return docID;
  }

  /**
   * Updates the given document.
   * @param docID the id of the document to update.
   * @param name the new name (optional).
   * @param quantity the new quantity (optional).
   * @param condition the new condition (optional).
   */
  update(docID, { name, quantity, condition }) {
    const updateData = {};
    if (name) {
      updateData.name = name;
    }
    // if (quantity) { NOTE: 0 is falsy so we need to check if the quantity is a number.
    if (_.isNumber(quantity)) {
      updateData.quantity = quantity;
    }
    if (condition) {
      updateData.condition = condition;
    }
    this._collection.update(docID, { $set: updateData });
  }

  /**
   * A stricter form of remove that throws an error if the document or docID could not be found in this collection.
   * @param { String | Object } name A document or docID in this collection.
   * @returns true
   */
  removeIt(name) {
    const doc = this.findDoc(name);
    check(doc, Object);
    this._collection.remove(doc._id);
    return true;
  }
}

/**
 * Provides the singleton instance of this class to all other entities.
 */
export const Stuffs = new StuffCollection();
