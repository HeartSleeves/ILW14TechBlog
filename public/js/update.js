const updateBtnHandler = async (event) => {
  event.preventDefault();
  const title = document.querySelector(".updatetitle").value;
  const body = document.querySelector(".postcontent").value;
  console.log(title);
  console.log(body);
  const response = await fetch(`/api/posts/update/${postid}`, {
    method: "PUT",
    body: JSON.stringify({ body, title, postid }),
    headers: { "Content-Type": "application/json" },
  });
  if (response.ok) {
    console.log("success");
    document.location.replace("/dashboard");
  } else {
    alert(response.statusText);
  }
};

const delBtnHandler = async (event) => {
  console.log("clicky");

  const response = await fetch(`/api/posts/${postid}`, {
    method: "DELETE",
  });

  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert("Failed to delete post");
  }
};

document.querySelector("#deletebtn").addEventListener("click", delBtnHandler);

document
  .querySelector("#updatebtn")
  .addEventListener("click", updateBtnHandler);

const postid = document.querySelector(".postid").innerHTML;
