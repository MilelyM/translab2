function iniciarSesion() {
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
}
function redirect() {
  location = 'inicio.html';
}
// prueba holovisitas@hotmail.com clav 12345678