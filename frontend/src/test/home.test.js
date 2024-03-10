let Cedula = require('../class/usuario.js');

describe("Funciones para validar el ingreso del usuario", () => {
    describe('Validar Cédula', () => {
        it('debería validar la cédula y contraseña correctamente', () => {
            let cedula = new Cedula();
            cedula.setCedula('1723653976');
            cedula.setContraseña('1723653976')
            cedula.validacionCedula();
            expect(cedula.getValido()).toBe(true);
        });
    });
});
