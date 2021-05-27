/**
 * There are several ways of changing the value what the 'this' property is pointing to.
 * Some of them are already deprecated and can result confuse. The newest way applied since ES6
 * is by using arrow functions
 */

const video = {
  title: "a",
  tags: [1, 2, 3, 4, 5],
  showTags: function () {
    this.tags.forEach((tag) => {
      console.log(this.title, tag); //by using arrow function is not required do any other modification
    });
  },
};

video.showTags();
