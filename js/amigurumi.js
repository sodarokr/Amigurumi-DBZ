class Amigurimi {
  constructor(nombre, costo, ganancia, img) {
    this.nombre = nombre;
    this.costo = costo;
    this.porcentajeGanancia = ganancia;
    this.disponible = true;
    this.img = img;
    this.precio = this.costo + this.costo * this.porcentajeGanancia;
  }
}
