// ログインフォームの要素を取得する
const loginForm = document.querySelector(".login-form");
const emailInput = loginForm.querySelector("#email");
const passwordInput = loginForm.querySelector("#password");
const loginButton = loginForm.querySelector("#login-button");

// emailとpasswordがlocalStorageに保存されている場合、自動入力する
if (localStorage.getItem("email")) {
  emailInput.value = localStorage.getItem("email");
}

if (localStorage.getItem("password")) {
  passwordInput.value = localStorage.getItem("password");
}

// ログインボタンがクリックされたら、emailとpasswordをlocalStorageに保存する
loginButton.addEventListener("click", function () {
  localStorage.setItem("email", emailInput.value);
  localStorage.setItem("password", passwordInput.value);
});

