// pruebas con test
window.validarCorreo = function validarCorreo(valor) {
  if (valor.length === 0) {
    return false;
  }
  return true;
};

// Si el contenido  no es un número válido, no se cumple la condición
window.validarSiNumero = function validarSiNumero(numero) {
  if (isNaN(numero)) {
    return false;
  }
  return true;
};

window.iniciarSesion = function iniciarSesion() {
  const email2 = document.getElementById('icon_email').value;// input email
  const password2 = document.getElementById('icon_password').value;// imput contraseña

  firebase.auth().signInWithEmailAndPassword(email2, password2)// función de firebase para auntenticar email y contraseña
    .then(listo => {
      redirect();
    }).catch(function(error) {
    // Se manejan los errores de autenticación.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
    });
};
function redirect() {
  location = 'inicio.html';
}
// prueba holovisitas@hotmail.com clav 12345678