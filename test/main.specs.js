const assert = require('chai').assert;
global.window = global;
require('../src/js/main.js');// ruta auto  completada

// para describir que se validara
describe('Iniciar sesión',()=>{// que hacer
    describe('Debería verificar si existe el arroba', ()=>{
        it('Debería el correo tener solo un arroba', ()=>{ //Caso de prueba
            assert.equal(validarEmail("asdf@asdf.com"), true); //assert.equal verifica que el parámetro 1 sea igual al parámetro 2
            assert.equal(validarEmail("asdf@@asdf.com"), false);
            assert.equal(validarEmail("asdf.com"), false);
        });
    });
    
// como hacerlo
describe('validar contraseña',()=>{
    it('La contraseña debe tener máximo 8 caracteres',()=>{
        assert.equal(validarContraseña('12346578'),true);
        aseert.equal(validarContraseña('1234567898'),false);
    });
    it('La contraseña minimo 6 numeros',()=>{
        assert.equal(validarContraseña('12346578'),true);
        aseert.equal(validarContraseña('1b6n65h'),false);
    });
    it('La contraseña sea solo numeros',()=>{
        assert.equal(validarContraseña('12346578'),true);
        aseert.equal(validarContraseña('1b6n65h'),false);
    });
});

})
