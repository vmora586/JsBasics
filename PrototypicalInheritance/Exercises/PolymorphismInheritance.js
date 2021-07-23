/**
 * Starting from the previous exercise, let´s add a new method call Render() which once
 * we pass an array with three elements on the HtmlSelectElement constructor ([1,2,3]),
 * shows this:
 * <select>
 *      <option>1</option>
 *      <option>1</option>
 *      <option>1</option>
 * </select>
 * HtmlSelectElement object must keep previous features and capabilities
 */

function HtmlElement() {
  this.click = function () {
    console.log("click");
  };
}

HtmlElement.prototype.focus = function () {
  console.log("focued");
};

function HtmlSelectElement(items = []) {
  this.items = items;

  this.addItem = function (item) {
    //adding a new element to the item list
    items.push(item);
    items.sort();
  };

  this.removeItem = function (item) {
    items.splice(items.indexOf(item), 1);
  };

  this.render = function () {
    return `<select> ${this.items
      .map((item) => `<option>${item}</option>`)
      .join("")}
    </select>`;
  };
}

/*
  Object.defineProperty(this, "Items", {
    get() {
      return items;
    },
  });
}
*/

HtmlSelectElement.prototype = new HtmlElement();
