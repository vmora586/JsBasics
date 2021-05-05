function Post(author, body, title) {
  this.author = author;
  this.body = body;
  this.title = title;
  this.views = 0;
  this.comments = [];
  this.isLive = false;
}

let post = new Post("a", "b", "c");
console.log(post);
