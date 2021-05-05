/**
 * for this excercise please create an object with the next properties:
 * title
 * body
 * author
 * views
 * comments
 * (author, body)
 * isLive (boolean)
 * Create an object literal sintax to create an initialize a BlogPost.
 * It does not matter if the properites has or not a value. Main purpose of this excercise is to feel comfortable
 * with the object literal sintax
 */

let blogPost = {
  title: "a",
  body: "b",
  author: "c",
  views: 1,
  comments: [
    {
      author: "d",
      body: "e",
    },
    {
      author: "f",
      body: "g",
    },
  ],
  isLive: true,
};

console.log(blogPost);
