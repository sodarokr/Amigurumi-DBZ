/*---------------------------INIT---------------------------*/
const container = document.querySelector("#container");
const encabezado = document.querySelector("#encabezado");

const claveCliente = "Cliente";
const claveCarrito = "Carrito";
const claveCuotas = "Cuotas";
const claveSesionIniciada = "sesionIniciada";
const claveIdBtnCuotas = "idBtnCuotas";

const claveCarritoJSON = "carritoJSON";
const claveCarritoClienteJSON = "carritoClienteJSON";
const claveCarritoTipoCuotaJSON = "carritoTipoCuotaJSON";

const init = async () => {
  //Verificar si existe una sesion abierta previa
  if (
    localStorage.getItem("sesionIniciada") == null ||
    localStorage.getItem("sesionIniciada") == 0
  ) {
    //Si no existe o es cero
    initIngreso();
  } else {
    //Si existe - Levantar sesión abierta
    await initTienda(false);
  }
};

document.addEventListener("DOMContentLoaded", init);
