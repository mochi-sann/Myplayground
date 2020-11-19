var posts = {
  test1: {
    23: "1",
    24: "2",
  },
  test2: {
    23: "21",
    24: "22",
  },
  test3: {
    23: "31",
    24: "32",
  },
};

// for (let i = posts.length - 1; i > 0; i--) {
//     var j = Math.floor(Math.random() * (i + 1));
//     var tmp = posts[i];
console.log(JSON.stringify(posts));
//     posts[i] = posts[j];
//     posts[j] = tmp;
//   }
for (var i = posts.length - 1; i > 0; i--) {
  var rand = Math.floor(Math.random() * (i + 1));
  [posts[i], posts[rand]] = [posts[rand], posts[i]];
}
console.log(JSON.stringify(posts));
console.log("てすと");
