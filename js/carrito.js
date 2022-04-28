let carrito;
let cliente;

class Carrito {
  constructor(cliente) {
    this.cliente = cliente;
    this.productosSeleccionados = [];
    this.tipoCuotas = { cantidadCuotas: 0, porcentajeRecargo: 0 };
  }

  agregarProducto(producto) {
    this.productosSeleccionados.push(producto);
    // guardarObjetoLocal(claveCarrito, this);
    guardarCarritoLocal(this);
  }

  quitarProducto(producto) {
    let index = this.productosSeleccionados.findIndex(
      (item) => item.nombre == producto.nombre
    );

    if (index >= 0) {
      this.productosSeleccionados.splice(index, 1);
    }
    guardarCarritoLocal(this);
  }

  calcularGastosEnvio() {
    let cp = Number(this.cliente.codigoPostal);

    switch (true) {
      case cp < 2000:
        return 250;
        break;
      case cp < 4000:
        return 450;
        break;
      case cp < 6000:
        return 650;
        break;
      case cp < 8000:
        return 850;
        break;
      case cp < 9999:
        return 1250;
        break;
      default:
        return 2000;
        break;
    }
  }

  calcularTotalCarritoSinRecargo() {
    return this.productosSeleccionados.reduce((acc, item) => {
      return (acc += item.precio);
    }, 0);
  }

  aplicarInteres(porcentajeRecargo) {
    return this.productosSeleccionados.map(
      (item) => item.precio + item.precio * porcentajeRecargo
    );
  }

  calcularTotalCarritoConRecargo() {
    return this.aplicarInteres(this.tipoCuotas.porcentajeRecargo).reduce(
      (acc, item) => (acc += item),
      0
    );
  }

  armarDetalleCuotas() {
    const costoCuota = this.calcularCostoCuota();
    let detalleCuotas = "";

    for (let i = 1; i <= this.tipoCuotas.cantidadCuotas; i += 1) {
      detalleCuotas += "<li>" + i + ") $" + costoCuota + "<li/>";
    }

    return detalleCuotas;
  }

  calcularCostoCuota() {
    return (
      (this.calcularTotalCarritoConRecargo() + this.calcularGastosEnvio()) /
      this.tipoCuotas.cantidadCuotas
    ).toFixed(2);
  }
}
/*---------INICIALIZAR CARRITO----------*/
const initCarrito = (sesionNueva) => {
  //Obtengo el objeto Cliente de Local Storage
  cliente = obtenerObjetoLocal(claveCliente);

  //Obtengo el objeto Carrito o lo creo
  carrito = getInstanciaCarrito(sesionNueva);

  // Completo Codigo Postal y Gastos de Envio de Resumen
  completarCPyGastosEnvio(cliente.codigoPostal, carrito.calcularGastosEnvio());

  // Completo Codigo Postal y Nombre de Usuario en Encabezado
  completarEncabezadoCPyCliente(cliente.codigoPostal, cliente.nombre);

  configurarBtnAumentarCantidad();
  configurarBtnDisminuirCantidad();
  completarCantidadesIniciales();

  //Actualizo detalle de cuotas
  const idBtn = obtenerValorLocal(claveIdBtnCuotas);
  actualizarRecargoCuotas(carrito.tipoCuotas.cantidadCuotas, idBtn);
  actualizarResumenCompra();
};

/*---------OBTENER INSTANCIA DE CARRITO----------*/
const getInstanciaCarrito = (sesionNueva) => {
  let instancia;

  if (sesionNueva) {
    //Creo la instancia Carrito con ese Cliente
    instancia = new Carrito(cliente);

    //Guardo el objeto Carrito en localStorage
    guardarCarritoLocal(instancia);
  } else {
    //Si existe una sesion abierta, creo un nuevo carrito con el contenido de Storage
    instancia = getCarritoLocal();
  }

  return instancia;
};

/*-------COMPLETAR COD Y GASTOS DE ENVIO-------*/
const completarCPyGastosEnvio = (codPostal, gastosEnvio) => {
  resumenCodigoPostal.innerHTML = codPostal;
  resumenMontoEnvio.innerHTML = gastosEnvio;
};

/*-------COMPLETAR ENCABEZADO CON COD POSTA Y CLIENTE-------*/
const completarEncabezadoCPyCliente = (codPostal, nombreCliente) => {
  encabezadoCodigoPostal.innerHTML = codPostal;
  encabezadoNombreCliente.innerHTML = nombreCliente;
};

/*-------CONFIGURACION BOTONES AUMENTAR CANTIDAD-------*/
function aumentarCantidadSeleccionada(objetoHTML, producto, cantidad = 1) {
  carrito.agregarProducto(producto);
  objetoHTML.innerHTML = obtenerCantidadProductoEnCarrito(producto);
  actualizarResumenCompra();
  actualizarDetalleCuotas();
  notificarProductoAñadido();
}

const configurarBtnAumentarCantidad = () => {
  btnMasGoku.addEventListener("click", () => {
    aumentarCantidadSeleccionada(cantidadGoku, goku);
  });
  btnMasPiccolo.addEventListener("click", () => {
    aumentarCantidadSeleccionada(cantidadPiccolo, piccolo);
  });
  btnMasVegeta.addEventListener("click", () => {
    aumentarCantidadSeleccionada(cantidadVegeta, vegeta);
  });
  btnMasGohan.addEventListener("click", () => {
    aumentarCantidadSeleccionada(cantidadGohan, gohan);
  });
  btnMasTrunks.addEventListener("click", () => {
    aumentarCantidadSeleccionada(cantidadTrunks, trunks);
  });
};

