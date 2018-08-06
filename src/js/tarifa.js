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