document.getElementById('btnsaldo2').addEventListener('click', calcularTarifa);

function calcularTarifa() {
  let tarjeta2 = document.getElementById('numerot2').value;

  fetch(`http://bip-servicio.herokuapp.com/api/v1/solicitudes.json?bip=${tarjeta2}`)
    .then(function(resp) {
      // console.log(resp.json())
      return resp.json();
    })
    .then(function(valores) {
      // console.log(valores)
      let data = Object.values(valores);
      var saldoTarjeta2 = data[2];
      console.log(saldoTarjeta2);

      var regex = /(\d+)/g;
      console.log(saldoTarjeta2.match(regex)); 
      let prueba = saldoTarjeta2.match(regex);
      let prueba2 = prueba[0] += prueba[1];
    
      let conHora = document.getElementById('selec2').value;
    
      // console.log(conHoraAlto)
      let resultado = prueba2 - conHora;
      // El objeto Intl.NumberFormat es un constructor para objetos que permiten un formato numérico sensible al idioma
      // // En el alemán la coma se utiliza como separador decimal y el punto para los millares
      let prueba3 = new Intl.NumberFormat('de-DE').format(resultado);
      // let n = parseInt(prueba[0]) + number;
      console.log(`$${prueba3}`);
      document.getElementById('tarifa').innerHTML = `$${prueba3}`;
    });
}
/*
function calcularTarifa() {
}
var selec = document.getElementById('selec2');
db.collection('tarjetas').onSnapshot((querySnapshot) => {
// limpiamos la tabla

  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data()}`);
    console.log(doc.data().tarjeta);
    console.log(doc.id);

    selec.innerHTML = `     
    <select >
    <option>${doc.data().tarjeta}</option>
    </select> 
   ` + selec.innerHTML;
  });
});*/