/*-------CONFIGURACION BOTONES DISMINUIR CANTIDAD-------*/
function disminuirCantidadSeleccionada(objetoHTML, producto, cantidad = 1) {
  let cantActual = obtenerCantidadProductoEnCarrito(producto);

  if (cantActual > 0) {
    carrito.quitarProducto(producto);
    objetoHTML.innerHTML = obtenerCantidadProductoEnCarrito(producto);
    notificarProductoEliminado();
    actualizarResumenCompra();
    actualizarDetalleCuotas();
  }
}

const configurarBtnDisminuirCantidad = () => {
  btnMenosGoku.addEventListener("click", () => {
    disminuirCantidadSeleccionada(cantidadGoku, goku);
  });
  btnMenosPiccolo.addEventListener("click", () => {
    disminuirCantidadSeleccionada(cantidadPiccolo, piccolo);
  });
  btnMenosVegeta.addEventListener("click", () => {
    disminuirCantidadSeleccionada(cantidadVegeta, vegeta);
  });
  btnMenosGohan.addEventListener("click", () => {
    disminuirCantidadSeleccionada(cantidadGohan, gohan);
  });
  btnMenosTrunks.addEventListener("click", () => {
    disminuirCantidadSeleccionada(cantidadTrunks, trunks);
  });
};

const notificarCambioUsuario = (
  texto,
  destino,
  posicionX,
  posicionY,
  colorBackground
) => {
  Toastify({
    text: texto,
    duration: 3000,
    destination: destino,
    newWindow: true,
    close: true,
    gravity: posicionX, // `top` or `bottom`
    position: posicionY, // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: colorBackground,
    },
    onClick: function () {}, // Callback after click
  }).showToast();
};

const notificarProductoAñadido = () => {
  const texto = "Producto Añadido!";
  const destino = "";
  const posicionX = "top"; // `top` or `bottom`
  const posicionY = "right"; // `left`, `center` or `right`
  const colorBackground = "linear-gradient(to right, #00b09b, #96c93d)";

  notificarCambioUsuario(texto, destino, posicionX, posicionY, colorBackground);
};
const notificarProductoEliminado = () => {
  const texto = "Producto Eliminado!";
  const destino = "";
  const posicionX = "top"; // `top` or `bottom`
  const posicionY = "right"; // `left`, `center` or `right`
  const colorBackground =
    "linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)";

  notificarCambioUsuario(texto, destino, posicionX, posicionY, colorBackground);
};

/*-------CONFIGURACION CANTIDADES SELECCIONADAS-------*/
const obtenerCantidadProductoEnCarrito = (producto) => {
  let cantidad = 0;
  for (let item of carrito.productosSeleccionados) {
    cantidad += item.nombre == producto.nombre ? 1 : 0;
  }
  return cantidad;
};

const setCantidadesInicialesPorProducto = (objetoHTML, producto) => {
  objetoHTML.innerHTML = obtenerCantidadProductoEnCarrito(producto);
};

const completarCantidadesIniciales = () => {
  setCantidadesInicialesPorProducto(cantidadGoku, goku);
  setCantidadesInicialesPorProducto(cantidadPiccolo, piccolo);
  setCantidadesInicialesPorProducto(cantidadVegeta, vegeta);
  setCantidadesInicialesPorProducto(cantidadGohan, gohan);
  setCantidadesInicialesPorProducto(cantidadTrunks, trunks);
};

/*-------ACTUALIZAR RESUMEN COMPRA-------*/

function actualizarResumenCompra() {
  const sinRecargo = carrito.calcularTotalCarritoSinRecargo();
  const conRecargo = carrito.calcularTotalCarritoConRecargo();
  const gastosEnvio = carrito.calcularGastosEnvio();

  totalSeleccionado.innerHTML = carrito.productosSeleccionados.length;
  montoAcumulado.innerHTML = sinRecargo;
  recargoCuotas.innerHTML = conRecargo - sinRecargo;
  montoTotal.innerHTML = conRecargo + gastosEnvio;
}

/*-------ACTUALIZAR CUOTAS-------*/

function actualizarRecargoCuotas(cantidadCuotas, btnID) {
  if (cantidadCuotas != 0) {
    const cuotas = new TipoCuotas(cantidadCuotas);
    carrito.tipoCuotas = cuotas;
    guardarCarritoLocal(carrito);

    guardarValorLocal(claveIdBtnCuotas, btnID);
    actualizarResumenCompra();
    actualizarDetalleCuotas();
    cambiarEstadoBtn(btnID);
    notificarCantidadCuotas(cantidadCuotas);
  }
}

const notificarCantidadCuotas = (cantidadCuotas) => {
  const texto =
    cantidadCuotas == 1
      ? `Pagás en ${cantidadCuotas} cuota!`
      : `Pagás en ${cantidadCuotas} cuotas!`;
  const destino = "";
  const posicionX = "bottom"; // `top` or `bottom`
  const posicionY = "center"; // `left`, `center` or `right`
  const colorBackground = "linear-gradient(90deg, #1CB5E0 0%, #000851 100%)";

  notificarCambioUsuario(texto, destino, posicionX, posicionY, colorBackground);
};

function cambiarEstadoBtn(btnID) {
  for (let item of allBtns) {
    item.className = "btn btn-ahora-unselected";
  }
  let btn = document.querySelector(`#${CSS.escape(btnID)}`);
  btn.className = "btn btn-ahora-selected";
}

// /*-------ACTUALIZAR DETALLE CUOTAS-------*/

function actualizarDetalleCuotas() {
  listaDetalleCuotas.innerHTML = carrito.armarDetalleCuotas();
}
