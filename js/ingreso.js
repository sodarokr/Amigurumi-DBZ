/*------------------------------------OBJETOS INGRESO-----------------------------*/
let inputName;
let inputCP;
let buttonIngresar;

const initIngreso = () => {
  cargarHTMLIngreso();
  inputName = document.querySelector("#input-name");
  inputCP = document.querySelector("#input-cp");
  buttonIngresar = document.querySelector("#button-ingresar");
  buttonIngresar.addEventListener("click", validarIngreso);
};

/*----------------------------LOGICA INGRESO CARRITO-----------------------------*/
const validarIngreso = () => {
  if (inputName.value != "") {
    if (
      inputCP.value != "" &&
      esNumero(inputCP.value) &&
      esMenorIgualQue(inputCP.value, 9999)
    ) {
      // validarCodigoPostal(inputCP.value);

      //Creo el objeto Cliente y lo guardo en LocalStorage
      const nombreCliente = inputName.value;
      const codPostal = inputCP.value;

      const cliente = new Cliente(nombreCliente, codPostal);

      guardarObjetoLocal(claveCliente, cliente);

      //Guardo el flag de inicio de sesion en LocalStorage
      guardarValorLocal(claveSesionIniciada, 1);

      Swal.fire({
        title: "Login Exitoso!",
        text: "Sesión iniciada correctamente.",
        icon: "success",
        confirmButtonText: "OK!",
        timer: 2000,
      });

      //Inicializo la tienda
      initTienda(true);
    } else {
      Swal.fire({
        title: "Error!",
        text: "Tu Código Postal debe ser un número entre 0000-9999",
        icon: "error",
        confirmButtonText: "OK!",
        timer: 2000,
      });
    }
    //
  } else {
    Swal.fire({
      title: "Error!",
      text: "Ingresá tu nombre por favor.",
      icon: "error",
      confirmButtonText: "OK!",
      timer: 2000,
    });
  }
};
