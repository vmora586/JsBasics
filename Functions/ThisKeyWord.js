/**
 * "This" references the Object that is executing the current function.
 * If that function is part of an object (method) this references the object itself
 * (method -> obj)
 * If the function is a regular function, this references the Global object
 * (function -> window (browser), global (node))
 */

//pointing to the object itself
const video = {
  title: "a",
  show: function () {
    console.log(this);
  },
};

video.show(); //this will show the Video object itself.

//Pointing to the Window/Global object
function showVideo() {
  console.log(this); //will show the object window.
}
showVideo();

//There is an exception for the rule, when working with the object initializer convention
function Video(title) {
  this.title = title;
}
const localVideo = new Video("b");
//it wiil show new viedeo with title b
console.log(localVideo);

//let's check a particular case....

const particularVideo = {
  title: "c",
  tags: [1, 2, 3, 4],
  showTags: function () {
    this.tags.forEach((tag) => {
      console.log(this.title, tag);
    }, this); //"this" points to the object itself, if we do not put it as parameter here, in line 40 it will point to the window object;
  },
};

particularVideo.showTags();
