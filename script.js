console.log("hi");
const loginForm = document.querySelector("#login-form");
// const login_url = "http://localhost:3000/login"

loginForm.addEventListener("submit", () => {
  event.preventDefault();
  //   console.log("username:", event.target.username.value);
  //   console.log("password:", event.target.password.value);
  let loginUsername = event.target.username.value;
  let loginPassword = event.target.password.value;
  fetch("http://localhost:3000/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      user: {
        username: loginUsername,
        password: loginPassword
      }
    })
  })
    .then(response => response.json())
    .then(result => {
      localStorage.setItem("token", result.token);
    })
    .catch(error => console.log(error));
});

if (localStorage.token) {
  const logoutButton = document.createElement("button");

  logoutButton.innerText = "Log-out";

  document.body.append(logoutButton);

  logoutButton.addEventListener("click", () => {
    localStorage.removeItem("token");
  });

  fetch("http://localhost:3000/profile", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${localStorage.token}`
    }
  })
    .then(response => response.json())
    .then(user => {
      console.log("user", user);
      let loggedInUser = document.createElement("h1");
      loggedInUser.textContent = user.name;
      document.body.append(loggedInUser);
    })
    .catch(error => console.log(error));
}
