// API http://bip-servicio.herokuapp.com/api/v1/solicitudes.json?bip={id}

window.validarEmail = function(email) {
  
  
};
document.getElementById('btnsaldo').addEventListener('click', carga);
function carga() {
  let tarjeta = document.getElementById('numerot').value;

  fetch(`http://bip-servicio.herokuapp.com/api/v1/solicitudes.json?bip=${tarjeta}`)
    .then(function(resp) {
      // console.log(resp.json())
      return resp.json();
    })
    .then(function(valores) {
      // console.log(valores)
      let data = Object.values(valores);
      // console.log(data)
      let idTarjeta = data[0];
      // console.log(idTarjeta)
      let estadoContrato = data[1];
      // console.log(estadoContrato)
      let saldoTarjeta = data[2];

      console.log(saldoTarjeta);
      // verSaldo(saldoTarjeta)
      // prueba(saldoTarjeta)
      // number = (saldoTarjeta) + 760;
      // console.log( suma)
      // console.log(number)
      let fechaSaldo = data[3];
      // console.log(fechaSaldo)
      // console.log(data);
      // console.log(estadoContrato);
      // console.log(saldoTarjeta);
      document.getElementById('cajaDeTexto').innerHTML = saldoTarjeta;
    });
}


/* function prueba(saldoTarjeta){
    var regex = /(\d+)/g;

    //console.log(saldoTarjeta.match(regex)); 
    let prueba = saldoTarjeta.match(regex);
     let prueba2 =prueba[0]+= prueba[1];
     const horarioAlto= 760;
    const horarioMedio = 680;
    const horarioBajo = 630;
    let conHoraAlto = prueba2 - horarioAlto;
//console.log(r)
     //El objeto Intl.NumberFormat es un constructor para objetos que permiten un formato numérico sensible al idioma
     //// En el alemán la coma se utiliza como separador decimal y el punto para los millares
     let prueba3 =new Intl.NumberFormat("de-DE").format(conHoraAlto);
    //let n = parseInt(prueba[0]) + number;
    console.log(`$${prueba3}`)
}*/