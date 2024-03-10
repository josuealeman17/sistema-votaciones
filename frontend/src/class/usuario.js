class ValidacionUsuario {
  constructor() {
    this.cedula = "";
    this.valido = false;
    this.contraseña = "";
    this.usuarios = {
      "usuarios": [
        {
          "cedula": "1723653976",
          "contraseña": "1723653976"
        },
        {
          "cedula": "1752061828",
          "contraseña": "1752061828"
        },
        {
          "cedula": "123",
          "contraseña": "123"
        },
      ]
    };
  }

  setValido(valido) {
    this.valido = valido;
  }

  getValido() {
    return this.valido;
  }

  setCedula(cedula) { 
    this.cedula = cedula;
  }

  setContraseña(contraseña) {
    this.contraseña = contraseña;
  }

  validacionCedula() {
    var isNumeric = true;
    var total = 0,
      individual;

    for (var position = 0; position < 10; position++) {
      individual = this.cedula.toString().substring(position, position + 1);

      if (isNaN(individual)) {
        console.log(this.cedula, position, individual, isNaN(individual));
        isNumeric = false;
        break;
      } else {
        if (position < 9) { 
          if (position % 2 === 0) {
            if (parseInt(individual) * 2 > 9) {
              total += 1 + ((parseInt(individual) * 2) % 10);
            } else {
              total += parseInt(individual) * 2;
            }
          } else {
            total += parseInt(individual);
          }
        }
      }
    }

    if (total % 10 !== 0) {
      total = total - (total % 10) + 10 - total;
    } else {
      total = 0;
    }
    
    if (isNumeric) {
      if (this.cedula.toString().length !== 10) {
        this.setValido(false);
        return;
      }

      if (parseInt(this.cedula, 10) === 0) {
        this.setValido(false);
        return;
      }

      if (total !== parseInt(individual)) { 
        this.setValido(false);
        return;
      }

      const foundUser = this.usuarios.usuarios.find(user => user.cedula === this.cedula);
      if (!foundUser) {
        this.setValido(false);
        return;
      }
      else {
        const validarContraseña = this.usuarios.usuarios.find(user => user.cedula === this.cedula && user.contraseña === this.contraseña);
        if(!validarContraseña){
          this.setValido(false);
          return;
        }
        this.setValido(true);
        this.contraseña = foundUser.contraseña;
        return;
      }
    }

    this.setValido(false);
    return;
  }
}

module.exports = ValidacionUsuario;
