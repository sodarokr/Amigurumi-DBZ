let btnMasGoku;
let btnMasPiccolo;
let btnMasVegeta;
let btnMasGohan;
let btnMasTrunks;

let btnMenosGoku;
let btnMenosPiccolo;
let btnMenosVegeta;
let btnMenosGohan;
let btnMenosTrunks;

let precioGoku;
let precioPiccolo;
let precioVegeta;
let precioGohan;
let precioTrunks;

let cantidadGoku;
let cantidadPiccolo;
let cantidadVegeta;
let cantidadGohan;
let cantidadTrunks;

let nombrePiccolo;
let nombreGoku;
let nombreVegeta;
let nombreGohan;
let nombreTrunks;

let imgGoku;
let imgPiccolo;
let imgVegeta;
let imgGohan;
let imgTrunks;

let costoActualPiccolo;
let costoActualGoku;
let costoActualVegeta;
let costoActualGohan;
let costoActualTrunks;

let porcentajeActualGananciaGoku;
let porcentajeActualGananciaPiccolo;
let porcentajeActualGananciaVegeta;
let porcentajeActualGananciaGohan;
let porcentajeActualGananciaTrunks;

let goku;
let piccolo;
let vegeta;
let gohan;
let trunks;

let resumenCodigoPostal;
let resumenMontoEnvio;
let encabezadoCodigoPostal;
let encabezadoNombreCliente;

let totalSeleccionado;
let montoAcumulado;
let recargoCuotas;
let montoTotal;

let btnCuota1;
let btnCuota3;
let btnCuota6;
let btnCuota12;
let btnCuota18;
let allBtns;

let listaDetalleCuotas;

let btnCerrarSesion;
let btnFinalizarCompra;

const initTienda = async (sesionNueva) => {
  cargarHTMLCarrito();
  getObjHTMLCarrito();
  inicializarVariablesProductos();
  await crearInstanciasProductos();
  completarPrecios();
  initCarrito(sesionNueva);
};

const getObjHTMLCarrito = () => {
  btnCerrarSesion = document.querySelector("#button-cerrarsesion");
  btnCerrarSesion.addEventListener("click", cerrarSesion);
  btnFinalizarCompra = document.querySelector("#button-finalizarcompra");
  btnFinalizarCompra.addEventListener("click", finalizarCompra);

  btnMasGoku = document.querySelector("#btnMasGoku");
  btnMasPiccolo = document.querySelector("#btnMasPiccolo");
  btnMasVegeta = document.querySelector("#btnMasVegeta");
  btnMasGohan = document.querySelector("#btnMasGohan");
  btnMasTrunks = document.querySelector("#btnMasTrunks");

  btnMenosGoku = document.querySelector("#btnMenosGoku");
  btnMenosPiccolo = document.querySelector("#btnMenosPiccolo");
  btnMenosVegeta = document.querySelector("#btnMenosVegeta");
  btnMenosGohan = document.querySelector("#btnMenosGohan");
  btnMenosTrunks = document.querySelector("#btnMenosTrunks");

  precioGoku = document.querySelector("#precio-Goku");
  precioPiccolo = document.querySelector("#precio-Piccolo");
  precioVegeta = document.querySelector("#precio-Vegeta");
  precioGohan = document.querySelector("#precio-Gohan");
  precioTrunks = document.querySelector("#precio-Trunks");

  cantidadGoku = document.querySelector("#cantidad-Goku");
  cantidadPiccolo = document.querySelector("#cantidad-Piccolo");
  cantidadVegeta = document.querySelector("#cantidad-Vegeta");
  cantidadGohan = document.querySelector("#cantidad-Gohan");
  cantidadTrunks = document.querySelector("#cantidad-Trunks");

  resumenCodigoPostal = document.querySelector("#codigoPostal");
  resumenMontoEnvio = document.querySelector("#montoEnvio");

  encabezadoCodigoPostal = document.querySelector("#header-inputs__cpCliente");
  encabezadoNombreCliente = document.querySelector(
    "#header-inputs__nombreCliente"
  );

  totalSeleccionado = document.querySelector("#totalSeleccionado");
  montoAcumulado = document.querySelector("#montoAcumulado");
  recargoCuotas = document.querySelector("#recargoCuotas");
  montoTotal = document.querySelector("#montoTotal");

  btnCuota1 = document.querySelector("#btnCuota1");
  btnCuota3 = document.querySelector("#btnCuota3");
  btnCuota6 = document.querySelector("#btnCuota6");
  btnCuota12 = document.querySelector("#btnCuota12");
  btnCuota18 = document.querySelector("#btnCuota18");
  allBtns = document.querySelectorAll(".planes-cuotas button");

  btnCuota1.addEventListener("click", () => {
    actualizarRecargoCuotas(1, btnCuota1.id);
  });
  btnCuota3.addEventListener("click", () => {
    actualizarRecargoCuotas(3, btnCuota3.id);
  });
  btnCuota6.addEventListener("click", () => {
    actualizarRecargoCuotas(6, btnCuota6.id);
  });
  btnCuota12.addEventListener("click", () => {
    actualizarRecargoCuotas(12, btnCuota12.id);
  });
  btnCuota18.addEventListener("click", () => {
    actualizarRecargoCuotas(18, btnCuota18.id);
  });

  listaDetalleCuotas = document.querySelector("#listaDetalleCuotas");
};

