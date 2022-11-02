/**
 * Clase encargada de mostrar mensajes.
 *
 **/
class Mensaje {
  /**
   * @method mostrarMsjExito
   * Método que se encarga mostrar un panel de exito en pantalla.
   *
   * @param {String} titulo    Título del panel.
   * @param {String} msg      Mensaje mostrado en el panel.
   */
  static mostrarMsjExito(titulo, msg, funcion) {
    console.log('funcion', funcion)
    Swal.fire({
      icon: "success",
      title: titulo,
      html: msg,
      iconColor: '#8bc34a',
      buttonsStyling: false,
      customClass: {
        confirmButton: 'btn-linear-swal',
      },
      confirmButtonText: "Aceptar",
    }).then(function (result) {
      if (funcion) {
        funcion()
      }
    });
  }

  /**
   * @method mostrarMsjError
   * Método que se encarga mostrar un panel de error en pantalla.
   *
   * @param {String} titulo    Título del panel.
   * @param {String} msg      Mensaje mostrado en el panel.
   */
  static mostrarMsjError(titulo, msg) {
    Swal.fire({
      icon: "error",
      title: titulo,
      html: msg,
      iconColor: '#df1949',
      buttonsStyling: false,
      customClass: {
        confirmButton: 'btn-linear-swal',
      },
      confirmButtonText: "Aceptar",
    });

  }

  /**
   * @method mostrarMsjWarning
   * Método que se encarga mostrar un panel de advertencia en pantalla.
   *
   * @param {String}      titulo       Título del panel.
   * @param {String}      msg         Mensaje mostrado en el panel.
   * @param {Function}    funcion     Función a ejecutar luego de aceptar la advertencia.
   */
  static mostrarMsjWarning(titulo, msg, funcion) {
    Swal.fire({
      icon: "warning",
      title: titulo,
      html: msg,
      buttonsStyling: false,
      customClass: {
        confirmButton: 'btn-linear-swal',
      },
      confirmButtonText: "Aceptar",
    }).then(function (result) {
      if (funcion) {
        funcion()
      }
    });
  }

  /**
   * @method mostrarMsjInfo
   * Método que se encarga mostrar un panel de informacion en pantalla.
   *
   * @param {String}      titulo       Título del panel.
   * @param {String}      msg         Mensaje mostrado en el panel.
   * @param {Function}    funcion     Función a ejecutar luego de aceptar la advertencia.
   */
  static mostrarMsjInfo(titulo, msg, funcion) {
    Swal.fire({
      icon: "info",
      title: titulo,
      html: msg,
      buttonsStyling: false,
      customClass: {
        confirmButton: 'btn-linear-swal',
      },
      confirmButtonText: "Aceptar",
    }).then(function (result) {
      if (funcion) {
        funcion()
      }
    });
  }

  /**
   * @method mostrarMsjConfirmacion
   * Método que se encarga de mostrar un mensaje de confirmación.
   *
   * @param {String}    titulo    Titulo del panel.
   * @param {String}    msg       Mensaje del panel.
   * @param {Function}  funcion   Función a ejecutar si se confirma el panel.
   */
  static mostrarMsjConfirmacion(titulo, msg, funcion) {
    Swal.fire({
      icon: "warning",
      title: titulo,
      html: msg,
      confirmButtonColor: "#198754",
      confirmButtonText: "Aceptar",
      showCancelButton: true,
      cancelButtonText: "Cancelar",
    }).then(function (result) {
      if (result.isConfirmed) {
        if (funcion) {
          funcion()
        }
      }
    });
  }

  /**
   * @method validarTexto
   * Método que se encarga de validar un texto.
   *
   * @param {String}    input    input para obtener el Texto a validar solo letras y números.
   * @param {String}    otros    Campo para adicionar mas caracteres validos.
   * * @param {String}  tipo     Campo para definir el tipo de validacion (l)letras, (n)números o default
   */
  static validarTexto(input, otros, tipo) {
    let out = "";
    let filtro = "";

    if (tipo == "l") {
      filtro =
        otros +
        "abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZáéíóúÁÉÍÓÚ"; //Caracteres validos
    }
    if (tipo == "a") {
      filtro =
        otros +
        "abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ1234567890áéíóúÁÉÍÓÚ :.,/\n/g"; //Caracteres validos
    } else if (tipo == "n") {
      filtro = otros + "1234567890"; //Caracteres validos
    } else {
      filtro =
        otros +
        "abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ1234567890áéíóúÁÉÍÓÚ"; //Caracteres validos
    }

    for (var i = 0; i < input.value.length; i++) {
      if (filtro.indexOf(input.value.charAt(i)) != -1)
        out += input.value.charAt(i);
    }
    $("#" + input.id).val(out);
  }

  /**
   * @method validarTexto
   * Método que se encarga de validar un texto.
   *
   * @param {String}    input    input para obtener el Texto a validar solo letras y números.
   * @param {String}    otros    Campo para adicionar mas caracteres validos.
   * * @param {String}  tipo     Campo para definir el tipo de validacion (l)letras, (n)números o default
   */
  static validarTextoSinTilde(input, otros, tipo) {
    let out = "";
    let filtro = "";

    if (tipo == "l") {
      filtro = otros + "abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ"; //Caracteres validos
    }
    if (tipo == "a") {
      filtro =
        otros +
        "abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ1234567890 :.,/\n/g"; //Caracteres validos
    } else if (tipo == "n") {
      filtro = otros + "1234567890"; //Caracteres validos
    } else {
      filtro =
        otros +
        "abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ1234567890"; //Caracteres validos
    }

    for (var i = 0; i < input.value.length; i++) {
      if (filtro.indexOf(input.value.charAt(i)) != -1)
        out += input.value.charAt(i);
    }
    $("#" + input.id).val(out);
  }
}
