function showAddComment() {
  console.log("click");
  document.querySelector("#addcomment").classList.remove("hidden");
}

function addComment() {
  console.log("click");
  document.querySelector("#addcomment").classList.add("hidden");
}

document
  .querySelector("#addcommentbtn")
  .addEventListener("click", showAddComment);

document.querySelector("#submitbtn").addEventListener("click", addComment);
