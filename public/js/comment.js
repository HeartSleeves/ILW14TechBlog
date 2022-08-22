const addComment = async (event) => {
  event.preventDefault();
  const body = document.querySelector("#bodyinput").value.trim();

  if (body) {
    const response = await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({ body, postid }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      console.log("success");
      document.querySelector("#addcomment").classList.add("hidden");
      window.location.reload();
    } else {
      alert(response.statusText);
    }
  }
};

function showAddComment() {
  document.querySelector("#addcomment").classList.remove("hidden");
}

document
  .querySelector("#addcommentbtn")
  .addEventListener("click", showAddComment);

document.querySelector("#submitbtn").addEventListener("click", addComment);

const postid = document.querySelector(".postid").innerHTML;
