/*------------------------------------OBJETOS CARRITO-----------------------------*/

/*------------------------------------HTML CARRITO-----------------------------*/
const carritoHTML = ` <div class="carrito">
<div class="lista-articulos animate__animated animate__fadeInLeft">
  <p class="titulo-seccion">Lista de Artículos Seleccionados</p>
  <div class="articulo">
    <div class="articulo-descripcion">
      <img
        src="IMG/goku.webp"
        alt="Amigurumi Dragon Ball"
        class="articulo-img"
      />
      <div class="articulo-descripcion__descripcion">
        <h4>Amigurumi Goku</h4>
        <p class="articulo-descripcion__precioPorUnidad">
          Precio por Unidad: <strong id="precio-Goku">0</strong>
        </p>
        <p class="articulo-descripcion__cantidadSeleccionada">
          Cantidad Seleccionada: <strong id="cantidad-Goku">0</strong>
        </p>
      </div>
    </div>
    <div class="articulo-controles">
      <button id="btnMenosGoku" class="articulo-controles__botonMenos">
        -
      </button>
      <button id="btnMasGoku" class="articulo-controles__botonMas">
        +
      </button>
    </div>
  </div>
  <div class="articulo">
    <div class="articulo-descripcion">
      <img
        src="IMG/picollo.jpg"
        alt="Amigurumi Dragon Ball"
        class="articulo-img"
      />
      <div class="articulo-descripcion__descripcion">
        <h4>Amigurumi Piccolo</h4>
        <p class="articulo-descripcion__precioPorUnidad">
          Precio por Unidad: <strong id="precio-Piccolo">0</strong>
        </p>
        <p class="articulo-descripcion__cantidadSeleccionada">
          Cantidad Seleccionada:
          <strong id="cantidad-Piccolo">0</strong>
        </p>
      </div>
    </div>
    <div class="articulo-controles">
      <button
        id="btnMenosPiccolo"
        class="articulo-controles__botonMenos"
      >
        -
      </button>
      <button id="btnMasPiccolo" class="articulo-controles__botonMas">
        +
      </button>
    </div>
  </div>
  <div class="articulo">
    <div class="articulo-descripcion">
      <img
        src="IMG/vegeta.webp"
        alt="Amigurumi Dragon Ball"
        class="articulo-img"
      />
      <div class="articulo-descripcion__descripcion">
        <h4>Amigurumi Vegeta</h4>
        <p class="articulo-descripcion__precioPorUnidad">
          Precio por Unidad: <strong id="precio-Vegeta">0</strong>
        </p>
        <p class="articulo-descripcion__cantidadSeleccionada">
          Cantidad Seleccionada: <strong id="cantidad-Vegeta">0</strong>
        </p>
      </div>
    </div>
    <div class="articulo-controles">
      <button
        id="btnMenosVegeta"
        class="articulo-controles__botonMenos"
      >
        -
      </button>
      <button id="btnMasVegeta" class="articulo-controles__botonMas">
        +
      </button>
    </div>
  </div>
  <div class="articulo">
    <div class="articulo-descripcion">
      <img
        src="IMG/gohan.jpg"
        alt="Amigurumi Dragon Ball"
        class="articulo-img"
      />
      <div class="articulo-descripcion__descripcion">
        <h4>Amigurumi Gohan</h4>
        <p class="articulo-descripcion__precioPorUnidad">
          Precio por Unidad: <strong id="precio-Gohan">0</strong>
        </p>
        <p class="articulo-descripcion__cantidadSeleccionada">
          Cantidad Seleccionada: <strong id="cantidad-Gohan">0</strong>
        </p>
      </div>
    </div>
    <div class="articulo-controles">
      <button id="btnMenosGohan" class="articulo-controles__botonMenos">
        -
      </button>
      <button id="btnMasGohan" class="articulo-controles__botonMas">
        +
      </button>
    </div>
  </div>
  <div class="articulo">
    <div class="articulo-descripcion">
      <img
        src="IMG/trunks.jpg"
        alt="Amigurumi Dragon Ball"
        class="articulo-img"
      />
      <div class="articulo-descripcion__descripcion">
        <h4>Amigurumi Trunks</h4>
        <p class="articulo-descripcion__precioPorUnidad">
          Precio por Unidad: <strong id="precio-Trunks">0</strong>
        </p>
        <p class="articulo-descripcion__cantidadSeleccionada">
          Cantidad Seleccionada: <strong id="cantidad-Trunks">0</strong>
        </p>
      </div>
    </div>
    <div class="articulo-controles">
      <button
        id="btnMenosTrunks"
        class="articulo-controles__botonMenos"
      >
        -
      </button>
      <button id="btnMasTrunks" class="articulo-controles__botonMas">
        +
      </button>
    </div>
  </div>
</div>
<div class="detalleGastos animate__animated animate__fadeInUp">
  <p class="titulo-seccion">Pago en Cuotas</p>
  <div class="ingreso-cuotas">
    <p class="detalleGastos-itemDetalle">
      <strong>Cantidad de Cuotas:</strong>
    </p>
    <div class="planes-cuotas">
      <div class="cuota1">
        <button id="btnCuota1" class="btn btn-ahora-unselected">
          1
        </button>
        <p class="porcentajeInteres">(0%)</p>
      </div>
      <div class="cuota2">
        <button id="btnCuota3" class="btn btn-ahora-unselected">
          3
        </button>
        <p class="porcentajeInteres">(10%)</p>
      </div>
      <div class="cuota3">
        <button id="btnCuota6" class="btn btn-ahora-unselected">
          6
        </button>
        <p class="porcentajeInteres">(30%)</p>
      </div>
      <div class="cuota4">
        <button id="btnCuota12" class="btn btn-ahora-unselected">
          12
        </button>
        <p class="porcentajeInteres">(50%)</p>
      </div>
      <div class="cuota5">
        <button id="btnCuota18" class="btn btn-ahora-unselected">
          18
        </button>
        <p class="porcentajeInteres">(90%)</p>
      </div>
    </div>
  </div>

  <div class="detalleCuotas">
    <p class="titulo-seccion">Detalle de Cuotas</p>
    <ul id="listaDetalleCuotas"></ul>
  </div>
</div>
<div class="resumenCompra animate__animated animate__fadeInRight">
  <p class="titulo-seccion">Resumen Compra</p>
  <div>
    <p class="detalleGastos-itemDetalle">
      <strong> Total Artículos Seleccionados:</strong>
      <span id="totalSeleccionado">0</span>
    </p>
    <p class="detalleGastos-itemDetalle">
      <strong> Monto Acumulado:</strong> $<span id="montoAcumulado"
        >0</span
      >
    </p>
    <p class="detalleGastos-itemDetalle">
      <strong>Recargo por Cuotas :</strong>
      $<span id="recargoCuotas">0</span>
    </p>
    <p class="detalleGastos-itemDetalle">
      <strong
        >Gastos de envío a CP <span id="codigoPostal">0</span> :</strong
      >
      $<span id="montoEnvio">0</span>
    </p>
    <p class="detalleGastos-montoTotal">
      <strong>Monto Total:</strong> $<span id="montoTotal">0</span>
    </p>
  </div>
</div>
</div>`;

