const newPostHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector("#titleinput").value.trim();
  const body = document.querySelector("#bodyinput").value.trim();

  if (title && body) {
    const response = await fetch(`/api/posts/`, {
      method: "POST",
      body: JSON.stringify({ title, body }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert("Failed to create post");
    }
  }
};

document.querySelector("#newpost").addEventListener("submit", newPostHandler);
