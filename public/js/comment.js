const addComment = async (event) => {
  event.preventDefault();
  console.log(postid);
  const body = document.querySelector("#bodyinput").value.trim();

  if (body) {
    const response = await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({ body, postid }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      console.log("success");
    } else {
      alert(response.statusText);
    }
  }
  document.querySelector("#addcomment").classList.add("hidden");
};

function showAddComment() {
  document.querySelector("#addcomment").classList.remove("hidden");
}

document
  .querySelector("#addcommentbtn")
  .addEventListener("click", showAddComment);

document.querySelector("#submitbtn").addEventListener("click", addComment);

const postid = document.querySelector(".postid").innerHTML;