const cargarHTMLCarrito = () => {
  encabezado.innerHTML = encabezadoCarritoHTML;
  container.innerHTML = carritoHTML;
};
const cargarHTMLIngreso = () => {
  encabezado.innerHTML = encabezadoIngresoHTML;
  container.innerHTML = ingresoHTML;
};

/*-------------------------------INYECTAR HTML CARRITO-----------------------------*/

/*------------------------------------HTML INGRESO-----------------------------*/
const ingresoHTML = `
<div class="formulario">
  <div class="form-item">
    <label for="name">Nombre</label>
    <input
      class="inputs"
      type="text"
      name="name"
      id="input-name"
      value=""
    />
  </div>
  <div class="form-item">
    <label for="cp">Código Postal (0000-9999)</label>
    <input
      class="inputs"
      type="text"
      name="cp"
      id="input-cp"
      value="0000"
    />
  </div>
  <button id="button-ingresar">Ingresar</button>
</div>`;

const encabezadoIngresoHTML = `<h1>Desafío Entregable</h1>
<h2>Carrito de Compras</h2>
<h3>Gimenez Juan Manuel</h3>`;

const encabezadoCarritoHTML = `<h1>Tienda de Amigurumis DBZ</h1>
<div class="user-data">
  <div class="header-fields">
    <p class="header-fields__label">Usuario:</p>
    <p class="header-fields__label">Código Postal:</p>
  </div>
  <div class="header-inputs">
    <p id="header-inputs__nombreCliente" class="header-inputs__label">
         </p>
    <p id="header-inputs__cpCliente" class="header-inputs__label"></p>
  </div>
</div>
<div id="botones-encabezado">
  <button id="button-finalizarcompra" class="btn-encabezado">
    Finalizar Compra
  </button>
  <button id="button-cerrarsesion" class="btn-encabezado">
    Cerrar Sesión
  </button>
</div>`;
