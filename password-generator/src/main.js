const password = document.getElementsByClassName("password")[0];
const btn_generate = document.getElementsByClassName("btn_generate")[0];
const copy = document.getElementById("copy");

function generate_password() {
  const length = 16;
  const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
  let password = "";

  for (let i = 0; i < length; i++) {
    const random = Math.floor(Math.random() * charset.length);
    password += charset[random];
  }
  console.log(password);
  return password;

}

btn_generate.addEventListener("click", () => {
  password.value = generate_password();
});

copy.addEventListener("click", async () => {
  try {
    // Copia el texto al portapapeles
    await navigator.clipboard.writeText(password.value);
  } catch (err) {
    console.error('Error:', err);
  }
});