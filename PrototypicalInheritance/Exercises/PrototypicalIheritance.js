/**
 * In this exercise you are asked to create two objects.
 * 1. HtmlElement wich has one method called Click(), and in its prototype we have another method
 * called focus().
 *
 */

function HtmlElement() {
  this.click = function () {
    console.log("clicked");
  };
}

HtmlElement.prototype.focus = function () {
  console.log("focused");
};

function HtmlSelectHelement(values = []) {
  //ES6 sintax
  let items = values;

  this.addItem = function (item) {
    items.push(item);
    items.sort();
  };

  this.removeItem = function (item) {
    items.splice(items.indexOf(item), 1);
  };

  Object.defineProperty(this, "Items", {
    get() {
      return items;
    },
  });
}

//if we use traditional approach (Object.create(HtmlElement.prototype)) it will not work.
HtmlSelectHelement.prototype = new HtmlElement();
