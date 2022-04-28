/*--------------------FUNCIONES STORAGE Y JSON-----------------------*/

const guardarValorLocal = (clave, valor) => {
  localStorage.setItem(clave, valor);
};
const borrarValorLocal = (clave) => {
  localStorage.removeItem(clave);
};
const limpiarLocal = () => {
  localStorage.clear();
};

const guardarObjetoLocal = (clave, objeto) => {
  guardarValorLocal(clave, JSON.stringify(objeto));
};

const guardarCarritoLocal = ({
  productosSeleccionados,
  cliente,
  tipoCuotas,
}) => {
  guardarObjetoLocal(claveCarritoJSON, productosSeleccionados);
  guardarObjetoLocal(claveCarritoClienteJSON, cliente);
  guardarObjetoLocal(claveCarritoTipoCuotaJSON, tipoCuotas);
};

const getCarritoLocal = () => {
  let carritoJSON = obtenerObjetoLocal(claveCarritoJSON);
  let clienteJSON = obtenerObjetoLocal(claveCarritoClienteJSON);
  let tipoCuotaJSON = obtenerObjetoLocal(claveCarritoTipoCuotaJSON);

  let instancia = new Carrito(clienteJSON);
  instancia.tipoCuotas = tipoCuotaJSON;
  instancia.productosSeleccionados = carritoJSON;
  return instancia;
};

const obtenerValorLocal = (clave) => {
  return localStorage.getItem(clave);
};

const obtenerObjetoLocal = (clave) => {
  return JSON.parse(localStorage.getItem(clave));
};