const inicializarVariablesProductos = () => {
  nombrePiccolo = "Piccolo";
  nombreGoku = "Goku";
  nombreVegeta = "Vegeta";
  nombreGohan = "Gohan";
  nombreTrunks = "Trunks";
  imgGoku = "IMG/goku.webp";
  imgPiccolo = "IMG/picollo.jpg";
  imgVegeta = "IMG/vegeta.webp";
  imgGohan = "IMG/gohan.jpg";
  imgTrunks = "IMG/trunks.jpg";
  costoActualPiccolo = 500;
  costoActualGoku = 900;
  costoActualVegeta = 800;
  costoActualGohan = 600;
  costoActualTrunks = 1100;
  porcentajeActualGananciaGoku = 0.5;
  porcentajeActualGananciaPiccolo = 0.2;
  porcentajeActualGananciaVegeta = 0.3;
  porcentajeActualGananciaGohan = 0.4;
  porcentajeActualGananciaTrunks = 0.1;
};

const cerrarSesion = () => {
  limpiarLocal();
  guardarValorLocal(claveSesionIniciada, 0);
  Swal.fire({
    title: "Cerrar Sesión",
    text: "Tu sesión finalizó correctamente.",
    icon: "success",
    confirmButtonText: "OK!",
    timer: 2000,
  });
  initIngreso();
};

const finalizarCompra = () => {
  if (carrito.productosSeleccionados.length > 0) {
    Swal.fire({
      title: "Compra Confirmada!",
      text: "Muchas gracias por tu compra! En los próximos 5 días hábiles recibirás tus amigurumis!",
      icon: "success",
      confirmButtonText: "OK!",
      timer: 2000,
    });

    limpiarLocal();
    guardarValorLocal(claveSesionIniciada, 0);
    initIngreso();
  } else {
    Swal.fire({
      title: "Carrito Vacío!",
      text: "No tenés productos seleccionados aun!",
      icon: "error",
      confirmButtonText: "OK!",
      timer: 2000,
    });
  }
};

/*--------------------------------INSTANCIAS-------------------------------------*/
const crearInstanciasProductos = async () => {
  let datos = await obtenerDatosProductos();

  let gokuJSON = datos.filter((dato) => {
    return dato.nombre == "Goku";
  })[0];
  goku = crearAmigurumi(gokuJSON);

  let piccoloJSON = datos.filter((dato) => {
    return dato.nombre == "Piccolo";
  })[0];
  piccolo = crearAmigurumi(piccoloJSON);

  let vegetaJSON = datos.filter((dato) => {
    return dato.nombre == "Vegeta";
  })[0];
  vegeta = crearAmigurumi(vegetaJSON);

  let gohanJSON = datos.filter((dato) => {
    return dato.nombre == "Gohan";
  })[0];
  gohan = crearAmigurumi(gohanJSON);

  let trunksJSON = datos.filter((dato) => {
    return dato.nombre == "Trunks";
  })[0];
  trunks = crearAmigurumi(trunksJSON);
};

const crearAmigurumi = ({ nombre, costo, porcentajeGanancia, img }) => {
  let amigurumi = new Amigurimi(nombre, costo, porcentajeGanancia, img);
  return amigurumi;
};

const obtenerDatosProductos = async () => {
  try {
    let res = await fetch("js/datos.json");
    let json = await res.json();
    return json;
  } catch (err) {
    console.log("Se encontró un error al obtener los datos: ");
    console.log(err);
  }
};

/*-------COMPLETAR PRECIOS-------*/
const completarPrecios = () => {
  precioGoku.innerHTML = "$" + goku.precio;
  precioPiccolo.innerHTML = "$" + piccolo.precio;
  precioVegeta.innerHTML = "$" + vegeta.precio;
  precioGohan.innerHTML = "$" + gohan.precio;
  precioTrunks.innerHTML = "$" + trunks.precio;
};
