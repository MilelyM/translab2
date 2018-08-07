const assert = require('chai').assert;
global.window = global;
require('../src/js/iniciarSesion.js');// ruta auto  completada

// para describir que se validara
describe('Debería verificar si existir correo', ()=>{
  it('Debería no estar vacio el campo', ()=>{ // Caso de prueba
    assert.equal(validarCorreo('holovisitas@hotmail.com'), true); // assert.equal verifica que el parámetro 1 sea igual al parámetro 2
    assert.equal(validarCorreo(''), false);
  });
});
describe('Debería verificar el inicio de sesion  ', ()=>{
  it('debería exponer función ', () => {
    assert.isFunction(iniciarSesion);
  });
});
describe('Debería verificar contraseña', ()=>{
  it('Debería tener solo numeros', ()=>{ // Caso de prueba
    assert.equal(validarSiNumero('234556'), true); // assert.equal verifica que el parámetro 1 sea igual al parámetro 2
    assert.equal(validarSiNumero('ghjg'), false);
    assert.equal(validarSiNumero('ghjgt6'), false);
    assert.equal(validarSiNumero('ghjg...g'), false);

  });
});

    
// como hacerlo
/* describe('validar contraseña', ()=>{
  it('La contraseña debe tener máximo 8 caracteres', ()=>{
    assert.equal(validarContraseña('12346578'), true);
    aseert.equal(validarContraseña('1234567898'), false);
  });
  it('La contraseña minimo 6 numeros', ()=>{
    assert.equal(validarContraseña('12346578'), true);
    aseert.equal(validarContraseña('1b6n65h'), false);
  });
  it('La contraseña sea solo numeros', ()=>{
    assert.equal(validarContraseña('12346578'), true);
    aseert.equal(validarContraseña('1b6n65h'), false);
  });
});*/

