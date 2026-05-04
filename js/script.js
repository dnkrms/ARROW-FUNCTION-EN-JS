const login = () => {
  const usuario = document.getElementById("usuario").value;
  const password = document.getElementById("password").value;
  const error = document.getElementById("error");

  const usuarioCorrecto = "admin";
  const passwordCorrecto = "1234";

  if (usuario === usuarioCorrecto && password === passwordCorrecto) {
    alert("Ingreso correctamente");
    error.textContent = "";
  } else {
    error.textContent = "Usuario o contraseña incorrectos";
  }
};
