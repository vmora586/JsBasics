//shows as much lines with stars as the limit indicated

showStars(10);
function showStars(limit) {
  for (let i = 1; i <= limit; i++) {
    let stars = "";
    for (let j = 1; j <= i; j++) {
      stars += "*";
    }
    console.log(stars);
  }
}
