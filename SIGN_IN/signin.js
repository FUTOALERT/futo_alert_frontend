const form = document.getElementById("signinForm");

form.addEventListener("submit", (e) => {
  //   e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const userDetails = {
    email: email,
    password: password,
  };

  fetch("", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userDetails),
  })
    .then((res) => {
      res.json();
    })
    .then((data) => {
      console.log("Details stored successfully");
    })
    .catch((error) => {
      console.log("Error occurred", error);
    });
  alert("Thanks for signing up");
});
